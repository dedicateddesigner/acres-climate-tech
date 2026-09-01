# ACRES — Technical Architecture

## Stack

- Next.js
- React
- TypeScript
- SCSS
- GSAP / ScrollTrigger when justified
- Git
- GitHub
- Hostinger Web App

## Development

Run locally using Node.js.

Do not introduce DDEV or Docker unless a future requirement specifically justifies them.

## Styling

Use SCSS.

Do not introduce Tailwind CSS.

Use CSS custom properties for design tokens.

Use CSS Modules for component-specific styling where appropriate.

## Next.js

Use the App Router.

Prefer Server Components by default.

Use Client Components only when browser interaction, state, event handling or animation requires them.

## Components

Components should be reusable and focused.

Homepage sections should not become one giant page component.

Suggested structure:

components/
├── Header/
├── Hero/
├── Background/
├── WhatWeDo/
├── Biochar/
├── EnhancedRockWeathering/
├── VisionMission/
├── Methodology/
├── Projects/
├── Sourcing/
└── FooterCTA/

## Data

Project data and other repeatable content should be separated from presentation components.

Avoid hardcoding repeated project cards directly into JSX.

## Animation

Use GSAP only where it improves storytelling or interaction.

Prefer purposeful motion over decorative motion.

Respect prefers-reduced-motion.

## Performance

Prioritize:

- Optimized images
- Appropriate image dimensions
- Lazy loading where appropriate
- Minimal JavaScript
- Server Components by default
- Avoid unnecessary dependencies

## Accessibility

All interactive components must be keyboard accessible.

Images require meaningful alt text where appropriate.

Decorative images should be marked appropriately.

Maintain sufficient colour contrast.

Respect reduced-motion preferences.

## SEO

Use Next.js metadata.

Pages should have meaningful titles and descriptions.

Do not use placeholder metadata in production.

## Content integrity

Never invent:
- Statistics
- Project data
- Partner names
- Certifications
- Carbon quantities
- Sourcing locations
- Scientific claims

If information is unavailable, mark it as a placeholder.

## Dependencies

Do not install a library simply because it is popular.

Every significant dependency should have a reason.

## AI development

Before modifying the project:

1. Read AGENTS.md.
2. Read relevant files in docs/.
3. Inspect existing implementation.
4. Make the smallest appropriate change.
5. Test the result.
6. Report what changed.

Do not modify unrelated files.