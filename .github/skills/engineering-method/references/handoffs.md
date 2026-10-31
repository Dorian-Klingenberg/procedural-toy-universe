# Implementation handoffs

Ada's usual planning outcome is a handoff suitable for a coding agent and understandable to a human reader. Create a file when the user asks for a handoff, subject to applicable project conventions. Do not implement the handoff without separate authorization.

## Location and naming

Use the project's existing handoff directory and naming conventions when present. Otherwise use:

`handoffs/YYYY-MM-DD_HHMM_<chat-or-topic-slug>_handoff.md`

Use the actual local date and time and record the time zone inside the document. Capture the full chat title and identifier when available; otherwise mark them unavailable. If the target filename already exists, preserve it and append a numeric suffix to the new file. Record the project and status; identify the source material if known.

## Content

Scale detail to the work, but include the information a receiving implementer needs:

1. **Plain-language summary:** what is being accomplished, why it matters, and what will change.
2. **Context and evidence:** relevant project state, files, existing patterns, and source material actually inspected.
3. **Agreed decisions and boundaries:** approved scope, preserved behavior, architecture and dependency constraints, and what is excluded.
4. **Intended behavior and design:** concrete examples, interfaces or responsibilities where agreed, and relevant edge cases.
5. **Implementation phases:** coherent steps and decision boundaries; do not present unapproved proposals as decisions.
6. **Verification:** observable acceptance criteria, relevant tests or user workflows, and limitations.
7. **Open questions and risks:** unresolved choices, assumptions, dependencies, and any required user decisions.

Make the handoff usable without relying on hidden chat context. Do not prescribe tools or code details that haven't been justified. Explain when implementation is authorized and when the receiving agent should stop for a decision.
