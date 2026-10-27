# AI-500 lessons learned

- **Status:** Study notes from the cross-certification discussion on 2026-10-27; supplemental to the [official AI-500 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-500).
- **Use:** Review these takeaways with the [AI-500 readiness checklist](READINESS_CHECKLIST.md). The live official guide remains authoritative for objectives and required implementation evidence.

## Work completed so far

- The repository now has an AI-500 study track, a starter readiness checklist, and shared Responsible AI practices linked across the three courses.
- The GH-600 repository work provides discussion/design practice in permissions, review, handoffs, evaluation, and cost boundaries that can inform later multi-agent governance.
- No multi-agent solution or Microsoft Foundry implementation has been built in this workspace. Treat the current evidence as **discussion/design**, not AI-500 hands-on evidence.

## Transferable practices

- **Responsible AI is shared; its evidence is contextual.** Fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability apply to multi-agent solutions. The [training hub](../README.md) keeps the common checklist in one place; each exercise should identify evidence specific to its system and users.
- **GitHub collaboration concepts can inform multi-agent governance.** Explicit roles, least privilege, review, handoffs, and traceability are useful analogies. They do not establish that a production multi-agent solution has been designed, built, evaluated, or deployed.
- **Protect personal data throughout the lifecycle.** Prompts, shared state, logs, traces, and evaluation sets can expose information. The repo's public family-content boundary is still open under [Q-011](../../docs/OPEN_QUESTIONS.md); use synthetic or approved data for study exercises.

## AI-500-specific evidence

- **Practice multi-agent work as a system.** Use the current AI-500 guide to map requirements for design, implementation, agent responsibilities, coordination, evaluation/monitoring, security/governance, and deployment. Keep the mapping and gaps in the [readiness checklist](READINESS_CHECKLIST.md).
- **A GitHub agent workflow is not automatically an AI-500 implementation.** Repository bots, review workflows, or Markdown diagrams can support design and governance learning, but platform-specific hands-on evidence must come from an environment that satisfies the current exam objectives.
- **Plan the learning environment before creating resources.** Identity, permissions, data, retention, logging/tracing, and spending boundaries should be explicit. The appropriate Azure/Foundry sandbox remains undecided under [Q-012](../../docs/OPEN_QUESTIONS.md); do not infer a subscription, architecture, or deployment decision from these notes.
- **Keep evaluation observable.** Record expected outcomes, evaluation criteria, failures, monitoring signals, and changes made in response. Label simulated scenarios as mock rather than hands-on.

## Review checklist

- [ ] Can I explain what is shared with GH-600/AI-103 and what requires AI-500 multi-agent practice?
- [ ] Have I mapped practice to the current official AI-500 guide?
- [ ] Are agent roles, tool boundaries, state/handoffs, evaluation, and failure handling observable in my exercise evidence?
- [ ] Have I defined safe data, identity, permission, retention, and spending boundaries for the practice environment?
- [ ] Have I labeled hands-on, mock, and discussion/design evidence accurately?

## Cross-track references

- [Training hub and shared Responsible AI checklist](../README.md)
- [GH-600 lessons learned](../gh-600/LESSONS_LEARNED.md)
- [AI-103 lessons learned](../ai-103/LESSONS_LEARNED.md)
