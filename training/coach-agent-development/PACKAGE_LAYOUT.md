# Certification coach package layout proposal

- **Status:** Current-round design proposal
- **Training root:** `training/` directly below the repository root
- **Decision scope:** Directory responsibilities only; file schemas and active
  agent discovery remain for later refinement

## Design goals

- Keep the coach's package guidance, skills, and prompts together under
  `training/coach-agent-development/`; keep the Copilot agent definition in
  `.github/agents/` for discovery.
- Preserve the existing `gh-600/`, `ai-103/`, and `ai-500/` track directories.
- Keep shared material separate from track-specific evidence.
- Keep AI-generated drafts distinguishable from learner-owned material.
- Avoid copying the same lesson or source record into multiple tracks.
- Allow the package to be moved under another repository's root without
  changing the training-root convention.

## Proposed layout

```text
training/
├── README.md
├── coach-agent-development/
│   ├── README.md
│   ├── PACKAGE_LAYOUT.md
│   ├── prompts/                  # future reusable lesson/task prompts
│   ├── skills/                   # future training-specific skills
│   ├── schemas/                  # future metadata and evidence schemas
│   └── drafts/                   # future coach-generated drafts only
├── shared/                       # future cross-track learning material
│   ├── sources/                  # future shared source records
│   ├── lessons/                  # future shared lessons learned
│   ├── questions/                # future cross-track Q&A
│   └── exercises/                # future shared exercises
├── gh-600/
│   ├── README.md
│   ├── EXERCISE_PLAN.md
│   ├── exercises/
│   ├── sources/                  # future GH-600 source records
│   ├── lessons/                  # future learner-approved lessons
│   ├── questions/                # future GH-600 Q&A
│   └── progress/                 # future track progress and evidence index
├── ai-103/
│   ├── README.md
│   ├── exercises/                # future
│   ├── sources/                  # future AI-103 source records
│   ├── lessons/                  # future learner-approved lessons
│   ├── questions/                # future AI-103 Q&A
│   └── progress/                 # future track progress and evidence index
└── ai-500/
    ├── README.md
    ├── exercises/                # future
    ├── sources/                  # future AI-500 source records
    ├── lessons/                  # future learner-approved lessons
    ├── questions/                # future AI-500 Q&A
    └── progress/                 # future track progress and evidence index
```

## Directory responsibilities

| Directory | Responsibility | Must not contain |
|---|---|---|
| `coach-agent-development/` | Package design, prompts, skills, schemas, and development drafts | Learner evidence presented as complete or unrelated application code |
| `shared/` | Material intentionally applicable to more than one certification track | Track-specific evidence that should be evaluated separately |
| `gh-600/` | GH-600 curriculum, exercises, source records, lessons, Q&A, and progress | AI-103 or AI-500 completion claims |
| `ai-103/` | AI-103 curriculum, exercises, source records, lessons, Q&A, and progress | GH-600 or AI-500 completion claims |
| `ai-500/` | AI-500 curriculum, exercises, source records, lessons, Q&A, and progress | GH-600 or AI-103 completion claims |

## Evidence and draft separation

The package should distinguish at least these states, regardless of the final
metadata format:

- **AI-generated draft:** created by the coach and awaiting learner review.
- **Learner working note:** written or materially revised by the learner.
- **Learner-approved artifact:** accepted by the learner as part of the study
  record.
- **Mock:** simulated or configuration-only practice.
- **Discussion/design:** reasoning without operational implementation.
- **Hands-on:** performed with the relevant platform and supported by
  inspectable evidence.

The coach-development folder may contain drafts of schemas and examples. It
must not silently promote those drafts into track progress or completion
evidence.

## Source-record placement

- Put a source record in `shared/sources/` only when it supports multiple
  tracks.
- Put a source record in a track's `sources/` directory when its relevance or
  evidence is track-specific.
- Record provider, URL, publication/update date, review date, objective
  mapping, freshness status, and a short description.
- For videos, also record the precise relevant timestamp and a description of
  what the segment contributes.
- The freshness policy remains current-as-of-2026-07-31-or-later for
  supplemental material; older material requires explicit review or exclusion.

## Portability and activation

This layout is designed for the current Copilot-first setup. The discoverable
agent definition lives in `.github/agents/`, while package guidance and future
supporting materials live under `training/`. Portability to other hosts is
deferred.

## Not decided by this proposal

- Exact metadata syntax (frontmatter, YAML, JSON, or another format).
- Exact skill and prompt naming conventions.
- Whether a host can discover skills directly under `training/`.
- How learner approval is recorded.
- Whether future track directories need additional subdivisions.
- Whether a future non-Copilot host needs a separate adapter.
