# AI Workflow Rules

- Scope each unit of work as one small, independently verifiable increment. Do not combine unrelated sections or milestones.
- Read the project context files in the required order before architectural or code changes, and use their definitions as the source of truth.
- Keep relevant documentation synchronized with implementation changes.
- After completing each milestone, update `context/progress-tracker.md` before advancing.
- Run `npm run build` successfully before advancing to the next phase. Investigate and resolve errors caused by the current increment rather than masking them.
- Do not begin a later phase unless the current phase is implemented, verified, and recorded as complete.
