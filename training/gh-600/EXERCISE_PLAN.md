# GH-600 repository exercise plan

**Status:** Proposed learning plan  
**Reviewed:** 2026-10-27  
**Authoritative scope:** [Microsoft Learn study guide for Exam GH-600](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600), which the live page reports was last updated 2026-05-13. Recheck it before starting a study cycle; Microsoft may revise the exam.

## Goal and boundaries

Use this repository as a case study and a safe place to practice every objective currently listed in the official guide. The objective summaries and domain names below are paraphrased, not a replacement or reproduction of Microsoft's study guide.

The repository is currently at concept/architecture stage. It has project guidance and a Pages publishing workflow, but no selected application stack, runtime agent, MCP configuration, or multi-agent system. The first exercise should therefore use documents, proposed configurations, test scenarios, and review discussions. Do not claim hands-on operational experience with a feature that has only been designed on paper.

Keep all activities consistent with the project invariants:

- Generated geometry must remain within a fixed hull or structure volume.
- Committed observations and player modifications must persist.
- Grid snapping is optional; explicit connectors and free placement remain supported.
- Nested blueprints expose interfaces deliberately.
- Do not choose an engine, language, code license, major dependency, or external asset as part of these exercises.
- Keep original project content and avoid franchise-owned material.

Do not run the existing publishing workflow as an exercise: it can deploy a GitHub Pages site. Analyze its configuration only unless deployment is separately approved. Never put credentials, personal data, or sensitive project information in exercise fixtures, logs, or agent memory.

## How to use this plan

1. Before each study cycle, compare the live official guide with the coverage map below. Add newly listed objectives and mark removed or changed items; do not assume this file stays current automatically.
2. Work through the exercise modules in order. Each module has a planned artifact under `training/gh-600/exercises/`; create those artifacts as the exercises are undertaken, not as a prerequisite to approving this plan.
3. Keep the case study bounded: an agent is asked to prepare a reviewable proposal for a small room/corridor construction slice, using the repository's existing project constraints. It may draft and analyze; it may not merge, publish, or silently change project decisions.
4. For capabilities not present in this repository, first use a clearly labeled mock or design exercise. If real platform interaction is later needed, use a separately approved, low-risk test setup and record that the exercise was hands-on. Do not broaden repository permissions just to claim coverage.
5. Mark an objective complete only when its listed evidence exists and you can explain the relevant tradeoff, failure case, and safeguard. A checked box records learning evidence, not a claim that the project implements the capability.

## Planned exercise modules

| Module | Planned artifact | Practice and completion evidence |
|---|---|---|
| **M1 — Task contract and workflow design** | `exercises/01-task-contract.md` | Define a bounded agent task using the repository's vision and architecture. Record inputs, outputs, success/failure conditions, planning and action boundaries, review checkpoints, and observable evidence. Include a safe structured plan and a plan-review exercise. |
| **M2 — Tools and execution environment** | `exercises/02-tools-and-environment.md` | Inventory tools needed for the task, propose least-privilege access and repository/branch scope, and assess the current workflow without running its deployment. Use a clearly marked MCP and CI configuration mock to explain setup, allow-listing, environment constraints, error handling, retries, rollback, escalation, and traceability. |
| **M3 — Memory, state, and continuity** | `exercises/03-memory-and-state.md` | Design task-scoped short-term, durable, and external state using harmless synthetic data. Demonstrate checkpoints, resume, expiration/reset, drift detection, stale/conflicting context handling, and handoff across tools. |
| **M4 — Evaluation and improvement** | `exercises/04-evaluation.md` | Define qualitative and quantitative acceptance signals for a small documentation-only agent task. Use synthetic plans, outputs, traces, and workflow results to classify failures, update instructions/tools/constraints, and compare results against the same criteria. |
| **M5 — Multi-agent coordination** | `exercises/05-multi-agent.md` | Design a bounded coordinator/reviewer workflow with isolated responsibilities. Use simulated or separately approved parallel tasks to examine collisions, duplicated work, contradictory results, handoffs, aggregation, observability, recovery, and lifecycle changes. |
| **M6 — Guardrails and accountability** | `exercises/06-guardrails.md` | Build a risk-to-autonomy matrix for the case study. Specify permission boundaries, human approvals, blocked actions, audit evidence, escalation and rollback paths, and how to avoid low-value approval delays. |
| **M7 — Integrated capstone and oral review** | `exercises/07-capstone.md` | Apply M1–M6 to one documentation-only proposal. Review the resulting plan, artifacts, and synthetic evaluation evidence; explain failures and safeguards in a discussion. Leave repository decisions open unless the project owner explicitly makes them. |

