# AI-500 inspiration resources

**Reviewed:** 2026-10-29

Use this shelf when a GH-600 or AI-103 idea needs its deeper multi-agent,
software-engineering, or production-operations context. These examples help
the learner ask better questions and build small experiments; the current
official AI-500 study guide remains the exam authority.

| Resource | Useful for | Caveat |
|---|---|---|
| [AI-500 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-500) | Confirming live AI-500 scope before treating a topic as exam-relevant. | The exam and platform are new; recheck it often. |
| [Certification Study Library — AI-500](https://github.com/cterpening/certification-study-library/blob/main/guides/AI-500-designing-implementing-multi-agent-ai-solutions.md) | Finding connections among agent boundaries, state, tools, identity, evaluation, operations, and deployment. | AI-assisted, community material awaiting human review; use it to discover questions, not settle facts. |
| [Microsoft Foundry Build 2026 Demos](https://github.com/microsoft-foundry/build-2026-demos) | Official examples across multi-agent systems, grounding, guardrails, operations, tools, and evaluation. | Conference demos are samples, not a complete exam curriculum. |
| [Foundry Agent Framework hosted demos](https://github.com/Azure-Samples/foundry-hosted-agentframework-demos) | A staged path from a simple agent to tools, grounding, hosted deployment, and multi-agent workflows. | Requires Azure/Foundry setup; adopt one stage only when it answers a real learning question. |
| [Agent Framework workflow samples](https://github.com/microsoft/agent-framework/tree/main/dotnet/samples/03-workflows) | Workflow shapes such as sequential, concurrent, writer–critic, group chat, tool approval, and fan-out/fan-in. | Framework APIs can change; use the concepts and verify current implementation details. |

## Optional video inspiration

| Resource | Useful for | Caveat |
|---|---|---|
| [Microsoft Foundry: The Platform for Smarter AI Model Selection](https://www.youtube.com/watch?v=_YbkY-vFTRU) | Official Azure overview of model selection, evaluation, quality, and cost optimization. | Shared with AI-103 because the concepts overlap; verify current product details before a lab. |
| [Multiple AI Agents That Work as a Team: A2A in Microsoft Foundry](https://www.youtube.com/watch?v=N_7P0fcgKrM) | A hands-on-style walkthrough of two agents, A2A, approvals, and tracing. | Unofficial supplemental material; use it to explore design questions, not to establish Microsoft behavior or exam scope. |

## Blindside watch

Look especially for:

- assuming that more agents are automatically better than a single agent plus
  deterministic code;
- confusing an agent, a workflow, an MCP tool, an A2A protocol, and durable
  application state;
- learning orchestration without learning evaluation, tracing, cost, failure
  handling, identity, data boundaries, and deployment; and
- mixing older Foundry/Azure AI material with current Microsoft Foundry and
  Agent Framework terminology or APIs.

Explain the surprise in plain language and add it to `TEST_ME_LATER.md` when
the learner needs to recognize it in a new problem.
