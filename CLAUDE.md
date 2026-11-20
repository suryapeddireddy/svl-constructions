# SVL Constructions Engineering Rules

Before making any architectural or code changes, read these files in order:

1. `context/project-overview.md`
2. `context/ui-context.md`
3. `context/code-standards.md`
4. `context/ai-workflow-rules.md`
5. `context/progress-tracker.md`

Work in single, small, verifiable increments. Never implement multiple unrelated sections in one step. Use semantic CSS custom property tokens defined in `src/app/globals.css`; do not use hardcoded hex values or raw `zinc-*`/`gray-*` utility classes in components. Never modify `src/components/ui/*` foundation primitives unless explicitly instructed. Update `context/progress-tracker.md` after completing every milestone.
