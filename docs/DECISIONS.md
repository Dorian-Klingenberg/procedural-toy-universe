# Project Decisions and Significant Discussion

This is the durable record of consequential project decisions and the important discussions that led to them. It is a summary, not a transcript. See the project-wide requirements in [`AGENTS.md`](../AGENTS.md).

## Decisions

### D-001 — Maintain project questions and decisions in repository documentation

- **Date:** 2026-10-26
- **Status:** Accepted
- **Decision:** Maintain substantive open questions, priorities, and concise answers in [`OPEN_QUESTIONS.md`](OPEN_QUESTIONS.md), and maintain consequential decisions and summaries of materially relevant discussions in this file. Require all agents to consult and update these records through repository-wide instructions in `AGENTS.md` and the startup workflow. A skill may provide extra procedure later, but is not required for this behavior.
- **Context and rationale:** The user wants a persistent, prioritized question-and-answer ledger and a record of important conversations and their outcomes, maintained across agents and sessions. Durable tracked files plus always-on repository instructions are the chosen mechanism; full chat transcripts and routine exchanges are not needed.
- **References:** User-approved discussion on 2026-10-26; [`AGENTS.md`](../AGENTS.md); [`AGENT_BOOTSTRAP.md`](AGENT_BOOTSTRAP.md).

### D-002 — Organize learning demos as sandboxes with isolated checks and deliberate site deployment

- **Date:** 2026-10-26
- **Status:** Superseded by D-003 for the first sandbox's implementation stack; the separate, deliberate publishing policy remains.
- **Decision:** Call the independent small learning/demo directories `sandboxes/`. Run checks or builds for an individual sandbox on pushes that affect it. Keep publishing to GitHub Pages as a separate, deliberate action rather than deploying on every sandbox push. When multiple browser-based sandboxes are hosted together, assemble them into one Pages site artifact with each sandbox preserved under its own subdirectory and its own `index.html` entry point.
- **Context and rationale:** The imported deployment workflow was specific to one Blazor WebGPU app and deployed on pushes. The user clarified that browser sandboxes will be local HTML static sites, each suited to a distinct subdirectory, and accepted separating per-sandbox validation from deliberate web publication. A shared Pages artifact avoids independent deploys overwriting one another.
- **References:** User-approved workflow discussion on 2026-10-26; [imported workflow](../.github/workflows/deploy-blazor-webgpu.yml); [`OPEN_QUESTIONS.md`](OPEN_QUESTIONS.md).

### D-003 — Build the first sandbox as a Blazor WebAssembly WebGPU playground

- **Date:** 2026-10-27
- **Status:** Accepted
- **Decision:** Implement the first sandbox in `sandboxes/modular-apartment-playground/` as a stand-alone Blazor WebAssembly app targeting .NET 10, using Fluent UI Blazor for interface components and the browser's native WebGPU API through JavaScript interop. Give it a sandbox-scoped GitHub Actions build workflow. Keep Pages deployment separate and deliberate; its explicit trigger remains open under Q-008.
- **Context and rationale:** The user selected Blazor WebAssembly, Fluent UI, and WebGPU for the first sandbox and requested a full-width interface with a basic rotating cube. This sandbox choice does not select the engine or application stack for the core project, so Q-001 remains open. Unlike the prior assumption that browser sandboxes would be authored as local static HTML, this sandbox is a .NET application that publishes static web assets.
- **References:** User-approved implementation request on 2026-10-27; [sandbox README](../sandboxes/modular-apartment-playground/README.md); [sandbox workflow](../.github/workflows/validate-modular-apartment-playground.yml); [`OPEN_QUESTIONS.md`](OPEN_QUESTIONS.md).

### D-004 — Publish the first sandbox to Pages manually

- **Date:** 2026-10-26
- **Status:** Accepted
- **Decision:** Publish `sandboxes/modular-apartment-playground/` through a separate GitHub Actions workflow triggered only by `workflow_dispatch`. Do not deploy on every sandbox push; the existing validation workflow remains responsible for push and pull-request checks.
- **Context and rationale:** The prior deployment workflow referenced missing `projects/grannys-house-trials/...` directories. A manual trigger makes site publication deliberate while the sandbox is still evolving and avoids coupling routine validation to public deployment. The repository Pages source must be set to GitHub Actions before the first deployment.
- **References:** User-approved workflow discussion on 2026-10-26; [publish workflow](../.github/workflows/deploy-blazor-webgpu.yml); [sandbox README](../sandboxes/modular-apartment-playground/README.md); [Q-008](OPEN_QUESTIONS.md).

### D-005 — Start the apartment scene with interchangeable wall components

- **Date:** 2026-10-26
- **Status:** Accepted
- **Decision:** The modular apartment playground's first scene should be assembled from interchangeable wall component definitions, initially including plain walls, window walls, and door walls. The UI does not need component editing controls yet.
- **Context and rationale:** This keeps the first construction increment focused on reusable scene composition while postponing editor UX. The component boundary supports later snapping, persistence, and blueprint work without hard-coding one apartment layout.
- **References:** User-approved implementation discussion on 2026-10-26; [sandbox README](../sandboxes/modular-apartment-playground/README.md).

## Updating this record

- Give each consequential decision a stable `D-NNN` ID; do not reuse IDs.
- Record the date, status, decision itself, concise context/rationale, and references to relevant discussions, questions, issues, or documents.
- Record only decisions actually made by the user or an authorized project process. Distinguish accepted decisions from proposals, deferrals, and superseded decisions.
- When a decision changes, preserve the prior entry and mark it **Superseded** with a link to the replacing decision; do not silently erase the history.
- Summarize conversations only when they materially shaped a decision. Capture the issue considered, outcome, and rationale briefly; do not copy full transcripts or log routine chat.
