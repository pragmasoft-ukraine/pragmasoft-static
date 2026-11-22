# Pragmasoft design system: handoff

Written 2026-11-19 from a planning chat with Dmytro Zemnytskyi. It records decisions and open questions. No code was changed. Items marked **(unverified)** were not checked against a primary source.

## Goal

One design system, used by three things:

1. The reveal.js presentation (a talk delivered over Google Meet).
2. A conference landing page on pragmasoft.dev.
3. A redesign of pragmasoft.dev, keeping the design system.

The site is AstroWind according to `tokens.json` `meta.source` (Astro + Tailwind, `--aw-*` CSS variables). The site repo itself has not been inspected **(unverified)**.

Better contrast than the current site is explicitly wanted. The design system already deviates from the site on purpose: `muted` is darker than the site's `#777`, and `on-brand` is dark text on `#30cbab` because the site's white on `#30cbab` is only 2.05:1. Following the design system will visibly change those colours.

## What exists today (files reviewed)

- **`tokens.json`** is a custom schema, not DTCG.
  - Colours are `color.tokens[]` entries of `{name, value, usage}`. `value` is a string or `{light, dark}`.
  - Other sections: `type.fonts[]`, `type.families{}`, `type.groups[].styles[]`, `spacing.tokens[]`, `radius.tokens[]`.
  - Counts: 22 colours, 9 type styles, 4 font files, 3 font families, 5 spacing values, 2 radii.
- **`design-system.json`** looks like the manifest of a design-system product, not an open format: `"v":3`, `"layout":"files"`, content-hash `blob` ids, `lastChange.via: "Claude Code"`. It lists only three logo SVGs. No third-party tool reads it, and it does not contain the tokens.
- **`components/*/preview.html`** are slide components: TitleSlide, SectionDivider, ContentSlide, ImageSlide, QuoteCard, Terminal, DiagramNode, Verdict.
  - Each renders on a 1920px-wide stage using a container-query unit `--u = 100cqw / 1920`.
  - They read tokens as CSS variables with fallbacks, e.g. `var(--page,#fff)`.
  - The first line is a comment `<!-- @dsCard group="Slides" height=380 -->`.
  - Logos are referenced as `/_blob/<hash>`.
  - The triangle-grid background is an SVG mask in each component's CSS. Only its line colour (`pattern-line`) is a token.
- **`build-preview.py`** is a Python script that builds `preview.html`.
  - It maps `/_blob/<hash>` to local logo files.
  - It reads `height=` from each component's first-line comment.
  - It computes WCAG contrast with two hard-coded dictionaries, `GROUND` and `TEXT_LIKE`.
  - It shows an "≈ px in Meet" size for each type style, assuming a 900px-wide slide.

### Problems found

- Stale contrast numbers in `usage` text, compared with what the preview computes against the current dark page `#2b2b2b`:
  - `brand-text` (dark): documented 9.7:1, computed 6.9:1.
  - `brand-accent` (dark): documented 6.4:1, computed 4.5:1.
  - `on-brand`: documented 10:1, computed 9.2:1.
  - All still pass AA. The text is wrong, not the colours. Generating these numbers from the pair list fixes it permanently.
- Some tokens are talk vocabulary, not brand: `leg-data`, `leg-input`, `leg-egress`, `ok`, `danger`, `code-*`.
- Slide sizes assume a 1920px stage (titles 88px, body 48px). They can't be reused for a website.

## Decisions

1. **Format: DTCG 2025.10** (stable since 2025-10-28). Themes and contexts use the Resolver Module (`*.resolver.json`), also 2025.10.
2. **Repo layout: a separate small design repo**, consumed by both the presentation repo and the AstroWind repo through a version-tagged dependency. A plain git dependency (`git+ssh://…#vX.Y.Z`) works with no registry. A Gitea npm registry is optional later.

   ```
   pragmasoft-design/
     tokens/     DTCG source
     fonts/  logos/
     build       Terrazzo config
     dist/       tokens.css, fonts.css (built, tagged)
     preview/    TypeScript preview, reads dist
   ```

   Slide components stay in the presentation repo. Site components stay in the AstroWind repo. Only shared things (tokens, generated CSS, fonts, logos) live in the design repo.
3. **Three token layers:**
   - Core: brand and neutral colours in both themes, font families, radius.
   - Context scale: a stage-pixel scale for slides, a rem and breakpoint scale for web.
   - Domain: trifecta legs, verdict colours, terminal colours. Slides only, unless wanted elsewhere.
