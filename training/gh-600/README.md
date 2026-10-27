# GH-600 study companion

This directory organizes preparation for the [GitHub Certified: Agentic AI Developer](https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-developer/) certification, Exam GH-600: Developing in Agentic AI Systems.

See the [training hub](../README.md) for the cross-certification study sequence, shared Responsible AI practices, and links to the [AI-103](../ai-103/README.md) and [AI-500](../ai-500/README.md) tracks.

## Study plan

- [Repository readiness checklist](REPOSITORY_READINESS.md) — a draft baseline for public access, family collaboration, and GH-600-aligned repository practice.
- [Repository-specific exercise plan](EXERCISE_PLAN.md) — maps each objective in the live official guide to a proposed exercise and evidence appropriate to this project's current state.

## Authoritative references

- [Official GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600)
- [Certification overview](https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-developer/)

The official study guide is the source of truth for exam scope and may change. This companion does not reproduce it. The domain names and approximate weights below are a concise index; the study prompts are original supplemental notes, not additional official exam objectives. Check the current official guide regularly and use its detailed objective list to confirm coverage.

## Coverage checklist

Weights are copied as a high-level reference from the official study guide as checked on 2026-10-27. Verify them against the live guide before relying on them.

### 1. Prepare agent architecture and SDLC processes — 15–20%

- [ ] Explain where agents fit in an SDLC workflow and what work should remain with people.
- [ ] Describe agent planning, execution boundaries, and how work is observed and reviewed.
- [ ] Identify appropriate human review checkpoints and guardrails for a workflow.
- **Readiness evidence:** Can outline an agent-enabled workflow, its responsibilities, and its review points.
- **Vetted resources:** _Add reviewed courses, videos, and documentation here._

### 2. Implement tool use and environment interaction — 20–25%

- [ ] Match tools to an agent task and define the minimum permissions required.
- [ ] Explain how agents interact with repositories, development environments, and CI workflows.
- [ ] Understand MCP servers and how tools are discovered, configured, and authorized.
- [ ] Account for safe execution, failures, and traceability when an agent uses tools.
- **Readiness evidence:** Can justify tool access and describe how to monitor and constrain tool use.
- **Vetted resources:** _Add reviewed courses, videos, and documentation here._

### 3. Manage memory, state, and execution — 10–15%

- [ ] Distinguish task context, persistent memory, and execution state.
- [ ] Explain how state and results can persist across agent sessions or tasks.
- [ ] Identify what should be retained, retrieved, or handed forward for continuity.
- **Readiness evidence:** Can select a state strategy and explain its continuity and data-lifecycle tradeoffs.
- **Vetted resources:** _Add reviewed courses, videos, and documentation here._

### 4. Perform evaluation, error analysis, and tuning — 15–20%

- [ ] Define observable success and failure criteria for an agent task.
- [ ] Interpret results and traces to identify why an agent did or did not succeed.
- [ ] Choose changes that improve reliability or performance and explain how to evaluate them.
- **Readiness evidence:** Can propose an evaluation loop that uses measurable criteria and failure analysis.
- **Vetted resources:** _Add reviewed courses, videos, and documentation here._

### 5. Orchestrate multi-agent coordination — 15–20%

- [ ] Explain how tasks, context, and results are coordinated across agents.
- [ ] Describe agent roles, lifecycle, handoffs, and ownership of work.
- [ ] Identify and resolve conflicting actions or outputs between agents.
- **Readiness evidence:** Can describe a coordinated workflow and its handoff and conflict-resolution strategy.
- **Vetted resources:** _Add reviewed courses, videos, and documentation here._

### 6. Implement guardrails and accountability — 10–15%

- [ ] Select an appropriate autonomy level and identify actions that require approval.
- [ ] Apply least-privilege access and human oversight to agent workflows.
- [ ] Explain how actions, decisions, and responsibility can be made accountable.
- **Readiness evidence:** Can explain the safeguards and approvals needed for a given agent task.
- **Vetted resources:** _Add reviewed courses, videos, and documentation here._

## Resource review standard

Before adding a course or video, record its title, creator/provider, link, publication or update date if available, the objectives it supports, and the date reviewed. Prefer official or technically authoritative sources; check that material is current, accurate, and specific enough to support the linked objective. Mark unverified recommendations as such rather than presenting them as vetted.

| Resource | Creator/provider | Objectives covered | Reviewed on | Notes |
|---|---|---|---|---|
| [Official GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600) | Microsoft Learn | All domains; authoritative exam scope | 2026-10-27 | Re-check the live objectives and updates |
| [Certification overview](https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-developer/) | Microsoft Learn | Certification and exam information | 2026-10-27 | Official overview |

## How to keep coverage complete

1. Compare every detailed objective in the live official study guide with the relevant domain checklist above.
2. Add any missing objective as a clearly labeled supplemental checklist item, preserving its connection to the official domain.
3. Link resources to the objective(s) they teach; do not treat a resource as coverage evidence until reviewed.
4. Revisit this index when Microsoft updates the study guide and adjust the recorded review date and coverage.
