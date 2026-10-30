# GPU Procedural Reuse and Rendering — Research Notes

> **Exploratory discussion only.** Not a sandbox, implementation plan, renderer selection, or approved architectural decision. Reconstructed meeting minutes from October 2026 and related earlier conversations, preserving user corrections and open questions.

## Purpose

How can a complex greeble or repeating structure, **already defined or already rendered**, be reused thousands or millions of times with minimal *additional GPU work*? The user's concern is not merely reducing CPU object creation or draw submissions, or sharing the same mathematical definition. They specifically want to know whether the **result of previous GPU computation** can be reused almost as cheaply as an endlessly repeating texture.

This research lives alongside the main Procedural Toy Universe project. It is intentionally conceptual, independent of engine, graphics API, language, and implementation timeline.

## Larger vision and background

The project has roots in the user's childhood interest in classic science-fiction toys and an imagined electronic toy universe, discussed as dating back to around 1987: build, modify, explore, and play in physically coherent environments. Planet Coaster's construction tools, LEGO-like composability, and Star Wars playsets are inspirations; the eventual open-source core should remain generic and legally redistributable. It is a playful parallel to the user's other puzzle-oriented work.

**Blueprints are recipes, not indivisible models.** A corridor, machinery room, ship section, or entire vehicle is assembled from smaller parts. Components may snap to grids, attach at explicit connector points, or be placed freely. Nested blueprints may selectively expose inherited or custom connectors. Geometry snapping and semantic system connections are different things. The rendering system should not discard this logical disassemblability.

**Two procedural regimes:** man-made things are somewhat Diablo-like, composed of designed compatible rooms, structural modules, and facilities; natural environments are mechanically Minecraft-like in being extensive, persistent, and editable, but should not be visually cubic. The representations need not be identical.

**Ship example:** A Star Destroyer has fixed hull-defined locations for reactor/power plant, engines, hangars, command, and weapon mounts. The user specifically rejected randomizing major systems whose structural shells were designed around them. Equipment and interiors may vary within those fixed physical envelopes: different reactor assemblies, guns, detention cells, crew accommodation, maintenance, waste processing, storage, and upgrades. Larger hangars or other upgrades that do not fit require real structural redesign. Everything must physically fit the hull.

**Progressive discovery:** Undiscovered rooms may remain undecided until a player opens a door. The generator must honor existing observations, structural constraints, and persistent player changes. A seed may resolve valid variation but must not invent physically impossible spaces. A Millennium Falcon / YT-1300 example previously illustrated fixed exterior anchors with variable interior equipment and layouts.

## How the GPU discussion evolved

1. **Mathematical geometry:** The user proposed functions, ray marching, and very fast GPU techniques instead of cubes. The assistant described implicit geometry, signed distance fields (SDFs), CSG, noise, and hybrid renderers.
2. **Reuse of functions:** The user asked how greebles could be defined as reusable functions and transformed/repeated. The assistant described one SDF used in many placements, nested assemblies, spatial acceleration, and LOD.
3. **First correction:** The user meant shader techniques that create repeating patterns potentially extending indefinitely without extra CPU work. The assistant introduced **domain repetition / coordinate folding** via modulo arithmetic.
4. **Second correction:** The user meant **GPU**, not CPU. Re-evaluating the function at every ray step might still be too expensive. If a feature has already been drawn, why recompute it?
5. **Emerging direction:** Explore reuse of actual computed appearance via hardware texture tiling, baked material maps, impostors, cached fields, and aggregate LOD, with real geometry reserved for features that need it.

The distinction between **definition reuse** and **render-result reuse** is the central insight.

## What each technique reuses

| Technique | Reused resource | GPU work that remains |
| --- | --- | --- |
| Hardware texture wrap / tiling | One material/texture tile repeated across UV space | Visible-pixel shading, texture filtering, memory traffic |
| Baked normal, roughness, height maps | Precomputed surface appearance | Sampling, shading, optional parallax steps; no exact silhouettes |
| Pre-rendered impostor atlas | Cached views of a 3D object or cluster | View selection, texture sampling, geometry proxy, depth/lighting approximation |
| Mesh instancing / GPU-driven indirect draws | Mesh buffers, materials, transforms | Geometry processing, rasterization, shading for visible instances |
| SDF domain repetition | One mathematical shape function | Repeated shader evaluation per sample/ray step |
| Cached field or volume | Precomputed spatial samples | Sampling, interpolation, ray traversal |
| Aggregate mesh or material LOD | Simplified precomputed group representation | Rendering simplified geometry or sampling baked detail |

**Important:** Neither infinite domain repetition nor instancing makes rendering free. They reduce data and/or CPU overhead, not necessarily GPU shading cost. **Tiled materials** are closest to repetition-count-independent work for mostly surface-bound detail: at fixed screen coverage, drawing more conceptual repeats does not require individually processing each greeble.

## Domain folding: powerful, but not a GPU free lunch

A periodic coordinate mapping:

```text
q = mod(p + 0.5 * cellSize, cellSize) - 0.5 * cellSize
distance = sdfForOneCell(q)
```

