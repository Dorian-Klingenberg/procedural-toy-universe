# Open Questions and Project Q&A

This is the concise, durable ledger of substantive project questions, their answers, and unresolved items. It is not a transcript. Keep priorities current, preserve resolved entries, and link related decisions and source documents. See the project-wide requirements in [`AGENTS.md`](../AGENTS.md).

## Priority guide

- **P0 — Blocking:** Must be answered before the next dependent work can proceed.
- **P1 — High:** Needed for a near-term milestone or to prevent costly rework.
- **P2 — Normal:** Important, but can remain open while independent work proceeds.
- **P3 — Later:** Deferred or relevant mainly to a later possibility.

Priorities are relative and may change as the project evolves. An open question is not a decision.

## Open questions

| ID | Priority | Status | Question | Context / next step |
|---|---|---|---|---|
| Q-001 | P1 | Open | Which engine, programming language, and smallest technical stack should the project use for its first construction-and-blueprint slice? | Foundation decision in [`ROADMAP.md`](ROADMAP.md); ask before selecting a stack. |
| Q-002 | P1 | Open | What code license, if any, should the project adopt? | Foundation decision in [`ROADMAP.md`](ROADMAP.md); content and dependency licenses must also be reviewed separately. |
| Q-003 | P2 | Open | How should inherited and custom connector interfaces coexist? | Architecture prototype question; retain explicit interface exposure. |
| Q-004 | P2 | Open | What grid resolutions and rotation freedoms should be supported? | Architecture prototype question; grids remain optional. |
| Q-005 | P2 | Open | How should blueprint bounds and hull occupancy be represented? | Architecture prototype question; must preserve the fixed-volume invariant. |
| Q-006 | P2 | Open | How can future feasible configurations be guaranteed without prematurely resolving unexplored spaces? | Architecture prototype question; investigate while designing bounded generation. |
| Q-007 | P3 | Open | How should simultaneous explorers avoid conflicting commits? | Architecture prototype question; multiplayer is a later possibility, so defer until scope requires it. |

## Answered questions

| ID | Answered | Question | Durable answer | Related decision / evidence |
|---|---|---|---|---|
| — | — | No substantive project questions have been answered and recorded yet. | — | — |

## Updating this ledger

- Give each substantive question a stable `Q-NNN` ID; do not reuse IDs.
- Keep unresolved items in **Open questions** with priority, status, and useful context or next step.
- When resolved, move the item to **Answered questions**, retaining its ID and recording the concise answer and a link to the relevant decision or evidence. If it was resolved by a consequential decision, also create a `D-NNN` entry in [`DECISIONS.md`](DECISIONS.md).
- Record significant question-and-answer outcomes, not routine conversational exchanges. Preserve the final answer and relevant context, not a verbatim transcript.
