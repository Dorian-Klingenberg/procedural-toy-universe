# Agent Instructions — Procedural Toy Universe

Applies repository-wide to Codex, Copilot, and other coding agents.

## Mission
Build an original, open-source-friendly modular construction and progressive procedural discovery toolkit. Follow `docs/VISION.md` and `docs/ARCHITECTURE.md`. Treat examples from existing franchises and games as conceptual references only.

## Before working
1. Read `README.md`, `docs/VISION.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, and `docs/ASSET_POLICY.md`.
2. Read `docs/OPEN_QUESTIONS.md` and `docs/DECISIONS.md` before planning work that could affect project direction or answer an open question.
3. Inspect the repository and relevant tests before suggesting changes.
4. State the goal, assumptions, constraints, and smallest verifiable increment.
5. Ask before choosing an engine, language, license, major dependency, or importing external assets.
6. Prefer an issue and focused PR over broad changes; do not merge without explicit approval.

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

## Project knowledge records — required
Keep `docs/OPEN_QUESTIONS.md` and `docs/DECISIONS.md` as the durable, concise project records. These requirements apply to every agent and substantive project conversation; they are not optional and do not depend on a skill being available.

- Before planning, consult the records and relevant source documents. Treat the records as indexes and summaries; the referenced source documents remain authoritative for their subject matter.
- Add substantive unanswered project questions to `docs/OPEN_QUESTIONS.md`, with a stable ID, concise wording, priority, status, and source/context. Update priority or status when circumstances change. When answered, record the concise answer and link the related decision or evidence; do not leave resolved items marked open.
- When a user or authorized project discussion makes a consequential decision, add it to `docs/DECISIONS.md` with a stable ID, date, decision, concise context/rationale, and references. Summarize important conversations only when they materially shaped a decision; do not copy full transcripts or record routine chat.
- Make these updates in the same change as the work or decision where practical. If a decision is explicitly deferred, record or update the corresponding open question instead of presenting it as settled.
- Never infer a decision from a proposal, suggestion, implementation detail, or silence. Ask for clarification where needed, and correct the records if they become inaccurate.
- Keep entries concise, link related records and source documents, and preserve history when updating an entry. Do not delete a resolved question merely to keep the open list short.

## Startup workflow
Follow `docs/AGENT_BOOTSTRAP.md`. At the start of a session, produce a concise status report and proposed next action; do not automatically implement it.
