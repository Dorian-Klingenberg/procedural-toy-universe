# Agent Instructions — Procedural Toy Universe

Applies repository-wide to Codex, Copilot, and other coding agents.

## Mission
Build an original, open-source-friendly modular construction and progressive procedural discovery toolkit. Follow docs/VISION.md and docs/ARCHITECTURE.md. Treat examples from existing franchises and games as conceptual references only.

## Before working
1. Read README.md, docs/VISION.md, docs/ARCHITECTURE.md, docs/ROADMAP.md, docs/ASSET_POLICY.md.
2. Inspect the repository and relevant tests before suggesting changes.
3. State the goal, assumptions, constraints, and smallest verifiable increment.
4. Ask before choosing an engine, language, license, major dependency, or importing external assets.
5. Prefer an issue and focused PR over broad changes; do not merge without explicit approval.

## Invariants
- Never place generated geometry outside a fixed hull/structure volume.
- Preserve committed player-observed geometry and modifications.
- Support optional grids, explicit snap connectors, and free placement.
- Blueprints may nest; expose selected connector interfaces at each boundary.
- Keep visual style separate from connection geometry and procedural rules.
- Do not assume destructibility or full simulation in initial scope.
- Avoid lore-specific hardcoding in core APIs.

## Agent guardrails
- No unrelated refactors, destructive commands, secrets, credentials, or network side effects without approval.
- No unlicensed, scraped, ripped, or franchise-specific assets. Record license, author, source URL, modifications, and attribution for every imported asset.
- Write tests for geometry, connectors, deterministic seeds, persistence, and failure cases as functionality is introduced.
- Prefer small, reversible commits and explain verification. If tests cannot run, say so.
- Do not invent completed functionality or claim decisions have been made where docs mark them open.

## Startup workflow
Follow docs/AGENT_BOOTSTRAP.md. At the start of a session, produce a concise status report and proposed next action; do not automatically implement it.
