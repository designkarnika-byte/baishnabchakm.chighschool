# Design Brief: BAISHNABCHAK M.C. HIGH SCHOOL

## Purpose
Dignified, trustworthy school website balancing institutional heritage with modern accessibility. Serves visitors (notices, admission info, contact), authenticated users (teacher/student directories), and staff (admin notice board management). Bilingual Bengali/English throughout.

## Tone & Aesthetic
Editorial institutional — inspired by prestigious heritage schools and universities. Formal, clean, uncluttered. No playful elements. Dignified serif typography paired with warm neutrals and institutional teal. Serif conveys tradition; minimal decoration conveys clarity.

## Color Palette

| Role | OKLCH (light) | OKLCH (dark) | Usage |
|------|---------------|-------------|-------|
| Primary | 0.42 0.15 256 | 0.62 0.18 260 | Deep teal — headers, primary CTAs, nav highlights. Authority & trust. |
| Accent | 0.72 0.18 70 | 0.78 0.20 70 | Warm gold — pinned notices, secondary actions, emphasis. Prestige. |
| Secondary | 0.92 0.04 248 | 0.25 0.01 245 | Cool neutral grey — cards, sidebars, secondary surfaces. |
| Muted | 0.88 0.03 245 | 0.24 0.01 250 | Pale grey — borders, dividers, disabled states. |
| Background | 0.98 0.02 180 | 0.15 0.01 240 | Soft off-white (light), deep slate (dark). Paper-like. |
| Foreground | 0.18 0.01 256 | 0.95 0.02 250 | Deep teal-black (light), off-white (dark). High contrast text. |
| Destructive | 0.55 0.22 25 | 0.65 0.19 22 | Alert red — removals, errors. Warm saturation. |

## Typography

| Level | Font | Weight | Use |
|-------|------|--------|-----|
| Display (H1–H3) | Fraunces (serif) | 600–700 | Page titles, section headers, school name. Elegant, editorial authority. |
| Body | Lora (serif) | 400–500 | Paragraphs, descriptions, body text. Warm, readable serif. |
| Mono | GeistMono | 400 | Code, technical content, notice timestamps. Monospace clarity. |
| UI | Lora | 500 | Buttons, labels, tabs. Serif consistency. |

**Type Scale:** 48/42/36 (display) → 24/20/18 (heading) → 16/14 (body) → 12/11 (caption).

## Structural Zones

| Zone | Treatment |
|------|-----------|
| Header | Teal primary background (`bg-primary`), white text (`text-primary-foreground`). Subtle shadow-elevated. Logo + school name (English/Bengali) + language toggle on right. |
| Navigation | Horizontal, within header or below. Teal background continued. Link hover: accent gold. |
| Main Content | `bg-background` (off-white/light). Sections separated by subtle divider (`border-border`). Card sections: `bg-card` with `shadow-subtle`. |
| Notice Pinboard | Gold-accented cards (`bg-card`, `border-l-4 border-accent`). Pinned notices lifted with `shadow-elevated`. Unpinned: `shadow-subtle`. |
| Admin Sidebar | `bg-secondary` (pale grey), `text-sidebar-foreground`. Primary accent on nav highlights. Subtle `border-r border-border`. |
| Footer | `bg-primary` (teal), `text-primary-foreground`. Contact info, address, hours. Centered or two-column. |

## Spacing & Rhythm
- Gutters: 2rem (md), 1.5rem (sm), 1rem (mobile).
- Card padding: 1.5rem (standard), 1rem (compact).
- Section margin-y: 3rem (large), 2rem (medium), 1rem (small).
- Leading: 1.6 (body), 1.2 (headings) for reading comfort.

## Component Patterns
- Buttons: Primary (teal bg, white text), Secondary (border only, teal text), Accent (gold bg, dark text), Destructive (red).
- Inputs: `bg-input` border, `border-border`, focus ring teal primary.
- Cards: `bg-card`, subtle shadow, 8px radius.
- Badges: Teal primary or accent gold, rounded-full, compact.
- Alerts: `bg-destructive/10`, `text-destructive`, left border accent.
- Modals: Backdrop blur, elevated card, centered.

## Motion & Interaction
- Smooth transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1) on all interactive elements (buttons, links, hovers).
- Hover states: 5–10% opacity shift or subtle color shift on primary/secondary buttons.
- No entrance animations — institution-appropriate restraint.
- Focus: Thick teal ring (3px) on keyboard navigation.

## Constraints
- No generic AI aesthetics: no purple gradients, no rounded-full everywhere, no emoji.
- Font family: Fraunces + Lora (serif-only, formal).
- Max content width: 1200px for readability.
- Mobile-first layout: 320px → 640px → 1024px breakpoints.
- Bilingual: All text in DESIGN.md keys is English; rendered UI reflects i18n strings from backend/frontend config.

## Signature Detail
**Pinned notice gold accent line** — left border in accent gold (0.72 0.18 70) on important/pinned notices. Subtle visual cue of hierarchy without decoration overload. Reinforces warmth against cool teal header.

## Dark Mode
Intentional inversion: deep slate background (`0.15 0.01 240`), bright off-white foreground, muted teal (`0.62 0.18 260`), warm gold remains saturated. Footer & header remain dark, creating cohesion.
