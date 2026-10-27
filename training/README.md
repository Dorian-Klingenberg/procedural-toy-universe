# Certification training hub

This hub links three related but distinct learning tracks. The current study priority is GH-600; AI-103 and AI-500 remain planned learning goals. Each exam's live Microsoft Learn study guide is authoritative and may change.

## Study tracks

| Track | Current focus | Local materials | Official guide |
|---|---|---|---|
| **GH-600 — first** | Agentic AI development practices in GitHub and the software development lifecycle. | [Study companion](gh-600/README.md), [lessons learned](gh-600/LESSONS_LEARNED.md), [new-repository checklist](gh-600/NEW_REPOSITORY_CHECKLIST.md), [repository readiness checklist](gh-600/REPOSITORY_READINESS.md), and [exercise plan](gh-600/EXERCISE_PLAN.md). | [Exam GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600) |
| **AI-103 — later** | Developing AI apps and agents on Azure. | [Study track](ai-103/README.md), [lessons learned](ai-103/LESSONS_LEARNED.md), and [readiness checklist](ai-103/READINESS_CHECKLIST.md). | [Exam AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) |
| **AI-500 — later** | Designing and implementing multi-agent AI solutions. | [Study track](ai-500/README.md), [lessons learned](ai-500/LESSONS_LEARNED.md), and [readiness checklist](ai-500/READINESS_CHECKLIST.md). | [Exam AI-500 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-500) |

## Shared Responsible AI practice checklist

Use Microsoft's [Responsible AI principles](https://www.microsoft.com/en-us/ai/principles-and-approach) and its [guidance for agents](https://learn.microsoft.com/en-us/agents/center-of-excellence/responsible-ai) as a shared lens across all three tracks. Apply each practice to the task's risks and record evidence in the exam-appropriate format. This checklist does not replace any exam objective or demonstrate a platform-specific implementation by itself.

- [ ] **Fairness:** Consider whether similar people and cases receive consistent treatment; examine examples and evaluation data for systematic bias.
- [ ] **Reliability and safety:** Define intended behavior, boundaries, safe failure modes, and checks for harmful or adversarial inputs and tool results.
- [ ] **Privacy and security:** Identify data entering prompts, tools, memory, logs, traces, and public outputs; minimize it, restrict access, and define retention.
- [ ] **Inclusiveness:** Consider accessibility and whether intended users can understand and use the workflow.
- [ ] **Transparency:** Explain where AI is involved, what it can and cannot do, and how generated material is identified or sourced.
- [ ] **Accountability:** Identify the human owner for approvals, escalation, and review of outcomes.

## How evidence transfers between tracks

Shared ideas can transfer; evidence must still match the exam and platform objective.

| Shared capability | GH-600 evidence | AI-103 evidence | AI-500 evidence |
|---|---|---|---|
| Safety, privacy, security, and human oversight | Repository policies, task boundaries, permission scoping, review, and workflow controls. | Azure AI application and agent design/implementation evidence mapped to the official guide. | Multi-agent design and implementation evidence mapped to the official guide, including applicable security and governance work. |
| Reliability, evaluation, and improvement | Task acceptance criteria, CI/workflow results, error analysis, and revised instructions. | Azure AI solution evaluation and troubleshooting evidence mapped to the official guide. | Multi-agent evaluation, monitoring, and improvement evidence mapped to the official guide. |
| State, tools, and coordination | GitHub environment/tool use, agent state, handoffs, and coordination practice. | Azure AI application and agent implementation evidence mapped to the official guide. | Multi-agent orchestration, state, handoffs, and operational evidence mapped to the official guide. |

Use these evidence labels consistently:

- **Hands-on:** Performed with the relevant platform or tool and supported by inspectable evidence.
- **Mock:** Simulated or configuration-only exercise, clearly labeled as simulated.
- **Discussion/design:** Reasoned explanation or proposal without operational implementation.

A Markdown artifact in this repository can support design and GitHub workflow learning. It does not, by itself, demonstrate Azure AI, Python, Microsoft Foundry, or deployed multi-agent implementation. The separate Azure/Foundry environment remains an open question in [Q-012](../docs/OPEN_QUESTIONS.md).

## Track cross-references

- [GH-600](gh-600/README.md) links to the [AI-103](ai-103/README.md) and [AI-500](ai-500/README.md) tracks.
- [AI-103](ai-103/README.md) links to the [GH-600](gh-600/README.md) and [AI-500](ai-500/README.md) tracks.
- [AI-500](ai-500/README.md) links to the [GH-600](gh-600/README.md) and [AI-103](ai-103/README.md) tracks.
- Shared repository context and open project questions remain in [`docs/OPEN_QUESTIONS.md`](../docs/OPEN_QUESTIONS.md) and [`docs/DECISIONS.md`](../docs/DECISIONS.md).