Modules M1–M6 provide the evidence for the mapped objectives. M7 checks that the ideas work together; it does not replace any objective-level evidence. Discussion or mock evidence must be labeled as such. Replace it with a real, safely scoped demonstration only if the relevant GitHub capability is available and the activity is approved.

## Objective coverage map

The identifiers below are local tracking IDs. Each target is a concise paraphrase of an objective on the linked official study guide. The evidence column says what to create or demonstrate in this repository; it does not imply the feature exists today.

### 1. Prepare agent architecture and SDLC processes — 15–20%

| ID | Objective to practice | Exercise evidence |
|---|---|---|
| A01 | Place agent work appropriately in the software lifecycle. | **M1:** Show where the room/corridor proposal begins and ends in a reviewable issue-to-change workflow. |
| A02 | Decide which lifecycle tasks are suitable for an agent. | **M1:** Separate delegable research/drafting/checklist tasks from project-owner decisions. |
| A03 | Recognize and mitigate common agent failure patterns. | **M1:** Analyze a scenario containing scope drift, unsupported claims, or invalid geometry; document prevention and recovery. |
| A04 | Specify task inputs, deliverables, and success conditions. | **M1:** Write a task contract grounded in `docs/VISION.md` and `docs/ARCHITECTURE.md`. |
| A05 | Draw clear lines between planning, reasoning, and external actions. | **M1:** Label the agent's planning and recommendation steps separately from any proposed file or GitHub actions. |
| A06 | Keep planning distinct from execution. | **M1:** Produce a plan-only stage and a separate, explicitly authorized execution stage. |
| A07 | Require a structured plan as an output. | **M1:** Include a reviewable plan format with scope, steps, dependencies, and expected evidence. |
| A08 | Assess plans before allowing work to proceed. | **M1:** Apply a checklist for scope, project invariants, feasibility, and measurable completion. |
| A09 | Stop action until the plan has been reviewed and accepted. | **M1:** Demonstrate a paused/not-approved case and identify who authorizes continuation. |
| A10 | Make autonomous behavior observable and controllable. | **M1/M4:** Specify which plans, changes, results, and errors a reviewer can inspect and how action can be stopped. |
| A11 | Choose autonomy and safeguards proportionate to risk. | **M1/M6:** Assign autonomy levels to read, draft, change, and publish actions, with reasons. |
| A12 | Produce inspectable artifacts in normal development tools. | **M1/M4:** Keep the proposal, checklist, test evidence, and review notes in versioned Markdown or GitHub artifacts. |
| A13 | Add useful human intervention without unnecessary delay. | **M1/M6:** Design approval points around consequential actions, and justify which routine steps need no extra gate. |

### 2. Implement tool use and environment interaction — 20–25%

