# GH-600 lessons learned

- **Status:** Study notes from the repository-readiness discussion on 2026-10-27; supplemental to the [official GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600).
- **Use:** Review these takeaways alongside the [GH-600 readiness checklist](REPOSITORY_READINESS.md) and [exercise plan](EXERCISE_PLAN.md). The live official guide remains authoritative for exam scope.

## Work completed so far

- Set up a GH-600 study companion, a paraphrased objective-to-exercise map, and repository-specific readiness material.
- Practiced separating public read access from contributor permissions, separating validation workflows from deliberate publication, and reviewing organization membership and repository access.
- Completed a read-only review of account and organization spending controls, automated Copilot review attribution, and GitHub Actions runner billing. No billing or access settings were changed; account-specific results stay out of this public study aid.
- No runtime agent, MCP setup, or multi-agent system has been implemented in this workspace. The repository exercises are design and GitHub-workflow evidence, not proof of a production agent system or complete exam readiness.

## GitHub collaboration and administration

- **Organization administration is relevant context, not a substitute for agent-development practice.** Practice ownership, collaborator access, repository settings, CI, review, and publication controls where they support least privilege and a reviewable agent workflow. Map each exercise to a current exam objective before counting it as GH-600 evidence.
- **Public viewing and contribution are separate choices.** A public repository can be viewed and cloned by anyone. GitHub accounts are needed to participate, and this repository is configured so collaborators can create issues and pull requests. See [D-006](../../docs/DECISIONS.md), [D-007](../../docs/DECISIONS.md), and the [repository readiness checklist](REPOSITORY_READINESS.md).
- **Public does not mean family-only or openly licensed.** Repository files, history, issues, pull requests, and published Pages content may be visible to everyone. Public visibility alone does not grant reuse rights. The permitted family/personal content boundary and code license remain open under [Q-011](../../docs/OPEN_QUESTIONS.md) and [Q-002](../../docs/OPEN_QUESTIONS.md).
- **Repository permissions and Copilot billing controls are different layers.** Restricting issue/PR creation does not by itself establish Copilot billing policy. Keep account-specific billing evidence private and verify account/organization controls in their appropriate settings; the public study materials should record only the general lesson. Spending controls are tracked separately in the readiness checklist.
- **Keep consequential actions reviewable.** Build validation and manual Pages publication are separate workflows here. Treat merge and publish as human-owned actions in exercises unless a task explicitly and safely establishes other controls.

## Agent workflow and evidence

- **Start with a bounded task contract.** State the goal, inputs, permitted files/tools, acceptance and failure conditions, and human review point before agent action. The proposed first practice is M1 in the [exercise plan](EXERCISE_PLAN.md).
- **Markdown is useful design evidence, not proof of a running agent system.** A policy, workflow proposal, or simulated MCP setup can show reasoning; label it as design/mock evidence. Record hands-on evidence only when the relevant GitHub capability was actually exercised and its result is reviewable.
- **Use least privilege, traceability, and human review together.** Restrict branch/repository/tool scope, preserve evidence of actions and outcomes, and keep project decisions with the human owner.
- **Do not silently turn study exercises into project decisions.** Engine, language, code license, Azure sandbox, and repository ownership remain separate open questions in [OPEN_QUESTIONS.md](../../docs/OPEN_QUESTIONS.md).

## Cross-track connection

The Responsible AI practices in the [training hub](../README.md) apply to GH-600 too. They guide task boundaries, data handling, evaluation, transparency, and accountability. AI-103 and AI-500 still need their own Azure/platform implementation evidence; see the [AI-103 track](../ai-103/README.md) and [lessons learned](../ai-103/LESSONS_LEARNED.md), plus the [AI-500 track](../ai-500/README.md) and [lessons learned](../ai-500/LESSONS_LEARNED.md).

Use the [new-repository checklist](NEW_REPOSITORY_CHECKLIST.md) as a repeatable setup exercise; map the relevant steps to current GH-600 objectives before treating them as exam evidence.

## Review checklist

- [ ] Can I distinguish public read access from contributor permissions and from billing controls?
- [ ] Can I explain why a proposed org/repository setting supports a specific agent-workflow objective?
- [ ] Can I describe the task scope, permissions, approval point, and evidence for an agent task?
- [ ] Have I labeled design, mock, and hands-on evidence accurately?
- [ ] Have I checked the live GH-600 guide instead of assuming every GitHub administration topic is examinable?
