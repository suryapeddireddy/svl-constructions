<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# SVL Constructions Engineering Rules

Before making any architectural or code changes, read these files in order:

1. `context/project-overview.md`
2. `context/ui-context.md`
3. `context/code-standards.md`
4. `context/ai-workflow-rules.md`
5. `context/progress-tracker.md`

Work in single, small, verifiable increments. Never implement multiple unrelated sections in one step. Use semantic CSS custom property tokens defined in `src/app/globals.css`; do not use hardcoded hex values or raw `zinc-*`/`gray-*` utility classes in components. Never modify `src/components/ui/*` foundation primitives unless explicitly instructed. Update `context/progress-tracker.md` after completing every milestone.
