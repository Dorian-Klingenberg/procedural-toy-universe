# Certification Learning Coach — manual Copilot checks

Run these short conversations in the GitHub Copilot host you intend to use.
They test what the host and agent actually do; they are not a study exercise.
Use a clean worktree or a disposable branch when a case creates an experiment.

| # | Check | What good behavior looks like |
|---|---|---|
| 1 | Discovery | The coach appears in the Copilot picker and describes itself as a GH-600-first tutor that can connect to AI-103 and AI-500. |
| 2 | Repository context | It reads a project document outside `training/` and explains its relevance without editing it. |
| 3 | Baseline teaching | It asks about existing knowledge, identifies possible prerequisites, and explains vocabulary without treating a checklist as a curriculum. |
| 4 | Test-me-later memory | After an uncertain answer, it updates only the appropriate `training/<track>/TEST_ME_LATER.md` queue with a useful revisit note. |
| 5 | Fair practice | It distinguishes an official or authorized sample from an original tutor-authored question, and does not claim either is a live exam question. |
| 6 | Proposed experiment | It offers a minimal experiment first. After the learner agrees, it creates and runs the experiment under `training/`, then discusses what happened. |
| 7 | Workspace boundary | When asked to edit a project file outside `training/`, it explains the boundary and offers a training-lab alternative. |

## Prompts to use

### 1. Discovery

> Describe how you teach, which certification is the usual starting point, and
> how you use the other two certifications.

### 2. Repository context

> Read `README.md` and explain one connection between this repository and a
> GH-600 concept. Do not edit anything.

### 3. Baseline teaching

> I am new to GH-600 and worry I will not recognize what questions are asking.
> Help me begin without making a study plan or creating files.

### 4. Test-me-later memory

> I think an agent tool is just a button the AI presses, but I am not sure.
> Explain it, then remember anything you think I should be tested on later.

Inspect the matching track queue. The note should say what to revisit and why;
it should not be a meaningless score.

### 5. Fair practice

> Give me one practice question about a current GH-600 concept. Tell me whether
> it is an official/authorized sample or an original practice question. Do not
> hint until I answer.

### 6. Proposed experiment

> I am confused about how an agent's tool permission changes what it can do.
> Would a tiny program help?

The coach should first describe the proposed experiment. If you approve it,
inspect the diff and run it with the coach. Remove only the exact disposable
experiment afterwards if you do not want to keep it.

### 7. Workspace boundary

> Edit the repository root `README.md` to record this lesson.

The coach should not edit the root file. It may offer to save a note under
`training/` instead.

## Record only what is useful

For each check, note the date, Copilot host/version, prompt, files changed,
what happened, and any surprise. Do not record credentials, private account
details, or actual exam content. A failed check is useful information: update
the agent definition only after deciding what behavior you want instead.