4. **Build tool: Terrazzo** (DTCG-native, built-in lint, `tz check`). The fallback is Style Dictionary v5 (the incumbent, with more community material). The format is the future-proofing, so the tool is replaceable. Run a half-hour spike first (see "Verify first").
5. **Preview** is a static page in the design repo, rewritten in TypeScript and split into reviewable modules: load and parse tokens (possibly via `@terrazzo/parser`), contrast calculation (unit-tested), one renderer per section (colours, type, scales, components), and an HTML template. It stays independent of the site. An optional `/design` page in the site can come later.
6. **No Storybook or Markbook for now.**
   - Storybook is too heavy for this.
   - Markbook is pre-1.0, has no published releases, lists its license as "TBD before v1.0", does not mention Astro, and has no MDX.
   - Revisit if components become web components.
7. **Site transition:** generate the site's `--aw-*` variables from the tokens first (no visual change), then build the conference page as the pilot, then redesign page by page.

## What does not convert cleanly to DTCG

- **Font files** (the four `.woff2` paths and weights): no DTCG type. Keep them in `$extensions` or in the code that builds `@font-face`.
- **`textTransform: uppercase`:** not part of the `typography` composite. Use `$extensions`.
- **`letterSpacing: 0.06em`:** as I understand it, 2025.10 dimensions only allow `px` and `rem` **(unverified)**. Either convert to px or keep the original in `$extensions`.
- **The triangle-grid pattern** (tile size, SVG mask): lives in component CSS, not in tokens. Decide whether to tokenize it.
- **The contrast pairings and the 900px Meet width:** live in the Python script, not in tokens. They become lint configuration and a preview setting.

Colours, light/dark themes (via the resolver), spacing, radius and font-family stacks all convert.

## Gaps for the web (not in the current system)

Buttons, links (hover, focus, visited), form fields, focus ring, shadows, breakpoints, container widths, motion, fluid type. The `on-brand` rule (dark text on `#30cbab`) decides button text colour.

## Accessibility plan

1. **Tokens, in the design repo's CI:** declare foreground/background pairs next to the tokens and lint them. Terrazzo has `a11y/min-contrast` (WCAG 2.2, pairs with an optional `largeText` flag, AA or AAA) and `a11y/min-font-size`. The current `GROUND` and `TEXT_LIKE` dictionaries become that pair list. Include UI boundary and focus-ring pairs. Use `min-font-size` for the 36px Meet floor.
2. **Rendered output, in each consumer's CI:** axe-core, via `@axe-core/playwright` (preferred, can test both themes) or `pa11y-ci` with the axe runner.
   - axe may report "needs review" for text over the SVG-mask grid on slides **(unverified)**.
3. **Manual:** keyboard, focus visibility and screen reader checks on page templates. The site has no forms, but nav and links still need visible focus. Add a focus-ring colour token now, even if the rest is later.

APCA and WCAG 3 are drafts, so don't rely on them.

## Verify first

1. **Terrazzo spike:** convert about five tokens (one themed colour, one dimension, one font family) and build CSS with both Terrazzo and Style Dictionary. Compare how much glue light and dark need.
2. **Terrazzo contrast lint:** does `a11y/min-contrast` check dark-theme pairs when themes come from a resolver?
3. **Tailwind version in the AstroWind repo:** v4 reads CSS variables via `@theme`. Older versions need a config bridge.
4. **`em` letter-spacing:** confirm in the 2025.10 format spec whether `em` is allowed.

## Order of work

1. Create the design repo. Convert `tokens.json` to DTCG, with a script that can convert back and a round-trip comparison (22 colours × 2 themes, 9 type styles, 4 font files, 3 families, 5 spacing, 2 radius). Run `tz check`.
2. Build `tokens.css`. Point the presentation repo at it. Output should look the same, otherwise the converter has a bug.
3. Rewrite the preview in TypeScript and add the contrast lint.
4. Generate the site's `--aw-*` variables from the same tokens.
5. Build the conference landing page.
6. Redesign the site page by page. Add axe checks in the site CI.

## Sources consulted

- DTCG 2025.10 stable: https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
- Resolver module: https://www.designtokens.org/TR/2025.10/resolver/
- Terrazzo docs and linting: https://terrazzo.app/docs and https://terrazzo.app/docs/linting/
- Style Dictionary: https://styledictionary.com/
- Markbook: https://github.com/doidor/markbook
- Community design-token skills for Claude Code (not reviewed in detail): `glebis/claude-skills` (design-tokens), `yonatangross/orchestkit` (design-system-tokens). Skim a SKILL.md before installing any of them.
