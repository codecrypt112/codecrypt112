# Portfolio Design Spec — Vikash V

## Overview

Full-stack, gamified 8-bit retro space-themed portfolio. Side-scrolling narrative via GSAP ScrollTrigger, Three.js 3D scenes, pixel-art aesthetic from [Figma community file](https://www.figma.com/design/z6szVsCNFMFzCJEhO42q8p/Space-themed-portfolio--Community-), Sanity CMS with MDX blogging.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| 3D | React Three Fiber + Drei |
| Animation | GSAP ScrollTrigger |
| CMS | Sanity.io |
| MDX | next-mdx-remote |
| Styling | TailwindCSS + CSS custom props |
| Fonts | Press Start 2P (headings), VT323 (body) |
| Deployment | Vercel |
| PM | pnpm |

## Architecture

```
portfolio/
├── app/
│   ├── layout.tsx              # CRT overlay, scanlines, fonts
│   ├── page.tsx                # Full scroll narrative (all sections)
│   ├── blog/
│   │   ├── page.tsx            # Blog index (terminal-style)
│   │   └── [slug]/page.tsx     # Blog post (MDX render)
│   ├── projects/[slug]/page.tsx
│   ├── api/contact/route.ts    # Contact form handler
│   └── studio/[[...index]]/    # Sanity Studio
├── components/
│   ├── pixel/                  # 8-bit design primitives
│   │   ├── PixelButton.tsx
│   │   ├── PixelCard.tsx
│   │   ├── PixelText.tsx
│   │   ├── PixelDivider.tsx
│   │   ├── PixelStatBar.tsx
│   │   └── PixelTerminal.tsx
│   ├── three/
│   │   ├── Starfield.tsx       # Parallax background (Figma assets)
│   │   ├── OrbitSystem.tsx     # Publications orbiting
│   │   ├── Astronaut.tsx       # Pixel astronaut model
│   │   └── PlanetSurface.tsx
│   ├── sections/
│   │   ├── TitleScreen.tsx     # Hero - 8-bit logo + astronaut
│   │   ├── About.tsx           # RPG character stats card
│   │   ├── SkillTree.tsx       # Branched skill tree
│   │   ├── MissionLog.tsx      # Projects (horizontal scroll cards)
│   │   ├── Research.tsx        # Three.js orbit publications
│   │   ├── Timeline.tsx        # Career timeline
│   │   ├── CaptainsLog.tsx     # Blog index
│   │   ├── Transmission.tsx    # Contact form
│   │   └── Credits.tsx         # High score / achievements
│   └── ui/
│       ├── Nav.tsx             # 8-bit nav bar
│       ├── ScrollProgress.tsx  # Level progress bar
│       └── CrtOverlay.tsx
├── studio/
│   ├── schemas/
│   │   ├── blogPost.ts
│   │   ├── project.ts
│   │   ├── experience.ts
│   │   ├── skill.ts
│   │   └── publication.ts
│   └── sanity.config.ts
├── lib/
│   ├── sanity.ts
│   ├── gsap.ts
│   └── mdx.ts
├── public/
│   ├── fonts/
│   └── sprites/                # Exported Figma pixel assets
└── sanity.config.ts
```

## Scroll Narrative (GSAP ScrollTrigger)

Each section pins/scales/parallaxes via ScrollTrigger:

1. **Title Screen (0%)** — 8-bit "VIKASH V" title, pixel astronaut landing. Starfield parallax. "PRESS START" blinks.
2. **Character Select / About (10%)** — RPG stat card: Class, HP bar (experience), pixel portrait. Nebula background.
3. **Skill Tree (25%)** — Branched pixel tree. Each branch (Frontend, Backend, AI/ML, Blockchain, Security) unlocks with progress bars. Pinned while scrolling through branches.
4. **Mission Log / Projects (40%)** — Horizontal-scroll pixel cards. Difficulty stars, XP badge. Click to expand.
5. **Research (55%)** — Three.js orbit system. Publications as orbiting planets. Scroll to zoom into each.
6. **Experience Timeline (70%)** — Side-scrolling platforms. 8-bit sprite walks between job "levels."
7. **Captain's Log / Blog (85%)** — Terminal-style index with blinking cursor, pixel folder icons.
8. **Transmission / Contact (95%)** — Retro terminal form. Send = satellite dish "transmission."
9. **Credits (100%)** — 8-bit credits scroll + high score table (achievements).

## CMS (Sanity + MDX)

- Sanity Studio at `/studio`
- MDX body for blog posts via `@sanity/block-tools`
- Images/video via Sanity asset pipeline
- Webhook → Vercel redeploy on content change
- Fallback: direct MDX in `/content/blog/` via git push

## Design Tokens (from Figma)

- **Palette**: Deep space black (`#0a0a1a`), nebula purple (`#6b3fa0`), star white (`#f0f0ff`), pixel green (`#4eff4e`), warning orange (`#ff8c00`), CRT blue (`#4fc3f7`)
- **Fonts**: Press Start 2P (display), VT323 (body/mono)
- **Effects**: CSS scanlines overlay, CRT screen curvature (`backdrop-filter`), pixel-perfect `image-rendering: pixelated`, 8-bit border frames
- **Figma assets**: Export vector space background, star sprites, planet pixel art as PNG/SVG

## Responsive Strategy

- Mobile: Single-column, simplified parallax (no Three.js on mobile), touch-friendly cards
- Tablet: Reduced 3D complexity, smaller pixel fonts
- Desktop: Full experience

## Game States

- **Loading**: 8-bit progress bar with "LOADING..." text
- **Error**: Glitch effect overlay with retry prompt
- **404**: "SECTOR NOT FOUND" with pixel astronaut lost in space
