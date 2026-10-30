# AI-103 inspiration resources

**Reviewed:** 2026-10-29

Use these sources to find small Azure and Microsoft Foundry experiments, fair
question styles, and practical ways to turn an abstract service concept into a
runnable lesson. They are not substitutes for the current official AI-103
study guide.

| Resource | Useful for | Caveat |
|---|---|---|
| [AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) | Confirming the live exam scope before planning a study session. | This is the authority; it can change. |
| [AI-103 course repository](https://github.com/timothywarner-org/ai103) | Self-contained module and demo ideas for Foundry, agents, RAG, evaluation, and security. | It uses real Azure resources and includes intentionally vulnerable demonstrations; inspect a lesson before running it. |
| [AI-103 Study Hub and Dojo](https://github.com/felipegarcian/ai-103-study-hub) | Original-question practice, retrieval practice, and revisiting weak understanding. | Unofficial; verify technical claims independently and never present its original questions as live exam content. |
| [AI-103 Study Guide](https://github.com/kkaminsk/AI-103-Study-Guide) | Spotting current-platform terminology and high-leverage details worth checking. | Community-maintained and drift-prone by its own admission; use it to form verification questions. |

## Optional video inspiration

| Resource | Useful for | Caveat |
|---|---|---|
| [Course Preview — AI-103: Develop AI apps and agents on Azure](https://www.youtube.com/watch?v=3pyTJXkqc58) | Official Microsoft Learn orientation to the AI-103 course and its learning formats. | Orientation only; use the live study guide and course material for actual scope. |
| [Microsoft Foundry: The Platform for Smarter AI Model Selection](https://www.youtube.com/watch?v=_YbkY-vFTRU) | Official Azure overview of model selection, evaluation, quality, and cost optimization. | Shared with AI-500 because the concepts overlap; verify current product details before a lab. |

## Blindside watch

Look especially for:

- Microsoft Foundry terminology, SDKs, roles, and APIs that have changed since
  older Azure AI material was written;
- a lab that silently assumes an Azure subscription, quota, region, identity,
  or paid service;
- a concept that appears to be one agent feature but is really a question about
  retrieval, evaluation, networking, security, or observability; and
- a working demo that hides cost, cleanup, error handling, or deployment
  assumptions.

Explain why a finding matters, then add it to `TEST_ME_LATER.md` when the
learner should revisit it in a new scenario.
