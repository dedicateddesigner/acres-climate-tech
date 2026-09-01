<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:acres-specific-instructions -->

# ACRES Project Instructions

The source of truth for this project is the documentation in `docs/`:

- `docs/PROJECT.md` defines the project, audiences, objectives and factual boundaries.
- `docs/BRAND.md` defines the brand and design direction.
- `docs/CONTENT.md` defines approved content, placeholders and claims requiring confirmation.
- `docs/ARCHITECTURE.md` defines the technical architecture and development standards.

## Technical Standards

- Use the Next.js App Router and TypeScript.
- Use SCSS, CSS custom properties and CSS Modules where appropriate. Do not introduce Tailwind CSS.
- Prefer Server Components by default. Use Client Components only when browser interaction, state, event handling or animation requires them.
- Use GSAP and ScrollTrigger purposefully for storytelling or interaction, only when justified, and respect `prefers-reduced-motion`.
- Keep interactive components keyboard accessible, use meaningful image alternatives, maintain sufficient colour contrast and support reduced motion.
- Prioritize performance through optimized assets, minimal client-side JavaScript, appropriate loading strategies and avoidance of unnecessary dependencies.
- Preserve content integrity. Do not invent company facts, statistics, project data, partner names, certifications, sourcing locations, carbon quantities or scientific claims. Keep unconfirmed material clearly marked as a placeholder.
- Make small, focused changes that follow the existing architecture. Do not add dependencies without a specific, documented need.

<!-- END:acres-specific-instructions -->
