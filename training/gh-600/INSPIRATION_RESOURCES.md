# GH-600 inspiration resources

**Reviewed:** 2026-10-29

Use these sources to make GitHub Copilot concepts concrete: agent profiles,
tools, MCP, workflows, and what a real agent-enabled repository looks like.
They are inspiration, not official exam scope or a recipe to copy.

| Resource | Useful for | Caveat |
|---|---|---|
| [GitHub custom-agent configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration) | Checking current frontmatter, tool aliases, and MCP configuration details. | This is the authority for product behavior; check it again when a detail matters. |
| [GH-600 Labs & Study Reference](https://github.com/bartoszgawron/gh600-labs) | Small labs and contrasting custom-agent profiles showing different tool postures. | Its agents are intentionally rigid teaching examples, not the tutor's default style. |
| [agentic-ai-practice](https://github.com/florezflow/agentic-ai-practice) | Specialist-agent roles, documentation research, CI, deployment, and governance scenarios. | It is an enterprise-style Bicep lab, much more formal than the learning lab here. |
| [GH-600 GitHub topic](https://github.com/topics/gh-600) | Finding additional public labs, study apps, and targeted examples. | Topic entries are leads to evaluate, not vetted or authoritative sources. |

## Optional video inspiration

| Resource | Useful for | Caveat |
|---|---|---|
| [The Agentic AI Developer: Deep Dive into the GitHub GH-600 Certification](https://www.youtube.com/watch?v=bgj20o0kYKg) | Official Microsoft Reactor background on GH-600 domains, planning, validation, tools, memory, multi-agent systems, and governance. | Published before the current study cycle; recheck the live guide before treating a detail as current. |
| [How to move AI from code completion to agentic workflows](https://www.youtube.com/watch?v=XVscTlkFl1o) | Official GitHub context for moving from isolated assistance toward repeatable agentic workflows. | Context, not a substitute for the official exam guide. |
| [25 agent skills to improve your workflow in GitHub Copilot](https://www.youtube.com/watch?v=9yPyoxlyc5Q) | Official GitHub examples of skills, shared understanding, documentation alignment, and review. | Product details can change; verify implementation facts in current GitHub documentation. |
| [GitHub Agentic Workflows: Automation That Actually Reads the Room](https://www.youtube.com/watch?v=0XTyicuhdKE) | Official Microsoft Developer demonstration of customization, automation, and execution safeguards. | Published before the current study cycle; host behavior may have changed. |
| [Agent Architecture and the SDLC: Plan, Approve, Act](https://www.youtube.com/watch?v=3LVSr2ucMOY) | A short GH-600-oriented explanation of task contracts and planning/action separation. | Unofficial supplemental material; compare its claims with the current guide. |
| [GH-600 Practice Test 2026 — Part 1/5](https://www.youtube.com/watch?v=N-C_ptnX0gc) | Seeing one community-authored question style and discussing what it is actually asking. | Unofficial; never treat its wording or answers as real exam material. |
| [GH-600 Exam Study Guide 2026](https://www.youtube.com/watch?v=RpmaLICHBf8) | A community overview of GH-600 domains and study emphasis. | Unofficial and date-qualified; use it to generate questions to verify, not to establish scope. |

## Blindside watch

Look especially for:

- a prompt that promises actions its tool list does not permit;
- differences between the Copilot host surfaces (IDE, CLI, cloud agent) and
  which frontmatter settings each actually honors;
- the difference between repository search, web search, MCP tools, and shell
  execution;
- product changes that make an older custom-agent example look plausible but
  wrong; and
- scenarios where a formal “safe” workflow gets in the way of learning what the
  underlying GitHub capability actually does.

When one appears, explain it plainly and add it to `TEST_ME_LATER.md` if the
learner should be able to recognize or reason about it later.
