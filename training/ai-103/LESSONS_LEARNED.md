# AI-103 lessons learned

- **Status:** Study notes from the cross-certification discussion on 2026-10-27; supplemental to the [official AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103).
- **Use:** Review these takeaways with the [AI-103 readiness checklist](READINESS_CHECKLIST.md). The live official guide remains authoritative for objectives and required implementation evidence.

## Work completed so far

- The repository now has an AI-103 study track, a starter readiness checklist, and shared Responsible AI practices linked across the three courses.
- The repository and GitHub workflow work provides discussion/design practice in privacy, least privilege, human review, and cost boundaries.
- No Azure AI application or agent has been implemented in this workspace. Treat the current evidence as **discussion/design**, not AI-103 hands-on evidence.

## Transferable practices

- **Responsible AI principles carry across the three study tracks.** Fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability should shape Azure app and agent design too. Apply them to concrete data flows, tools, evaluations, and user impact; see the shared checklist in the [training hub](../README.md).
- **Privacy work begins before deployment.** This project is public for accountless viewing, so family or personal information must be treated as public if added to repository content, history, or a published site. The content boundary remains open under [Q-011](../../docs/OPEN_QUESTIONS.md). Use synthetic or approved data in prompts, examples, evaluation data, and logs.
- **Least privilege and human review are useful design habits.** GitHub repository and workflow exercises can help build these habits, but they do not prove Azure AI implementation competence.

## AI-103-specific evidence

- **Follow the AI-103 guide for Azure objectives.** The current study guide defines which Azure AI app/agent capabilities and implementation evidence to learn. Keep an objective-to-practice map in the [readiness checklist](READINESS_CHECKLIST.md) rather than assuming GH-600 coverage transfers wholesale.
- **Separate platform practice from project architecture decisions.** An Azure/Python learning sandbox can provide course evidence without selecting the core project's engine or application stack. The environment and its access/spending boundaries remain open under [Q-012](../../docs/OPEN_QUESTIONS.md).
- **Distinguish design from hands-on work.** Markdown architecture, policy, and mock scenarios are useful preparation, but label them accurately. Retain inspectable evidence for hands-on objectives and record troubleshooting and evaluation results.

## Review checklist

- [ ] Can I identify which skills transfer from GH-600 and which require AI-103-specific Azure practice?
- [ ] Have I mapped every study activity to the current official AI-103 guide?
- [ ] Is my practice environment bounded by explicit identity, permission, data, and spending rules?
- [ ] Am I using synthetic/approved data and applying the shared Responsible AI checklist?
- [ ] Have I recorded whether each result is hands-on, mock, or discussion/design?

## Cross-track references

- [Training hub and shared Responsible AI checklist](../README.md)
- [GH-600 lessons learned](../gh-600/LESSONS_LEARNED.md)
- [AI-500 lessons learned](../ai-500/LESSONS_LEARNED.md)