| ID | Objective to practice | Exercise evidence |
|---|---|---|
| B01 | Select and configure tools for a bounded task. | **M2:** Produce a tool inventory and a minimal proposed configuration for the documentation-only case. |
| B02 | Identify which tools are actually necessary. | **M2:** Compare a minimal read/review tool set with a broader set and justify exclusions. |
| B03 | Configure the selected tools for the task. | **M2:** Write a clearly labeled mock configuration or configuration review; do not enable new integrations as part of this plan. |
| B04 | Limit each tool's permissions to what it needs. | **M2/M6:** Create a tool-to-permission matrix and explain each read/write boundary. |
| B05 | Configure MCP servers appropriately. | **M2:** Describe a safe MCP setup and its trust boundary; distinguish protocol configuration from agent orchestration. |
| B06 | Make an MCP server's tools available to an agent deliberately. | **M2:** Show a mock agent/tool mapping and identify which tools remain unavailable. |
| B07 | Assess the GitHub-hosted remote MCP option. | **M2:** Compare its intended access and risks to the task needs; record a mock-only setup unless approved for live use. |
| B08 | Account for MCP registries when discovering servers. | **M2:** Document how a candidate server's origin, maintainer, capabilities, and trust would be checked before selection. |
| B09 | Restrict MCP server use through allow-list controls. | **M2:** Include an allow-list proposal and a rejected-server example with rationale. |
| B10 | Integrate agents with the intended development surface. | **M2:** Map the task to repository instructions, pull requests, and CI artifacts; identify unsupported surfaces rather than assuming them. |
| B11 | Evaluate the context in which an agent will execute. | **M2:** Record available files, branch, workflow triggers, network/tool assumptions, and what the task must not access. |
| B12 | Limit an agent to the intended repository. | **M2:** Define a repository boundary and explain how to detect an accidental cross-repository action. |
| B13 | Explain how an agent could be invoked from CI. | **M2:** Draft or diagram a non-running CI invocation; identify required permissions and review gates without modifying the publishing workflow. |
| B14 | Scope work to the intended branch. | **M2:** Specify a branch policy for exercise changes and explain how the agent is prevented from acting on protected branches. |
| B15 | Evaluate autonomous branch and pull-request actions. | **M2/M6:** Design a branch/PR path with review required and merge/deploy forbidden absent separate authorization. |
| B16 | Adapt execution to environment-specific constraints. | **M2:** List constraints such as missing runtime, no selected stack, and a deployment-capable workflow; define safe behavior for each. |
| B17 | Design safe execution and robust error handling. | **M2/M4:** Use a failure scenario to show safe stop conditions and the information retained for diagnosis. |
| B18 | Handle tool errors explicitly. | **M2/M4:** Specify how an invalid, unavailable, or denied tool call is surfaced without claiming success. |
| B19 | Use bounded retries where appropriate. | **M2/M4:** Define retry conditions, a finite limit, and cases that require escalation instead. |
| B20 | Plan rollback for reversible changes. | **M2/M6:** Describe how to revert a practice-branch change and how to handle an action that cannot be undone. |
| B21 | Escalate blocked or risky work to a person. | **M2/M6:** Define escalation triggers, the evidence to include, and the task's paused state. |
| B22 | Make tool actions and results traceable. | **M2/M4:** Specify a synthetic tool-call record containing purpose, scope, outcome, and reference to reviewable artifacts, but no secrets. |

### 3. Manage memory, state, and execution — 10–15%

