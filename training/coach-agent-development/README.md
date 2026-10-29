# Certification Learning Coach (practice agent)

The Certification Learning Coach is a Copilot custom agent that helps study
for GH-600, AI-103, and AI-500. It is a **practice agent**: the first custom
agent built here, used to learn the agent-building process by trial and error.
It is experimental, not production-ready, and its design history is not
tracked.

## Files

| File | What it is |
|---|---|
| [`certification-learning-coach.agent.md`](../../.github/agents/certification-learning-coach.agent.md) | The agent definition Copilot loads. It lives in `.github/agents/` so Copilot can find it. |
| [COPILOT_AGENT_TEST_PLAN.md](COPILOT_AGENT_TEST_PLAN.md) | A checklist you run by hand in Copilot Chat to see whether the agent follows its rules |
| [PACKAGE_LAYOUT.md](PACKAGE_LAYOUT.md) | The proposed folder layout for the training material, mostly future folders |
| [YOUTUBE_RESOURCES.md](YOUTUBE_RESOURCES.md) | Candidate videos. This is an AI-generated draft, not learner-approved evidence. |

## Requirements

A checked box means the agent definition is written to meet the requirement.
Whether Copilot actually behaves that way is only confirmed by running the
[test plan](COPILOT_AGENT_TEST_PLAN.md).

**Package**

- [x] The package layout is documented under `training/`
  ([PACKAGE_LAYOUT.md](PACKAGE_LAYOUT.md)).
- [x] The existing GH-600, AI-103, and AI-500 track directories are preserved.
- [x] Coach development material is kept separate from learner evidence.
- [x] The Copilot-specific agent definition is kept separate from the
  host-neutral package.

**Agent behavior**

- [x] No model or reasoning effort is hard-coded; model selection stays
  automatic.
- [x] Low or medium effort is preferred where the host allows it; high effort
  is never targeted.
- [x] The agent writes only under `training/`. Until the test plan shows
  whether Copilot enforces this, it is only an instruction to the agent.
- [x] The agent has no shell, deployment, GitHub-mutation, MCP-mutation, or
  subagent capability.
- [x] Source authority and conflict handling are explicit.

**Learner evidence**

- [x] AI-generated drafts are kept separate from learner-approved evidence.
- [x] Work is marked complete or learner-approved only when the learner
  explicitly says so for that item.
- [x] Supplemental resources record dates, descriptions, objective mapping,
  freshness status, and video timestamps where applicable.

## Before relying on it

- Run [COPILOT_AGENT_TEST_PLAN.md](COPILOT_AGENT_TEST_PLAN.md) and record the
  results.
- Don't claim the `training/`-only write rule is enforced unless a test shows
  that Copilot blocks the write.

## Possible next steps

- Build the GH-600 Domain 1/M1 study workflow.
- Curate supplemental Microsoft Learn, GitHub, Pluralsight, and Microsoft
  YouTube resources, with timestamps for relevant video segments.
- Apply what this agent teaches to future official agents, most of which should
  follow GH-600 and industry standards as closely as practical.
