---
name: Pragmasoft
description: Flat, saturated colour bands and papercraft illustration over a light, Roboto-and-Ubuntu-Condensed typographic base.
colors:
  primary: "#30cbab"
  primary-band: "#31cbaa"
  accent: "#19a485"
  primary-rule: "#24ac8f"
  charcoal: "#464646"
  nav-grey: "#999999"
  muted: "#777777"
  ink-heading: "#000000"
  ink-body: "#101010"
  page: "#ffffff"
  band-sky: "#81cddb"
  band-orange: "#ffb700"
  band-red: "#e2371b"
  band-blue: "#00b0f3"
  band-slate: "#485365"
  band-slate-accent: "#fad31a"
  night: "#030620"
  night-heading: "#f7f8f8"
  night-body: "#e5ecf6"
  hero-title: "#0d7a62"
  photo-rim: "#2f2f2f"
  close-text: "#e7ebf1"
typography:
  display:
    fontFamily: "'Ubuntu Condensed', ui-sans-serif, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 300
    lineHeight: 1
  stat:
    fontFamily: "Roboto, ui-sans-serif, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 300
    lineHeight: 1
  body:
    fontFamily: "Roboto, ui-sans-serif, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.25
  label:
    fontFamily: "'Ubuntu Condensed', ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0.01rem"
  button:
    fontFamily: "Roboto, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.375
  strata-title:
    fontFamily: "'Ubuntu Condensed', ui-sans-serif, sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  strata-day:
    fontFamily: "'Ubuntu Condensed', ui-sans-serif, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 0.9
rounded:
  sm: "4px"
  md: "8px"
  full: "9999px"
spacing:
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.page}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.page}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  input:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  nav-link:
    textColor: "{colors.nav-grey}"
    typography: "{typography.label}"
    padding: "17px 8px 18px"
  offer-card:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink-body}"
    padding: "28px 20px"
  conference-banner:
    backgroundColor: "{colors.band-orange}"
    textColor: "{colors.ink-body}"
    padding: "8px 44px 8px 76px"
    height: "36px"
  button-strata:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.page}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  button-strata-hover:
    backgroundColor: "{colors.ink-body}"
    textColor: "{colors.page}"
  button-strata-on-slate:
    backgroundColor: "{colors.band-slate-accent}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  speaker-portrait:
    backgroundColor: "{colors.photo-rim}"
    width: "72px"
    height: "72px"
---

# Design System: Pragmasoft

> Recorded from the incumbent code (`src/components/CustomStyles.astro`, `src/assets/styles/tailwind.css`, `tailwind.config.cjs`, `src/components/**`, `src/pages/[locale]/_sections/**`). It describes what ships today, not a target. Where the code fails a standard, the gap is named under Do's and Don'ts.

## Overview

**Creative North Star: "The Paper Workshop"**

The site reads as a stack of flat, saturated paper sheets (sky, orange, red, blue, mint, slate), each holding one section of the story, with hand-built paper creatures (a turtle, a bird) and parallax paper-cut scenery sitting on top. The type is quiet and light so the colour and the paper imagery carry the personality. Everything is horizontal bands: one colour per section, one headline per band.

Density is low and centred. Sections are tall, headlines are large and light, and body copy is short. The grid is a narrow centred column (970px for the header and text, wider for card grids) rather than a dense layout. The system is built on AstroWind and Tailwind, so structure (spacing, breakpoints, buttons) is default Tailwind; the identity lives in the colour bands, the two typefaces and the illustration assets.

**Key Characteristics:**
- One flat colour band per section; the band colour is the section's identity.
- Light-weight type (Roboto 300) at generous size; condensed uppercase for navigation.
- Pill-shaped buttons; soft 8px inputs.
- Papercraft illustration and parallax layers (raster assets) carry decoration; the CSS adds almost none.
- Light and dark modes both exist (class-based); the dark page is a deep navy, not black.
- Faceted triangles are the second shape motif (seams, clouds, kite, floating facets, portrait hexagons), taken from the logo and the site's triangle lattice.

**The Strata extension (conference page).** `/[locale]/conference/` applies the Paper Workshop as a vertical landscape: sky, marigold, mint and slate sheets stacked like strata, torn along a triangular seam, with furniture moving at different scroll speeds. It reuses the incumbent band colours, type pair and pill buttons; only the seam, the lattice, the low-poly cloud, the origami kite, the hexagon portrait and the banner are new.

