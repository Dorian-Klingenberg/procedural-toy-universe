# Agent Instructions — Procedural Toy Universe

Applies repository-wide to Codex, Copilot, and other coding agents.

## Mission
Build an original, open-source-friendly modular construction and progressive procedural discovery toolkit. Follow `docs/VISION.md` and `docs/ARCHITECTURE.md`. Treat examples from existing franchises and games as conceptual references only.

## Working together
- **Questions and exploration:** Discuss ideas naturally. Read project sources when they are relevant, and distinguish established facts from proposals. Discussion alone does not authorize edits or turn possibilities into decisions.
- **Substantial planning:** Inspect the relevant code, tests, project documents, and, when project direction or an existing question is affected, `docs/OPEN_QUESTIONS.md` and `docs/DECISIONS.md`. Discuss the goal, assumptions, constraints, and a small phased plan before implementation.
- **Approved work:** Once the user approves a plan or explicitly authorizes a phase, work autonomously within that scope. Report coherent increments, verification, and what remains; do not ask about routine files, searches, imports, or tests.
- Ask before choosing an engine, language, or license; adding, installing, upgrading, or importing a new third-party dependency; or importing external assets. Prefer established dependencies and standard-library solutions. Do not incidentally change manifests or lockfiles. Prefer a focused PR; merge only when explicitly authorized.
- For a full project orientation, use the optional `/initialize` skill or follow `docs/AGENT_BOOTSTRAP.md` on request. Do not require the full bootstrap for every conversation.

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

## Project knowledge records
Keep `docs/OPEN_QUESTIONS.md` and `docs/DECISIONS.md` as concise, durable project records. They are indexes and summaries; the referenced source documents remain authoritative. Consult them when planning work that could affect project direction or an existing question.

- Exploratory ideas and hypotheticals can remain in conversation. Do not edit records during discussion or planning without authorization, or repeatedly interrupt exploration to request ledger updates.
- When authorized work resolves a substantive question or establishes a consequential decision, update the appropriate record as part of that scope where practical. If a relevant outcome needs recording but the current task does not authorize writing, flag it at a natural decision or handoff point.
- Use stable IDs, concise context, status, and links to relevant evidence. Preserve prior history and mark superseded decisions; do not treat proposals, silence, or implementation details as decisions.
