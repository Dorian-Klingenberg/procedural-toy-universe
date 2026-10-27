# GH-600-aligned repository creation checklist

- **Purpose:** A reusable study aid for setting up a repository that can support safe, reviewable agent-assisted development practice.
- **Scope:** This checklist combines GH-600-relevant workflow design with practical GitHub administration. It is not a substitute for the [official GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600), and completing it does not establish exam readiness.
- **Use with:** The [GH-600 objective and exercise plan](EXERCISE_PLAN.md), [lessons learned](LESSONS_LEARNED.md), and, for this project only, the [repository readiness checklist](REPOSITORY_READINESS.md).
- **Evidence:** Label each result **hands-on**, **mock**, or **discussion/design**. Keep account-specific billing evidence private; do not put credentials, payment details, personal information, or secrets in a public study repository.

## 1. Define the repository boundary

- [ ] State the repository's purpose, intended users, and first bounded work item.
- [ ] Choose personal-account or organization ownership; identify who will own administration and billing.
- [ ] Choose public or private visibility deliberately. Public means viewable and clonable by anyone; it does not mean family-only or open-licensed.
- [ ] Review the repository contents, commit history, issues, pull requests, releases, and any published site for secrets, personal data, and material that should not be public.
- [ ] Select and record a code license only after the owner has chosen one. Track third-party asset provenance and license separately; public availability is not permission to reuse.
- [ ] Record unresolved choices as open questions rather than silently making them during setup.

## 2. Establish collaboration and billing boundaries

- [ ] Inventory organization members, repository collaborators, teams, outside collaborators, and repository roles.
- [ ] Grant each person only the access needed for their work. Keep organization ownership, billing administration, and repository administration limited to trusted maintainers.
- [ ] Require each contributor to use their own GitHub account; never share the owner's account, credentials, or personal Copilot seat.
- [ ] Decide who may create issues and pull requests, who reviews changes, and who may merge them.
- [ ] Inspect billing separately at personal-account and organization scope. A repository role does not itself grant billing-administration authority.
- [ ] Review paid plans, assigned seats, metered products, and enabled features before inviting contributors or turning on automation.
- [ ] For relevant scopes, inspect budgets for AI credits, Actions, Codespaces, Packages, and Git LFS. Confirm whether each budget blocks usage at its limit; an alert-only budget does not stop overage.
- [ ] Review Copilot code-review settings and billing attribution before enabling automatic reviews. Record who pays for an automatic review, who pays for a manual request, and whether bot or unlicensed-user reviews can be billed to the organization.
- [ ] Recheck current GitHub documentation because product plans, attribution rules, and budget controls can change.

## 3. Set up a reviewable agent workflow

- [ ] Add repository instructions that state the project mission, invariants, forbidden actions, and required evidence.
- [ ] Define a task contract before agent work: goal, inputs, files and tools in scope, expected output, acceptance and failure conditions, and human review point.
- [ ] Choose the smallest tool set and permissions needed for the task. Limit repository, branch, environment, network, and secret access; document why each permission is needed.
- [ ] Separate planning from execution. Make consequential actions such as changing account settings, merging, releasing, or publishing require explicit human control.
- [ ] Use a branch and pull request for changes that need review. Define who reviews and merges; verify required checks and rules against the selected GitHub plan.
- [ ] Keep project decisions with the authorized owner. Record accepted decisions and unanswered questions in durable project records; do not turn an agent proposal into a decision by implication.
- [ ] For stateful or multi-agent work, define what state is retained, how handoffs work, how stale or conflicting context is detected, and how the work is paused or recovered.

## 4. Configure automation and publication

- [ ] Inventory workflow triggers, permissions, secrets, runners, artifacts, and external actions before enabling automation.
- [ ] Give each workflow only the permissions it needs, scoped to the job where practical. Review pull-request events carefully, especially when workflows can access secrets or write to the repository.
- [ ] Separate validation from release or deployment. Use a deliberate trigger and protected environment for publishing; do not use a normal push check as an accidental release mechanism.
- [ ] Check the cost boundary for every runner and workload. Standard GitHub-hosted runners are free for public repositories; private-repository usage may be billed after included quotas.
- [ ] Review action versions, maintenance, artifact retention, cache/storage use, and failure behavior.
- [ ] Keep logs and workflow outputs useful for diagnosis without exposing secrets or personal data.
- [ ] Confirm that failure, denial, timeout, or unavailable tools result in a visible safe stop rather than an invented success.

## 5. Define evaluation and learning evidence

- [ ] Write observable success and failure criteria before running an agent task.
- [ ] Use both reviewer judgment and checkable signals, such as required files, expected outputs, policy checks, and existing workflow results.
- [ ] Preserve plans, changes, review outcomes, logs, and workflow links needed to explain what happened.
- [ ] Analyze failures and record whether the cause was task design, model behavior, tool permissions, environment, or stale context.
- [ ] Change one relevant instruction, tool, or safeguard at a time where practical, then compare against the same criteria.
- [ ] Label simulated configurations and discussion as mock/design evidence. Claim hands-on evidence only when the feature was actually exercised and its result is inspectable.
- [ ] Map each exercise to the current official GH-600 objectives. Treat repository administration as supporting practice only when it demonstrates a relevant agent workflow, permission, evaluation, or accountability concept.

## 6. Review before inviting contributors

- [ ] Confirm public/private visibility, ownership, member list, collaborator roles, issue/PR access, and branch/review path.
- [ ] Confirm spending limits and hard-stop behavior at every applicable account and organization scope.
- [ ] Confirm automatic Copilot reviews, paid seats, paid-usage policies, and workflow triggers match the intended cost boundary.
- [ ] Confirm validation does not publish, deployment needs explicit authorization, and workflow permissions are least-privilege.
- [ ] Confirm the README explains how to contribute and where to report problems; add templates or policies only when they help the intended contributors.
- [ ] Capture remaining risks and open decisions. Do not mark the repository production-ready or the learner exam-ready merely because this checklist is complete.

## References

- [Official GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600)
- [GitHub billing budgets](https://docs.github.com/en/billing/how-tos/set-up-budgets)
- [GitHub Copilot code-review billing](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review)
- [GitHub Actions billing](https://docs.github.com/en/actions/concepts/billing-and-usage)
- [Training hub and shared Responsible AI practices](../README.md)