| ID | Objective to practice | Exercise evidence |
|---|---|---|
| C01 | Use appropriate agent-memory strategies. | **M3:** Compare session context, repository knowledge records, and external state for the case study. |
| C02 | Choose between temporary, durable, and external memory. | **M3:** Classify sample facts by storage lifetime and explain why each belongs there. |
| C03 | Limit retained memory to task-relevant information. | **M3:** Review a synthetic memory set and remove irrelevant or sensitive items. |
| C04 | Define expiration, pruning, and reset behavior. | **M3:** Add a lifecycle table for temporary notes, durable decisions, and stale exercise state. |
| C05 | Persist execution state and notice context drift. | **M3:** Create a checkpoint schema and compare a resumed task against the accepted task contract. |
| C06 | Save task progress and decisions as durable artifacts. | **M3:** Record progress and decisions in the exercise artifact, linking project decisions only when actually authorized. |
| C07 | Resume work without repeating completed steps or contradicting prior choices. | **M3:** Perform a simulated pause/resume and show how the next action is selected from saved state. |
| C08 | Detect drift during extended work and correct it. | **M3/M4:** Inject a changed constraint into a synthetic continuation and show detection, stop, and correction. |
| C09 | Maintain continuity as work moves between tools or environments. | **M3:** Design a handoff containing only necessary state, references, and next steps. |
| C10 | Share the right state with another agent or tool. | **M3/M5:** Prepare a minimal, task-scoped handoff packet and identify excluded private or unrelated context. |
| C11 | Prevent inconsistent context from competing across agents. | **M3/M5:** Resolve two synthetic, contradictory project summaries by consulting authoritative repository documents. |
| C12 | Prevent stale information from being treated as current. | **M3:** Mark source dates and refresh a claim against the current source before reuse. |

### 4. Perform evaluation, error analysis, and tuning — 15–20%

| ID | Objective to practice | Exercise evidence |
|---|---|---|
| D01 | Define success criteria for an agent output. | **M4:** Set acceptance criteria for a proposed, constraint-respecting documentation change. |
| D02 | State expected results and operational constraints. | **M4:** Record expected artifacts, forbidden actions, and environment assumptions before evaluating results. |
| D03 | Use both qualitative and quantitative evaluation signals. | **M4:** Pair reviewer checks with countable checks such as required sections present or links resolving. |
| D04 | Align evaluation with the task's real intent. | **M4:** Trace every check to a contract requirement; remove metrics that reward irrelevant output. |
| D05 | Generate evaluation signals with automated scans. | **M4:** Identify suitable existing checks such as `git diff --check` or link/secret checks where available; do not add tooling without approval. |
| D06 | Analyze failures and determine likely causes. | **M4:** Classify synthetic failed outputs and workflow results, then identify the evidence supporting each cause. |
| D07 | Inspect logs, plans, traces, outputs, and workflow artifacts for failures. | **M4:** Use a supplied/mock run record to locate the first failing step and distinguish observed facts from inference. |
| D08 | Distinguish reasoning mistakes, tool misuse, and context/environment failures. | **M4:** Assign root-cause categories to cases and explain the corrective action for each. |
| D09 | Change agent behavior based on evaluation results. | **M4:** Revise one instruction or constraint and compare before/after outputs using unchanged criteria. |
| D10 | Refine instructions, workflows, or constraints. | **M4:** Propose a narrowly scoped improvement and show how it avoids broadening permissions or project scope. |
| D11 | Improve memory use when evaluation shows a memory problem. | **M3/M4:** Adjust a synthetic retention or retrieval rule and retest drift/continuity cases. |
| D12 | Improve tool selection or access based on evaluation. | **M2/M4:** Remove an unnecessary tool or narrow access, then rerun the documented scenario. |

### 5. Orchestrate multi-agent coordination — 15–20%