## Colors

A mint-green brand colour with a charcoal counterweight, and a set of loud band colours used one per section.

### Primary
- **Paper Mint** (`#30cbab`): Brand colour. Primary button fill, the about/stats band (`#31cbaa`, a one-step variant used as a literal), links and icons marked `text-primary`.
- **Deep Mint** (`#19a485`): Accent. Hover and secondary emphasis on green; defined in the tokens but lightly used.
- **Mint Rule** (`#24ac8f`): 1px dividers inside the "What we offer" cards. Header bottom border on mobile uses `#2abb9b`.

### Secondary
- **Charcoal** (`#464646`): Header bar, section headlines on light bands, text on sky/orange bands, and the hover fill for primary buttons.

### Band colours (one per project section)
- **Sky Paper** (`#81cddb`): Mobile section. Text on it is Charcoal (5.25:1).
- **Marigold** (`#ffb700`): Java section. Text on it is Charcoal (5.40:1).
- **Poster Red** (`#e2371b`): Cloud section. Text is white (4.38:1, passes AA for normal text only just).
- **Cyan Blue** (`#00b0f3`): Design section. Text is white (2.47:1, fails AA).
- **Slate** (`#485365`) with **Signal Yellow** (`#fad31a`): "Why Ukraine" band. White body (7.78:1) and yellow summary (5.33:1).

### Strata layers (conference page)
Four sheets, each with its own text colour and a darker lip colour (`color-mix(in oklch, <layer>, #000 N%)`, with literal fallbacks when `color-mix` is unsupported).
- **Sky** (light ground, `#ffffff` with the `#eeeeee` triangle lattice; text Charcoal). The hero is deliberately light, not sky blue; the Sky Paper hue appears only in the low-poly clouds and floating facets.
- **Marigold** (`#ffb700`, lip 16% darker; text Charcoal). First agenda week.
- **Mint** (`#30cbab`, lip 16% darker; text Ink `#101010`, not white). Second agenda week.
- **Slate** (`#485365`, lip 28% darker; text white, closing line `#e7ebf1`, button and focus ring Signal Yellow `#fad31a`). The bedrock.
- **Hero Title Green** (`#0d7a62`): Deep Mint darkened until it can carry text; 5.3:1 on white and 4.5:1 over the lattice lines. Used only for the hero `h1`.
- **Photo Rim** (`#2f2f2f`): 3px neutral rim around speaker photographs so they hold their edge on marigold and mint.
- **Marigold Banner** (`#ffb700` fill, Ink `#101010` text, 10.9:1): the site-wide conference banner.
- Facets and portrait placeholders use tints and shades of the layer's own hue (for example `#ffc93d` / `#f0a800` on marigold, `#6fe3c9` / `#1f9f86` on mint, `#6b7a90` / `#3b4658` on slate), at 45-60% opacity.
- Kite colours come from the logo: mint front `#64d1a0` / `#4fc79a`, body `#19a485` / `#2abb9c` / `#137a64` / `#1f9f86`, reverse-side flaps `#f03f09` / `#f65c2c` / `#d93508`, string `#19a485`.
- Cloud meshes use five sky blues (`#81cddb`, `#5fb7cf`, `#a8dde8`, `#c4eaf1`, `#6cc0d6`) at 42-72% opacity per triangle.

### Neutral
- **Ink** (`#101010`) body text, **Black** (`#000000`) headings, **Muted Grey** (`#777777`) secondary text (4.48:1 on white, just under AA for small text), **Nav Grey** (`#999999`) navigation text on the charcoal header (3.31:1, fails AA).
- **Page White** (`#ffffff`) light page. **Night** (`#030620`) dark page, with heading `#f7f8f8`, body `#e5ecf6`, muted at 66% alpha of the body colour.

### Named Rules
**The One Band, One Colour Rule.** Each section owns exactly one band colour and never splits it with a second saturated colour. Text colour is chosen for that band: Charcoal on sky and marigold, white on red, blue and slate.

**The Mint Is Not A Text Colour Rule.** Mint on white is 2.05:1 and Deep Mint on white is 3.14:1. Use them for fills, rules and large icons, not for body text. The one green allowed to carry text is the darkened Hero Title Green (`#0d7a62`); mint `#30cbab` and `#19a485` stay non-text.

