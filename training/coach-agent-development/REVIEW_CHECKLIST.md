# Certification coach draft review

- **Review scope:** Items 1–5 of the current design round
- **Status:** Draft reviewed; activation and commit remain blocked

## Checklist

- [x] Package layout is documented under `training/`.
- [x] Existing GH-600, AI-103, and AI-500 track directories are preserved.
- [x] Coach development is separated from learner evidence.
- [x] The draft agent has no hard-coded model or reasoning effort.
- [x] The draft prefers low or medium effort where the host permits it and
  does not target high effort.
- [x] The draft allows writing only to `training/` as a behavioral rule.
- [x] The draft states that the write boundary requires later host testing.
- [x] The draft has no shell, deployment, GitHub mutation, MCP mutation, or
  subagent capability.
- [x] Source authority and conflict handling are explicit.
- [x] AI-generated drafts are separated from learner-approved evidence.
- [x] Learner approval and review records are defined.
- [x] Supplemental resources require dates, descriptions, objective mapping,
  freshness status, and video timestamps where applicable.
- [x] Portability and host-adapter limitations are documented.
- [x] The Copilot-first adapter is separated from the canonical package.
- [x] The adapter remains explicitly experimental until host cases are tested.

## Conditions before validation or production use

- Review the Copilot agent definition and these conventions with the project
  owner.
- Decide whether the proposed metadata convention is acceptable.
- Run the host prototype for model/effort behavior, path restrictions, and
  training-local discovery.
- Do not claim that behavioral instructions enforce filesystem isolation until
  the host test provides evidence.
- Keep learner workflow, resource curation, and final validation in their
  deferred rounds.
