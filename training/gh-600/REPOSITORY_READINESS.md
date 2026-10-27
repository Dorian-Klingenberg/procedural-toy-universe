# GH-600 repository readiness checklist

- **Status:** Draft for owner discussion
- **Updated:** 2026-10-27
- **Purpose:** Track the repository and collaboration foundations needed for safe, reviewable GH-600-aligned practice. Completing this list does not establish exam readiness or mean the project has a production agent system.
- **Scope note:** This file is in a public repository. Do not record personal billing amounts, credentials, private family information, or account-specific usage data here.

## Study sequence and evidence boundary

- **Current first target:** GH-600. AI-103 and AI-500 have separate study tracks; see the [training hub](../README.md).
- **Shared foundation:** Apply the shared Responsible AI practices in the [training hub](../README.md), while recording exam-specific evidence in the appropriate track.
- **Current workspace toolchain:** Markdown, GitHub settings, GitHub Actions, and manual Pages publishing. No Azure AI/Foundry SDK or runtime is configured here.
- **Evidence rule:** A Markdown design or policy is useful GH-600 design evidence, but it does not demonstrate hands-on Azure AI or Microsoft Foundry implementation. Keep evidence and gaps in each exam track distinct.

## Status key

- **Done:** Verified in repository files or current GitHub settings.
- **Open:** Needs an owner decision or implementation.
- **Delegated:** Being handled in separate account or organization work; not verified by this checklist.
- **Later:** Not needed for the initial repository stage.

## Current baseline

- [x] **Done — Public read access:** The repository remains public so people can view it without GitHub accounts. Public visibility also means anyone can view and clone it. See [D-006](../../docs/DECISIONS.md).
- [x] **Done — Invited participation:** Issue and pull-request creation is restricted to collaborators. Public visitors can still read the repository and its issues and pull requests. Verify in [repository settings](https://github.com/TimmyTheTurtle/procedural-toy-universe/settings). See [D-007](../../docs/DECISIONS.md).
- [x] **Done — Current owner recorded:** The repository is under the `TimmyTheTurtle` personal account. Whether to transfer it to an organization remains open under [Q-009](../../docs/OPEN_QUESTIONS.md).
- [x] **Done — Build validation exists:** A sandbox-scoped GitHub Actions workflow builds the modular apartment playground on relevant pushes and pull requests ([workflow](../../.github/workflows/validate-modular-apartment-playground.yml)). This is not a full-project test or agent-evaluation suite.
- [x] **Done — Publishing is deliberate:** The Pages publishing workflow uses `workflow_dispatch`, separate from build validation ([workflow](../../.github/workflows/deploy-blazor-webgpu.yml)). Review the deployed site as a separate public surface.
- [ ] **Open — License:** No code license has been selected. Public visibility alone does not grant reuse rights. See [Q-002](../../docs/OPEN_QUESTIONS.md) and the [asset policy](../../docs/ASSET_POLICY.md).
- [ ] **Open — Public-content review:** Review the repository, commit history, issues, and Pages content for secrets, family information, and material that should not be public. See [Q-011](../../docs/OPEN_QUESTIONS.md).
- [ ] **Delegated — Copilot and spending controls:** Account-level billing safeguards are being handled separately. Verify those controls before granting Copilot seats or enabling organization-billed features. Keep personal plan details out of this public checklist.

## Related training

- [Training hub and shared Responsible AI checklist](../README.md)
- [AI-103 study track](../ai-103/README.md) and [readiness checklist](../ai-103/READINESS_CHECKLIST.md)
- [AI-500 study track](../ai-500/README.md) and [readiness checklist](../ai-500/READINESS_CHECKLIST.md)
- The separate hands-on environment for AI-103/AI-500 remains open under [Q-012](../../docs/OPEN_QUESTIONS.md).

## Before inviting the first family contributor

- [ ] **Open — Accounts and ownership:** Contributors need their own GitHub accounts to create issues or pull requests. Choose whether the repository stays under the personal account or moves to an organization before making that transfer; public viewing does not depend on ownership. See [Q-009](../../docs/OPEN_QUESTIONS.md).
- [ ] **Open — Least-privilege access:** Invite each person explicitly and grant only the repository access they need. Keep organization ownership and repository administration limited to trusted maintainers.
- [ ] **Open — Contribution expectations:** Explain how family members can suggest ideas, report issues, and submit changes. Add issue and pull-request templates if they would make participation easier.
- [ ] **Open — Review and merge path:** Decide who reviews and merges pull requests. Check which branch rules and required checks are available under the selected GitHub plan before relying on them.
- [ ] **Open — Public material and assets:** Avoid credentials and personal information. For every imported asset, record creator, source, license, retrieval date, modifications, and attribution as required by the [asset policy](../../docs/ASSET_POLICY.md).

## Before using an agent for repository work

- [ ] **Open — Task contract:** Start with one bounded task. State its inputs, expected output, acceptance and failure conditions, scope, and human review point. The proposed first exercise is [M1](EXERCISE_PLAN.md).
- [ ] **Open — Tool and branch limits:** Define the repositories, branches, files, tools, and permissions the agent needs. Keep permissions least-privilege; do not share a person's GitHub account or credentials with an agent or another contributor.
- [ ] **Open — Human control:** Keep merge and publish actions under explicit human approval. The existing Pages workflow is manually triggered; verify its environment and allowed-branch controls before relying on that as a release gate.
- [ ] **Open — Workflow permissions:** The validation workflow uses `contents: read`. In the Pages workflow, review the workflow-level `pages: write` and `id-token: write` grants and scope them to the deployment job where possible.
- [ ] **Open — Action maintenance:** Review the workflows' major-version action tags; consider full-SHA pins and an update process for GitHub Actions and project dependencies.
- [ ] **Open — Observable results:** Define what evidence shows the task succeeded: changed files, review result, build or test output, and links to relevant logs or artifacts. Do not count a proposed or simulated exercise as hands-on evidence.
- [ ] **Open — State and handoff:** Keep durable decisions in the project records. Use synthetic data for exercises; avoid retaining personal or account information in prompts, logs, or agent memory.
- [ ] **Later — MCP and multi-agent workflows:** No MCP setup or multi-agent workflow is documented in the project files. Check live GitHub settings before enabling tools; practice these after a bounded single-agent task has clear permissions and evaluation criteria. See [M2–M7](EXERCISE_PLAN.md).

## Suggested first GH-600 practice increment

Use M1 from the [exercise plan](EXERCISE_PLAN.md) to prepare a documentation-only proposal for a small room or corridor slice. Have the agent produce a structured task plan, acceptance criteria, risk notes, and human review point; review them before any repository action. Keep the exercise on a branch and capture the resulting review and validation evidence. Do not merge or publish as part of the exercise.

## Related project records

- [Training hub](../README.md)
- [Open questions](../../docs/OPEN_QUESTIONS.md)
- [Decisions](../../docs/DECISIONS.md)
- [GH-600 objective and exercise map](EXERCISE_PLAN.md)
- [Repository instructions](../../AGENTS.md)
