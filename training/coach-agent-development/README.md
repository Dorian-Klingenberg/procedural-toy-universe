# Certification coach agent development

This directory is the working area for designing the reusable certification
learning coach. It is intentionally inside `training/` so the coach's
knowledge, skills, prompts, curricula, source records, and learner artifacts
can become portable with the training package.

## Status

- **Stage:** Current-round design and refinement
- **Active tracks:** GH-600, AI-103, and AI-500
- **Initial entry point:** GH-600
- **Additional emphasis:** AI-500 lessons learned, questions and answers, and
  future exercises
- **Training root:** `training/` directly below the repository root
- **Agent status:** Copilot-first experimental adapter added; behavior testing
  is pending and no production/portability claim is made

## Current round

This round defines and refines:

1. The portable training-package boundary.
2. The coach's role and source hierarchy.
3. The minimal custom-agent definition.
4. Training-only write scope and learner-evidence safeguards.
5. Stop conditions and the distinction between AI-generated drafts and learner
   evidence.

The Copilot-first agent definition is
[`.github/agents/certification-learning-coach.agent.md`](../../.github/agents/certification-learning-coach.agent.md).
The development folder contains its supporting design records; the agent
definition itself is kept in Copilot's discoverable location.

The proposed package layout is documented in
[PACKAGE_LAYOUT.md](PACKAGE_LAYOUT.md). It preserves the existing certification
track directories and keeps coach development separate from learner evidence.

The current-round approval convention is in
[APPROVAL_WORKFLOW.md](APPROVAL_WORKFLOW.md). The review result is in
[REVIEW_CHECKLIST.md](REVIEW_CHECKLIST.md).

The Copilot-specific prototype cases are in
[HOST_PROTOTYPE.md](HOST_PROTOTYPE.md).

The current YouTube-only candidate list is in
[YOUTUBE_RESOURCES.md](YOUTUBE_RESOURCES.md). It is an AI-generated draft and
is not learner-approved evidence.

## Deferred rounds

- Test Copilot model and effort selection, keeping model selection automatic
  and preferring low or medium effort without targeting high effort.
- Test whether writes can be limited to `training/` and whether training-local
  skills and knowledge are discoverable.
- Build the learner-owned GH-600 Domain 1/M1 workflow.
- Curate supplemental Microsoft Learn, official Microsoft/GitHub, Pluralsight,
  and Microsoft YouTube resources current as of 2026-07-31 or later.
- Record video timestamps and short descriptions for relevant segments.
- Perform final validation and document host-specific limitations.

## Guardrail

The Copilot-first agent is present for the explicitly started prototype. Do not
treat it as validated or production-ready until the cases in
[HOST_PROTOTYPE.md](HOST_PROTOTYPE.md) have been run and recorded.
