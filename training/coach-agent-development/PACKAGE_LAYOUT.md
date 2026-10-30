# Certification Learning Coach component layout

The learner's material and the components GitHub Copilot discovers do not live
in the same place. That is normal. Keep the active Copilot pieces in their
native locations and keep the coach's learning work inside `training/`.

```text
repository/
├── training/                                     # the coach's learning lab
│   ├── README.md
│   ├── PROGRESS.md                              # shared progress memory
│   ├── gh-600/
│   │   └── TEST_ME_LATER.md
│   ├── ai-103/
│   │   └── TEST_ME_LATER.md
│   ├── ai-500/
│   │   └── TEST_ME_LATER.md
│   └── coach-agent-development/                  # design and host tests
│
└── .github/                                      # GitHub Copilot components
    ├── agents/
    │   └── certification-learning-coach.agent.md
    ├── skills/                                   # add only when a repeatable
    │   │                                          # workflow earns one
    └── prompts/                                  # optional focused entry points
```

## Naming convention

Use the `certification-learning-coach-` prefix for every Copilot-facing
component belonging to this tutor. The part after the prefix says what it does.

| Component | Example name |
|---|---|
| Agent | `certification-learning-coach.agent.md` |
| Skill folder | `certification-learning-coach-calibration/` |
| Skill folder | `certification-learning-coach-assessment/` |
| Prompt file | `certification-learning-coach-baseline.prompt.md` |
| Prompt file | `certification-learning-coach-test-me.prompt.md` |

This naming is a way to find related pieces, not a requirement to create all
of them now. Start with the agent definition. Add a skill only after a useful
workflow repeats, and add a prompt only when a focused entry point would make
the learning experience easier.

## Learning-lab content

The active coach may read the whole repository for context. Its notes,
questions, source material, and exploratory code belong under `training/`.
The individual certification directories hold their own `TEST_ME_LATER.md`
queues. `training/PROGRESS.md` keeps the cross-track memory in a small,
dashboard-friendly format. An experiment can live wherever under `training/`
makes it easy for the learner to find and understand; it does not need a
prescribed project structure.

The `.github/` files are installed and maintained by the person creating the
tutor. A running coach does not need to edit them.
