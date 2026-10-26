---
description: Language- and toolchain-agnostic rules for preserving numbered steps in step-based learning projects.
applyTo: 'projects/**'
---

# Step-Based Learning Project Progression Rules

## Scope

Use these rules for any project under `projects/` that teaches or explores a topic through numbered steps, regardless of programming language, framework, or build system. Adapt the examples and artifact layout to the project's conventions.

## The rule

Preserve each completed step as a distinct, reproducible learning artifact so learners can compare it with later steps.

When advancing from Step N to Step N+1:
1. **Preserve** the completed Step N implementation before changing it. Keep all source files and any step-specific configuration needed to understand, build, or run that step.
2. **Create** the new active Step N+1 implementation using the project's established layout. This can mean copying the previous step forward or starting from a clean scaffold, depending on the lesson.
3. **Do not silently rewrite** completed step artifacts. Treat them as read-only curriculum material. If a correction is necessary, make it explicit and document why the historical artifact changed.
4. **Update** the relevant project, build, launch, or lesson configuration so it clearly identifies how to build or run the active step. Keep archived steps isolated when compiling all of them together would cause conflicts.
5. **Update** the learning plan or equivalent documentation to mark Step N complete and describe what it taught.

## Why

Numbered steps form a diff-able textbook. Learners and future contributors should be able to compare consecutive steps and see what changed, while still being able to build or run each completed lesson when practical.

## Artifact layout

Follow the conventions that best fit the project. For example, a single-file lesson might use numbered source files, while a multi-file application might keep each step in its own directory. Keep the active working version easy to identify.

Illustrative layouts (not requirements):

```text
# Single-file lessons
Program_step1.cs
Program_step2.cs
Program.cs                 # active step
```

```text
# Multi-file lessons
step-1/                    # completed, preserved step
step-2/                    # completed, preserved step
current/                   # active step, if this convention suits the project
```

Use the project's existing naming and directory conventions rather than introducing a new pattern just to match these examples.

## Checklist when advancing a step

- [ ] Preserve the completed Step N source files and any step-specific files needed to understand or run them.
- [ ] Start Step N+1 in the project's clearly identified active location.
- [ ] Update build, project, launch, or lesson configuration as needed to select the active step and isolate archived steps.
- [ ] Confirm the completed step remains understandable and, where practical, builds or runs as expected.
- [ ] Verify the new step's starting point before adding its new lesson content.
- [ ] Update the learning plan or equivalent documentation with the completed step and key takeaway.