This produces a lattice of repeated shapes from one definition. Variants include 1D repetition (ribs/fins), 2D repetition (panels), 3D repetition (lattices), and polar repetition (turbines). Cell identifiers can seed deterministic variation. But the function is still evaluated wherever the renderer needs it. Ray-marching cost depends on screen resolution, steps, shader complexity, spatial bounds, and divergence. SDF safety near cell boundaries and under transforms also matters.

## “We already drew it once”: a candidate hierarchy of representations

Imagine a Star Destroyer hull covered in vents, ridges, bolts, conduits, and raised housings.

- At a distance, a **tileable baked material** can represent thousands of repeated fine details. Hardware texture wrap and mipmapping reuse the same data.
- At intermediate range, **simplified meshes or depth/normal impostors** can represent protruding machinery clusters.
- Up close, **instanced or individual geometry** can provide accurate silhouette, shadows, collision, and editing.
- The underlying blueprint or procedural rule can remain intact regardless of what is rendered.

A baked tile may include albedo, normals, roughness, ambient occlusion, and optional height. A cached image is not a complete replacement for 3D geometry under arbitrary lighting, camera motion, or shadows. Depth-aware or multiview impostors mitigate some limitations but cost additional memory and sampling.

Possible supporting techniques to research: texture arrays/atlases, virtual or sparse texturing, GPU culling, indirect draws, meshlets/mesh shaders, geometry clipmaps, shader-to-texture baking, temporal caching/reprojection, and procedural-to-aggregate compilation. **None has been selected or benchmarked.**

## Greeble identity, editing, and persistence

A “greeble” may be:
- purely visual material detail, with no separate identity;
- a procedurally implied feature addressable by seed, rule, and cell coordinate;
- a persistent individual component that can be selected, moved, or removed;
- a cached aggregate representation of many logical parts.

These meanings are different. If a player removes one procedurally repeated hatch, the world may need to record a persistent exception or materialize it as an editable component. A renderer's cheap repetition should not silently erase individual changes or blueprint semantics.

Conceptual separation (not an approved architecture):

```text
Editable parts + nested blueprints + generation rules + committed edits
                              |
                    Rendering representation
        tiled material / impostor / aggregate / instance / SDF
                              |
                             GPU
```

## Examples beyond hull plating

**Interiors:** barracks, detention cells, bunks, storage racks, waste handling, service spaces, and maintenance machinery can use repeatable *logical* assemblies. Their best rendering strategy may differ from exterior greebles.

**Natural environments:** caves, mountains, strata, and excavation can use mathematical functions, splines, noise, CSG, or hybrid representations, without visible cubes. Persistent edits and distant LOD remain open challenges.

**A crashed ship embedded in terrain:** constructed and natural procedural rules must intersect consistently. Destructibility was discussed as a future possibility, **not** a current implementation requirement.

## Related asset sourcing discussion

The user does not want to spend hours browsing thumbnails. Earlier discussion favored complete modular kits, machine-readable catalogs, and automated asset ingestion/curation rather than scattered models. Candidate sources included Kenney, Quaternius, Poly Haven, and ambientCG; license suitability must be verified before importing. Free download does not imply redistribution permission. Star Wars and Planet Coaster are design inspirations, not permissions to bundle their intellectual property.

An intriguing possible asset workflow is to assemble or mathematically generate detail once, then **bake multiple reusable render representations**. This remains only a research possibility.

## Questions to keep open

1. What is the cheapest reusable representation for a particular greeble: texture, material, depth impostor, mesh, or cached field?
2. At fixed screen resolution, how closely can cost approach independence from the number of repeated features?
3. Which details must have actual silhouettes, correct shadows, collision, or individual editability?
4. How do we clip repeated patterns to arbitrary hull geometry, hangars, guns, and unique openings?
5. Can rule + seed + cell coordinate provide stable identities for generated details and local overrides?
6. How should transitions between material, impostor, aggregate, and actual geometry work?
7. How do changing light, camera, reflections, and shadows affect cache validity?
8. Could blueprints expose procedural repetition rules as well as connector interfaces?
9. How do terrain edits interact with implicit representations and caching?
10. What would a fair benchmark measure: GPU time, shader invocations, bandwidth, memory, image quality, and editability?

## Explicit non-decisions

No engine, graphics API, programming language, GPU target, renderer, caching scheme, license, or asset pack is chosen here. No prototype, benchmark, or implementation is requested. No commitment to universal SDF ray marching, voxels, or all-mesh rendering. No immediate destructibility requirement.

## Vocabulary / reference

Search terms: **texture tiling, wrap addressing, material baking, impostor atlas, depth impostor, normal mapping, parallax mapping, instancing, indirect drawing, mesh shaders, meshlets, domain repetition, domain folding, signed distance fields, sphere tracing, virtual texturing, geometry clipmaps, GPU-driven culling**.

Mathematical background: [Inigo Quilez — 3D distance functions](https://iquilezles.org/articles/distfunctions/). This is a technique reference, not evidence that ray marching is the right final renderer.

## Central takeaway

> **Not merely “how can one function define a million greebles?” but “how can a result already computed or drawn represent a million repeated details with minimal additional GPU work, while retaining editable construction where it matters?”**

These notes are a starting point for further conversations, not frozen requirements.
