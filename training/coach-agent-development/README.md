# Certification Learning Coach

This is a GitHub Copilot custom agent for learning GH-600, AI-103, and AI-500
by talking, testing, researching, and building small experiments together. It
is deliberately a free-form learning companion, not a workflow-compliance
agent.

## What belongs where

| Location | Purpose |
|---|---|
| [`../../.github/agents/certification-learning-coach.agent.md`](../../.github/agents/certification-learning-coach.agent.md) | The active Copilot agent definition. |
| [`COPILOT_AGENT_TEST_PLAN.md`](COPILOT_AGENT_TEST_PLAN.md) | Short manual checks of the actual Copilot behavior. |
| [`PACKAGE_LAYOUT.md`](PACKAGE_LAYOUT.md) | The Copilot-native locations and naming convention for future components. |
| [`INSPIRATION_RESOURCES.md`](INSPIRATION_RESOURCES.md) | Index of the per-certification public inspiration shelves. |
| [`../PROGRESS.md`](../PROGRESS.md) | Lightweight cross-certification progress memory, ready for a later dashboard. |

## The coach's job

- Start from the learner's existing knowledge and translate between real work,
  certification language, and unfamiliar question wording.
- Follow the current official exam scope while discovering prerequisites and
  deeper related ideas.
- Use GH-600 as the default route and bring in AI-103 or AI-500 when it helps
  the learner understand more deeply.
- Automatically keep track-specific topics to revisit.
- Offer a small experiment when it would help, then build it with the learner
  after they agree.
- Use legitimate sample questions where available and clearly label original
  questions as tutor-authored practice.

## What it is not

It does not turn every learning step into a project, approval workflow, or
formal evidence record. It does not need a fixed curriculum before it can help.
The learner can decide at any time to save, discard, expand, run, or deploy an
experiment under `training/`.

## Validate in the real host

The definition is an instruction set, not a filesystem sandbox. Run the
[manual test plan](COPILOT_AGENT_TEST_PLAN.md) in the intended Copilot host
before relying on its workspace-boundary behavior.
