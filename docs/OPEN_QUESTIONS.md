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
| Q-001 | P1 | Open | Which engine, programming language, and smallest technical stack should the project use for its first construction-and-blueprint slice? | Foundation decision in [`ROADMAP.md`](ROADMAP.md); the sandbox-specific choice in [D-003](DECISIONS.md) does not select the core project stack. |
| Q-002 | P1 | Open | What code license, if any, should the project adopt? | Foundation decision in [`ROADMAP.md`](ROADMAP.md); content and dependency licenses must also be reviewed separately. |
| Q-003 | P2 | Open | How should inherited and custom connector interfaces coexist? | Architecture prototype question; retain explicit interface exposure. |
| Q-004 | P2 | Open | What grid resolutions and rotation freedoms should be supported? | Architecture prototype question; grids remain optional. |
| Q-005 | P2 | Open | How should blueprint bounds and hull occupancy be represented? | Architecture prototype question; must preserve the fixed-volume invariant. |
| Q-006 | P2 | Open | How can future feasible configurations be guaranteed without prematurely resolving unexplored spaces? | Architecture prototype question; investigate while designing bounded generation. |
| Q-007 | P3 | Open | How should simultaneous explorers avoid conflicting commits? | Architecture prototype question; multiplayer is a later possibility, so defer until scope requires it. |
| Q-008 | P1 | Answered | What explicit trigger or approval mechanism should initiate the separate GitHub Pages deployment? | Use a manual `workflow_dispatch` trigger only. See [D-004](DECISIONS.md). |
| Q-009 | P2 | Open | Should this public family project remain under the personal account or move to one of its organizations? | The user is comfortable with the `TimmyTheTurtle` account and organizations created by it, but has not chosen an ownership home. The repository currently remains under the personal account; a transfer is not needed for public viewing. See [D-006](DECISIONS.md). |
| Q-011 | P1 | Open | What family or personal information, if any, may appear in this public repository and its deployed Pages site? | Public access supports accountless viewing but exposes repository files, history, and published site content to everyone. Define the content boundary before adding family-specific material. See the [GH-600 repository readiness checklist](../training/gh-600/REPOSITORY_READINESS.md). |
| Q-012 | P2 | Open | What toolchain-specific hands-on environment should provide AI-103 and AI-500 evidence after the GH-600-first phase? | The current workspace uses Markdown, GitHub settings, and Actions; the AI tracks need platform-specific Azure implementation evidence, including Microsoft Foundry where required by the current guide. Decide whether to use separate sandboxes without silently selecting the core project's stack. See the [training hub](../training/README.md), [AI-103 checklist](../training/ai-103/READINESS_CHECKLIST.md), and [AI-500 checklist](../training/ai-500/READINESS_CHECKLIST.md). |

## Answered questions

| ID | Answered | Question | Durable answer | Related decision / evidence |
|---|---|---|---|---|
| Q-008 | 2026-10-26 | What explicit trigger or approval mechanism should initiate the separate GitHub Pages deployment? | Publishing is initiated manually from the GitHub Actions tab with `workflow_dispatch`; sandbox pushes continue to use validation only. | [D-004](DECISIONS.md) and [publish workflow](../.github/workflows/deploy-blazor-webgpu.yml) |
| Q-010 | 2026-10-27 | While the repository is public, should non-collaborators be allowed to create issues and pull requests? | No. Keep the repository public for viewing, but allow only collaborators to create issues and pull requests. | [D-007](DECISIONS.md) and [repository settings](https://github.com/TimmyTheTurtle/procedural-toy-universe/settings) |

## Updating this ledger

- Give each substantive question a stable `Q-NNN` ID; do not reuse IDs.
- Keep unresolved items in **Open questions** with priority, status, and useful context or next step.
- When resolved, move the item to **Answered questions**, retaining its ID and recording the concise answer and a link to the relevant decision or evidence. If it was resolved by a consequential decision, also create a `D-NNN` entry in [`DECISIONS.md`](DECISIONS.md).
- Record significant question-and-answer outcomes, not routine conversational exchanges. Preserve the final answer and relevant context, not a verbatim transcript.