**The Layer Owns Its Text Rule.** On the conference page every layer sets one `--text` colour (Charcoal on sky and marigold, Ink on mint, white on slate) and its children inherit it; dividers are `currentColor` at 32%.

## Typography

**Display Font:** Ubuntu Condensed (fallback `ui-sans-serif`)
**Body Font:** Roboto (fallback `ui-sans-serif`)

**Character:** A friendly humanist pair. Roboto at light weight reads as calm and open; Ubuntu Condensed adds a compact, slightly technical voice for section titles and navigation. Only Roboto 100, 300 and 400 (and their italics) and Ubuntu Condensed 400 are loaded.

### Hierarchy
- **Display** (Ubuntu Condensed 300, 40px, line-height 1): Section headlines, in Charcoal on light bands. Medium-and-up weights are not loaded for this family, so 300 falls back to 400.
- **Stat** (Roboto 300 italic, 72px, line-height 1): Large numerals in the stats band, in Charcoal; caption beneath at 14px, 500, italic.
- **Body** (Roboto 300, 18px, line-height ~1.25): Section copy, capped by the column width (about 856–970px).
- **Label** (Ubuntu Condensed 400, 16px, line-height 20px, letter-spacing 0.01rem, uppercase): Main navigation. "What we offer" list items are uppercase 18px.
- **Button** (Roboto 500/600, 16px, line-height 1.375): Button labels.

### Strata page type
- **Strata Title** (Ubuntu Condensed 400, `clamp(2.5rem, 6.4vw, 4.75rem)`, line-height 1, `text-wrap: balance`): the hero `h1`, in Hero Title Green. The hero title, lead and fact list are uppercase (title +0.01em tracking, lead 18px +0.04em); everything below the hero is sentence case.
- **Layer Headline** (Ubuntu Condensed 400, `clamp(2rem, 4.5vw, 2.75rem)`, line-height 1.05): `h2` per week and the closing line. Speaker name `h3` is 26px, 32px from `md`.
- **Day Numeral** (Ubuntu Condensed 400, 52px, 72px from `md`, tabular figures) with an uppercase 18px month beneath.
- **Agenda Body** (Roboto 300 inherited from the page; topic 19px / 21px from `md`, line-height 1.35; meta line 15px at 400).
- The conference page uses only weights 300 and 400, so it never triggers synthesis; its buttons are 400, not 500/600.

### Named Rules
**The Light Weight Rule.** Body and display text default to weight 300. Heavier weights are reserved for button labels.

**The Unloaded Weight Rule.** Buttons request weights 500 and 600 but only 100, 300 and 400 are loaded, so the browser synthesises them. Load the weights you use or stay at 400.

## Layout

A single centred column per section. The header is capped at 970px; text sections, the offer cards and the "Why Ukraine" copy sit at roughly 856–970px; card grids go to `max-w-7xl` (1280px), stats to `max-w-6xl` (1152px). Sections stack vertically and are full-bleed colour bands with the content column inside. Spacing follows the Tailwind 4px scale; common steps are 12, 16, 24, 28 and 32px, plus some literal values (50px, 76px top padding under the fixed header, 140px offsets in the offer cards). Breakpoints are Tailwind defaults (sm 640, md 768, lg 1024, xl 1280). Below `md` the parallax layers, the stats band, the offer cards and the summary paragraph are hidden; navigation collapses to a hamburger.

**Strata layout (conference page).** Layers are full-bleed sheets stacked with no gap (padding 5rem top, 5-7rem bottom), each holding a `62rem` centred column with 1rem side gutters. The hero fills `100svh - 76px` from `md` up when the viewport is at least 620px tall, so the next layer's seam is visible at the fold. Agenda rows are a three-column grid (day 4.25rem / text / portrait 3.25rem, widening to 6.5rem / text / 4.5rem from `md`). Below 768px the floating facets are hidden, the hero stacks with the kite beneath, the first and fourth clouds are hidden and the rest shrink to 15rem; below 480px the portrait column is dropped. The page opts out of the site tagline band with `showTagline={false}` on `PageLayout`, which also hosts the banner in its default header slot above the sticky header.

## Elevation & Depth

Mostly flat. Depth comes from stacking colour bands and from parallax illustration layers (z-index 8–16, scrolling at different speeds), not from shadows. Shadows are used in three places only.

