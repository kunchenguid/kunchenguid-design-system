---
name: use-kunchenguid-design-system
description: >
  Build a web page using the kunchenguid design system.
  TRIGGER when: user asks to create an HTML page, essay, post, or landing page that should use the design system.
  DO NOT TRIGGER when: user is editing the design system itself (CSS/JS tokens, components).
---

# Build a Page with the Design System

Create HTML pages that follow the kunchenguid design system. The result should feel like **editorial × system console × field manual**.

Live reference: https://kunchenguid.github.io/kunchenguid-design-system/

---

## Boilerplate

Every page starts with this structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{Page Title}</title>
    <link
      rel="stylesheet"
      href="https://kunchenguid.github.io/kunchenguid-design-system/css/design-system.css"
    />
    <script
      src="https://kunchenguid.github.io/kunchenguid-design-system/js/design-system.js"
      defer
    ></script>
  </head>
  <body>
    <div class="container">
      <!-- content here -->
    </div>
  </body>
</html>
```

All content goes inside a single `.container` div.

---

## Mandatory: The Annotation Title

Every page MUST have a headline with a `[bracketed concept]` — the single most important idea. Add `data-annotate` to the heading and the JS auto-wraps the bracketed text in accent color.

```html
<h1 data-annotate>The future of work is [agent-native].</h1>
```

Rules:

- Only bracket **one** core concept per title
- Keep titles short and declarative
- End with a period

---

## Typography Roles

Fonts have assigned roles. Never mix them arbitrarily.

| Role            | Font           | Use for                     | Applied by                              |
| --------------- | -------------- | --------------------------- | --------------------------------------- |
| **Thesis**      | Source Serif 4 | Headlines, big ideas        | `h1`–`h4` (automatic), `.font-serif`    |
| **Explanation** | Inter          | Body text, descriptions, UI | `body` (automatic), `.font-sans`        |
| **Proof**       | JetBrains Mono | Code, commands, benchmarks  | `code`, `pre` (automatic), `.font-mono` |

---

## Layout Components

### Sections

Wrap each major content block in a `.section`. Adjacent sections get an automatic thin top border.

```html
<section class="section">
  <p class="section-label">Premise</p>
  <h2 data-annotate>One person should operate like an [enterprise].</h2>
  <p>Body text goes here.</p>
</section>
```

### Section Labels

Use `.section-label` for small uppercase labels that categorize content. The standard labels from the essay format are:

- PREMISE
- BROKEN DEFAULT
- NEW MODEL
- MECHANISM
- PROOF
- IMPLICATION

```html
<p class="section-label">Mechanism</p>
```

### Grid

Use `.grid` with a column modifier. Collapses to single column on mobile (<768px).

```html
<div class="grid grid--2">
  <!-- 2 columns -->
  <div class="grid grid--3">
    <!-- 3 columns -->
    <div class="grid grid--4"><!-- 4 columns --></div>
  </div>
</div>
```

### Cards

Surface-colored boxes for grouping content.

```html
<div class="card">
  <p class="section-label">Category</p>
  <h3 data-annotate>Card title with [annotation].</h3>
  <p class="text-sm text-muted mb-0">Description text.</p>
</div>
```

### Tables

Use for benchmarks, comparisons, and structured data. Always wrap in `.table-wrap` for mobile overflow.

```html
<div class="card">
  <div class="table-wrap">
    <table class="table">
      <thead>
        <tr>
          <th>Approach</th>
          <th>Setup</th>
          <th>Leverage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Row label</strong></td>
          <td>Value</td>
          <td>Value</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### Code Blocks

For terminal output, commands, or benchmarks — the "proof" layer.

```html
<pre><code>$ axi run transform --input data --task "clean and analyze"
  [ok] Pipeline initialized
  [ok] 3 agents active</code></pre>
```

### Dividers

Thin horizontal rules between content blocks within a section.

```html
<hr class="divider" />
```

---

## Content Structure

Every essay or post should follow this six-part format:

1. **Claim** — one sharp sentence (the annotated headline)
2. **Broken Default** — what's wrong today
3. **New Model** — name the concept
4. **Mechanism** — how it works
5. **Proof** — example, diagram, code, or benchmark table
6. **Implication** — what becomes possible

Each part maps to a `.section` with a `.section-label`.

---

## Visual Artifacts

Whenever appropriate, we should present a thinking artifact:

- Comparison table (before vs after)
- Code block / terminal output
- Benchmark table with data

Never use decorative illustrations. Prefer **thinking artifacts** — visuals that carry information.

---

## Utility Classes

| Class                      | Effect                        |
| -------------------------- | ----------------------------- |
| `.font-serif`              | Force serif font              |
| `.font-sans`               | Force sans font               |
| `.font-mono`               | Force mono font               |
| `.text-muted`              | Muted text color (`#6B6560`)  |
| `.text-accent`             | Accent text color (`#1A6B5A`) |
| `.text-sm`                 | Small text (0.875rem)         |
| `.text-lg`                 | Large text (1.25rem)          |
| `.mt-sm` through `.mt-2xl` | Margin-top                    |
| `.mb-0` through `.mb-lg`   | Margin-bottom                 |

---

## Color Tokens

Only use these colors. Accent is reserved for meaning (links, annotations, highlights) — never decoration.

| Token                | Hex       | Use                  |
| -------------------- | --------- | -------------------- |
| `--color-bg`         | `#F5F2ED` | Page background      |
| `--color-bg-surface` | `#ECEAE4` | Cards, surfaces      |
| `--color-bg-code`    | `#E2DED7` | Code blocks          |
| `--color-text`       | `#1A1A1A` | Primary text         |
| `--color-text-muted` | `#6B6560` | Secondary / labels   |
| `--color-accent`     | `#1A6B5A` | Links, annotations   |
| `--color-border`     | `#D1CCC4` | Dividers, card edges |

---

## Writing Style

- Precise, not performative
- Opinionated, but justified
- Systems-level thinking
- Calm tone, no hype

Avoid: buzzwords, over-explaining, marketing language, decorative elements.