| ID | Objective to practice | Exercise evidence |
|---|---|---|
| E01 | Operate and manage a coordinated multi-agent workflow. | **M5:** Diagram roles, shared state, control points, and completion conditions for a documentation-only task. |
| E02 | Choose an orchestration pattern that fits the task. | **M5:** Compare sequential review, independent parallel research, and coordinator/worker patterns; justify one. |
| E03 | Isolate parallel agent work. | **M5:** Design separate file/branch ownership and a merge/review boundary; use simulation unless an approved agent setup exists. |
| E04 | Detect and resolve overlap, duplicated effort, and contradictory results. | **M5:** Work through a synthetic collision and record the resolution owner and authoritative source. |
| E05 | Observe multi-agent behavior using operational evidence. | **M5:** Define a mock event timeline and identify the signals needed to understand each agent's status. |
| E06 | Produce reviewable and auditable workflow outputs. | **M5:** Specify per-agent artifacts and a final aggregated summary with provenance. |
| E07 | Record decisions, handoffs, and outcomes across agents. | **M3/M5:** Create a handoff and decision log with source links and explicit unresolved items. |
| E08 | Analyze multi-agent behavior after a run. | **M5:** Review a simulated event timeline and identify coordination delays, conflicts, and corrective opportunities. |
| E09 | Detect and respond to agent failure or degraded coordination. | **M5:** Define stalled, partial, contradictory, and failed states and their safe response. |
| E10 | Recognize failed, incomplete, or stalled agent executions. | **M5:** Classify sample run summaries and specify what additional evidence is needed. |
| E11 | Respond safely when coordination degrades. | **M5:** Pause dependent work, identify the human escalation point, and avoid treating partial results as complete. |
| E12 | Use recovery patterns, including rollback and human review. | **M5/M6:** Walk through a synthetic failed parallel change and document restoration and approval steps. |
| E13 | Manage agents throughout a workflow's lifecycle. | **M5:** Define admission, configuration, monitoring, and retirement checks for each role. |
| E14 | Add an agent to an existing workflow safely. | **M5:** Propose a new reviewer role with bounded scope and regression checks before activation. |
| E15 | Change or replace an agent without disrupting active work. | **M5:** Plan a versioned transition, compatibility check, and handling for in-flight tasks. |
| E16 | Retire an agent while retaining continuity and audit evidence. | **M5:** Specify how access is removed and outstanding tasks, artifacts, and decisions are preserved. |

### 6. Implement guardrails and accountability — 10–15%

| ID | Objective to practice | Exercise evidence |
|---|---|---|
| F01 | Define levels of agent autonomy. | **M6:** Create a risk-based autonomy ladder for reading, drafting, modifying, and publishing. |
| F02 | Classify actions by operational, security, and compliance risk. | **M6:** Score case-study actions and explain the factors that increase or lower risk. |
| F03 | Match autonomy to risk while respecting organizational and responsible-AI requirements. | **M6:** Justify the permitted action at each risk level and identify actions that remain human-owned. |
| F04 | Build safeguards and human-review paths. | **M6:** Draw a stop/review/approve path for consequential or ambiguous actions. |
| F05 | Identify actions that need human judgment. | **M6:** Separate judgment-heavy project decisions from routine, objectively checkable work. |
| F06 | Block actions that violate security, compliance, or responsible-use rules. | **M6:** Define explicit deny conditions, including secret exposure, unauthorized publication, and breaking project invariants. |
| F07 | Enforce least privilege through permissions and execution scope. | **M2/M6:** Review the proposed permission matrix and verify each capability has a task justification. |
| F08 | Require explicit authorization for irreversible or sensitive actions. | **M6:** Set approval requirements for merging, publishing, credentials, and project-direction changes. |
| F09 | Preserve useful delivery speed by avoiding approvals that add no meaningful risk reduction. | **M6:** Remove redundant approval steps from a sample flow and explain why the remaining controls are sufficient. |

## Completion record

For each objective, record the exercise artifact, evidence type (**hands-on**, **mock**, or **discussion**), review date, and any gap. Revisit mock/discussion objectives if the project later gains an approved environment that supports real interaction. Keep the exact, current objective wording in the official Microsoft guide rather than copying it into this plan.

## Source and repository references

- [Official GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600)
- [Certification overview](https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-developer/)
- Repository baseline: [`README.md`](../../README.md), [`AGENTS.md`](../../AGENTS.md), [`docs/VISION.md`](../../docs/VISION.md), [`docs/ARCHITECTURE.md`](../../docs/ARCHITECTURE.md), [`docs/ROADMAP.md`](../../docs/ROADMAP.md), and [Pages workflow](../../.github/workflows/deploy-blazor-webgpu.yml).