### Shadow Vocabulary
- **Card** (`shadow-md`): The two white "What we offer" cards.
- **Header** (`box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)`): Under the header bar in light mode; removed in dark mode in favour of a 1px border at `rgb(107 114 128 / 20%)`.
- **Dropdown** (`drop-shadow-xl`): Navigation sub-menus.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. Shadows appear only on floating things (dropdowns, header) and the offer cards.

**The Stacked Lip Exception.** The conference page departs from Flat-By-Default on purpose, without adding shadows. Depth is stacked paper: each layer's `::before` paints the sheet colour in a torn seam shape 47px above its top edge, and `::after` paints a darker lip of the same hue 37px above it, shifted 90px sideways so the cut edge reads. Furniture (clouds, kite, facets) sits at `z-index: 0` behind the `z-index: 2` content column and moves in parallax (see Motion). The sky hero has no seam. Buttons, portraits and banner carry no shadow.

## Shapes

Soft but not cute. Buttons are full pills (9999px). Inputs and textareas use 8px (`rounded-lg`). Dropdown menus use 4px (`rounded`). Cards in the offer section are square. Illustration assets are paper cut-outs with irregular silhouettes, which is where the playful shape language lives.

**Faceted triangle motif (conference page).** Recurring forms, all flat-filled polygons:
- **Seam mask**: a 600x48 SVG mask, repeated in x, with a 12-vertex jagged top edge (`M0 48V30L70 8l62 28 78-32 82 34 68-24 70 30 90-34 80 28V48Z`), stretched to the layer's width.
- **Lattice tile**: `triangles-light.svg`, a 32x57 tile of 1px `#eeeeee` lines on white (horizontal rules at 0.5 and 29.5, diagonals forming triangles), repeated as the hero ground. `triangles-dark.svg` (`#919191` on `#7a7a7a`) is the dark counterpart and is not used by this page.
- **Low-poly cloud**: a deterministic mesh of three jittered point rows (5-8 columns), each cell split into two triangles, each triangle one of five sky blues at 42-72% opacity. Five clouds per hero, 13-34rem wide.
- **Origami kite**: eight polygons in the logo's mint and orange-red, drawn with a 3:4 body and a dashed string. It is tilted with CSS perspective (`perspective(1100px) rotateY(-34deg) rotateX(14deg) rotateZ(12deg)` from `md`, `70vw` perspective on mobile), bleeds off the right edge, and straightens slightly on hover.
- **Floating facets**: single triangles (`50,0 100,90 0,90` and `0,0 100,20 40,90`), 70-120px, in the layer's own tint at 45-60% opacity.
- **Hexagon portraits**: speaker photos are clipped to a flat-sided hexagon (`50% 0, 100% 12%, 100% 88%, 50% 100%, 0 88%, 0 12%`) inside a 3px `#2f2f2f` rim; the initials placeholder uses a steeper 22% hexagon and a low-poly face in the layer's colours.
- Fact-list bullets are small charcoal triangles (`clip-path`), and the banner shows the logo oversized and cropped so only a few coloured triangles read.

## Components

### Buttons
- **Shape:** Pill (full radius), padding 14px 24px on mobile and 14px 32px from `md`, 1px border.
- **Primary:** Mint fill and border with white text (the incumbent; contrast is 2.05:1 and fails AA). Hover fills Charcoal with white text. Transition 200ms ease-in.
- **Secondary:** Transparent with a grey-400 border and Ink text. Hover: grey-100 fill and grey-600 border. Dark: slate-300 text and slate-500 border.
- **Tertiary:** No border, Muted Grey text, darkens on hover.
- **Focus:** A 2px blue-500 ring with 2px blue-200 offset. This is the default Tailwind blue, not a brand colour.

### Inputs / Fields
- **Style:** 8px radius, 1px grey-200 border, white fill (slate-900 and grey-700 border in dark), padding 12px 16px, 14–16px text.
- **Focus / Error / Disabled:** No custom treatment; browser defaults apply.

### Navigation
- **Style:** Charcoal header bar (`#464646`, deep navy at 90% in dark mode) with condensed uppercase links in Nav Grey, 16px, centred in a three-column grid on desktop. A decorative paper edge sits under the bar.
- **States:** Hover switches to link colour or white (dark). The active page gets `aw-link-active`. Dropdowns are 200px minimum, 4px radius, blurred white at 90%.
- **Mobile:** Hamburger toggle with white bars on the charcoal bar.

