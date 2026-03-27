# kunchenguid-design-system

![Platform](https://img.shields.io/badge/platform-Web-blue)
[![X](https://img.shields.io/badge/X-@kunchenguid-black?logo=x)](https://x.com/kunchenguid)

<h3 align="center">My personal brand design system.</h3>

<p align="center"><strong><a href="https://kunchenguid.github.io/kunchenguid-design-system/">Live Reference →</a></strong></p>

This is a vanilla CSS + JS design system built for my personal content. Two files. No build step.
Drop them into any HTML page and get a consistent visual identity: editorial typography, structured layouts, and the signature `[bracketed annotation]` pattern.

## Quick Start

```html
<!-- Add to any HTML page -->
<link
  rel="stylesheet"
  href="https://kunchenguid.github.io/kunchenguid-design-system/css/design-system.css"
/>
<script
  src="https://kunchenguid.github.io/kunchenguid-design-system/js/design-system.js"
  defer
></script>

<!-- Write a headline with the signature annotation -->
<h1 data-annotate>The future of work is [agent-native].</h1>
```

## Agent Skill

This repo includes a skill that teaches AI coding agents how to build pages with this design system. Install it with [skills](https://github.com/vercel-labs/skills):

```sh
npx skills add -g kunchenguid/kunchenguid-design-system
```

Once installed, agents can invoke `/use-kunchenguid-design-system` to get the full spec: boilerplate, components, typography roles, color tokens, and a complete page example.

## How It Works

The system is built on three layers: tokens, components, and one small JS behavior.

```
┌─────────────────────────────────────────────┐
│  CSS Custom Properties (tokens)             │
│  Colors · Typography · Spacing · Layout     │
├─────────────────────────────────────────────┤
│  Component Classes                          │
│  .card · .table · .grid · .section-label    │
├─────────────────────────────────────────────┤
│  JS: Annotation Processor                   │
│  [bracketed text] ──► <span class=          │
│    "annotation">[bracketed text]</span>     │
└─────────────────────────────────────────────┘
```

- **Design tokens** — All values live in `:root` as CSS custom properties (`--color-accent`, `--font-serif`, `--space-xl`, etc.). Override any token to theme the system.
- **Typography roles** — Source Serif 4 for headlines (thesis), Inter for body (explanation), JetBrains Mono for code (proof). Roles are never mixed arbitrarily.
- **Annotation processor** — Add `data-annotate` to any heading. The JS finds `[bracketed text]` and wraps it in `<span class="annotation">` with the accent color. Idempotent — safe to call multiple times.
- **No decoration** — Cards differentiate through background color, not shadows. Dividers are 1px. Layout communicates structure through whitespace and alignment.

## Development

```sh
# The system is static — no build step
open docs/index.html     # View the live reference locally
```

The `docs/` directory is the GitHub Pages root. Edit `docs/css/design-system.css` for tokens and components, `docs/js/design-system.js` for the annotation processor, and `docs/index.html` for the showcase page.
