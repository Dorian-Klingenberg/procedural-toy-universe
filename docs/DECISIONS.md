# Project Decisions and Significant Discussion

This is the durable record of consequential project decisions and the important discussions that led to them. It is a summary, not a transcript. See the project-wide requirements in [`AGENTS.md`](../AGENTS.md).

## Decisions

### D-001 — Maintain project questions and decisions in repository documentation

- **Date:** 2026-10-26
- **Status:** Accepted
- **Decision:** Maintain substantive open questions, priorities, and concise answers in [`OPEN_QUESTIONS.md`](OPEN_QUESTIONS.md), and maintain consequential decisions and summaries of materially relevant discussions in this file. Require all agents to consult and update these records through repository-wide instructions in `AGENTS.md` and the startup workflow. A skill may provide extra procedure later, but is not required for this behavior.
- **Context and rationale:** The user wants a persistent, prioritized question-and-answer ledger and a record of important conversations and their outcomes, maintained across agents and sessions. Durable tracked files plus always-on repository instructions are the chosen mechanism; full chat transcripts and routine exchanges are not needed.
- **References:** User-approved discussion on 2026-10-26; [`AGENTS.md`](../AGENTS.md); [`AGENT_BOOTSTRAP.md`](AGENT_BOOTSTRAP.md).

## Updating this record

- Give each consequential decision a stable `D-NNN` ID; do not reuse IDs.
- Record the date, status, decision itself, concise context/rationale, and references to relevant discussions, questions, issues, or documents.
- Record only decisions actually made by the user or an authorized project process. Distinguish accepted decisions from proposals, deferrals, and superseded decisions.
- When a decision changes, preserve the prior entry and mark it **Superseded** with a link to the replacing decision; do not silently erase the history.
- Summarize conversations only when they materially shaped a decision. Capture the issue considered, outcome, and rationale briefly; do not copy full transcripts or log routine chat.