### Offer Cards (signature)
Two white, square cards with `shadow-md` that sit side by side on a Mint band, containing uppercase 18px lines separated by 1px Mint Rule dividers. A paper turtle and bird are positioned partly outside the cards, overlapping the band.

### Project Sections (signature)
A colour band with a Display headline, a short intro, and a four-column grid of project tiles, with parallax paper scenery in the band's colour variant behind them (desktop only).

### Conference Banner (signature)
A full-width Marigold strip above the sticky header, min-height 36px, text Ink 16px at 400 (10.9:1). The logo is placed oversized (12rem, 20rem from 900px) and cropped at the edges, rotated -14deg, with a mirrored copy at the right from 900px; it is decorative and `aria-hidden`. The whole banner is the link (the anchor's `::after` spans it), with an underlined call to action that thickens on hover. A close button (32px circle, rotates 90deg and tints on hover) stores `conference-2026-banner-closed` in `sessionStorage`; the banner also hides after the last talk and is not rendered on the conference page itself. Focus draws a 2px Ink outline inset 4px.

### Strata Buttons
Pill buttons as in Buttons, but Charcoal fill with white text (hover Ink, lifts 3px, 200ms colour / 220ms `cubic-bezier(0.22, 1, 0.36, 1)` translate), 400 weight. On slate: Signal Yellow fill with Ink text, hover white. Secondary links are underlined text whose underline thickens to 2px and offsets on hover. Focus is a 3px Charcoal outline (Signal Yellow on slate) with 3px offset.

### Agenda Row
Day numeral, then speaker (Layer Headline h3), topic and a meta line, then a hexagon portrait; rows are divided by 1px `currentColor` at 32%. On hover the portrait scales 1.07 and rotates -3deg and the day numeral shifts 0.2rem right.

### Motion (conference page)
- Scroll-driven parallax runs only inside `@media (prefers-reduced-motion: no-preference)` and `@supports (animation-timeline: view())`. Clouds and kite rise by a per-element `--speed` (90-360px, kite 240px) over the first viewport of root scroll; facets travel from `+speed` to `-speed` over their own `view()` cover range.
- The `animation-timeline` and `animation-range` declarations live in separate, doubled-selector rules (`.cloud.cloud`, `.kite-big.kite-big`, `.facet.facet`) because minifiers fold them into the `animation` shorthand, which Chrome then rejects.
- The kite also idles with a 7s `rotate` bob on its own property so it never fights the parallax `translate`.
- Reduced motion leaves everything static. Hover micro-animations are the button lift, link underline, portrait tilt, day-numeral nudge, kite straighten (700ms) and banner close rotation.

## Do's and Don'ts

### Do:
- **Do** give each section one band colour and pick its text colour for contrast: Charcoal on sky and marigold, white on red, blue and slate.
- **Do** keep body copy at Roboto 300 and headlines at Ubuntu Condensed 300 at 40px.
- **Do** use pill buttons and 8px inputs.
- **Do** let illustration and band colour carry decoration; keep CSS ornament minimal.
- **Do** build new conference surfaces from the Strata parts: a layer colour with its lip, its own text colour, furniture in the layer's tint behind the content column, and parallax gated by reduced motion and `@supports`.
- **Do** use only weights 300 and 400 on new surfaces; they are loaded, so nothing is synthesised.
- **Do** put the `animation-timeline` in its own rule, never inside the `animation` shorthand.
- **Do** keep the hero title in `#0d7a62`; use mint `#30cbab` and `#19a485` for fills only.

### Don't:
- **Don't** put white text on Paper Mint (2.05:1) or on Cyan Blue (2.47:1). The incumbent primary button and the design band do this and fail AA; dark Ink on mint is 9.29:1.
- **Don't** use Nav Grey (`#999999`) on Charcoal for small text (3.31:1).
- **Don't** rely on Muted Grey (`#777777`) for small text on white (4.48:1).
- **Don't** request font weights that are not loaded (500, 600, 700) without loading them.
- **Don't** introduce shadows on resting surfaces or a second saturated colour inside a band. Stacked lips and tinted facets are the sanctioned depth on the conference page.
- **Don't** put white text on Mint or Marigold layers; Mint takes Ink, Marigold takes Charcoal.
- **Don't** let a parallax layer sit above the content column (`z-index: 2`) or capture pointer events (clouds and the kite are `pointer-events: none`).
