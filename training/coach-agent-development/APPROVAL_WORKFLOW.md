# Training artifact approval workflow

- **Status:** Current-round design decision
- **Scope:** Artifacts created or updated by the certification coach under
  `training/`

## Purpose

Separate coach-generated material from learner-owned study evidence. A file can
be useful before it is approved, but it must not be presented as proof that the
learner completed an objective.

## Required metadata

Each new coach-created learning artifact should begin with metadata equivalent
to:

```yaml
evidence_type: discussion/design
artifact_state: ai-draft
created_by: certification-learning-coach
learner_reviewed: false
learner_approved: false
sources_reviewed_on: YYYY-MM-DD
```

The final syntax may change when the package schema is designed. The meanings
must remain explicit.

## Artifact states

| State | Meaning | Who may advance it |
|---|---|---|
| `ai-draft` | Coach-generated material awaiting learner review | Coach may create it |
| `learner-working` | Learner has begun editing or responding | Learner, with coach recording only explicit user direction |
| `learner-reviewed` | Learner has reviewed the content and identified corrections or questions | Learner |
| `learner-approved` | Learner explicitly accepts the artifact as part of the study record | Learner; coach may record the explicit approval |
| `archived` | Retained for history but not current study guidance | Learner or explicit owner instruction |

## Approval rules

- The coach must not mark an artifact `learner-approved` based on silence,
  praise, a request for the next step, or the existence of a successful check.
- A learner approval should identify the artifact and, where useful, the
  review date and any limitations.
- A learner may approve a coach-generated reference without claiming that the
  learner personally authored every sentence. The artifact must still retain
  its AI-generated origin.
- Hands-on evidence requires inspectable platform evidence in addition to
  approval; approval alone cannot convert a design exercise into hands-on work.
- Corrections to learner-authored material require explicit permission and
  should preserve a recoverable history.

## Review record

Until a dedicated schema exists, record approvals in the artifact's metadata
and a nearby review note or log. A review record should contain:

- Artifact path
- Reviewer
- Review date
- Decision: accepted, revise, or rejected
- Evidence type
- Material limitations or follow-up

## Current-round decision

Use explicit artifact metadata plus a nearby review record. This is a
documentation convention, not a claim that the host enforces it automatically.
