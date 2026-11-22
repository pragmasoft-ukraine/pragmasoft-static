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

### Neutral
- **Ink** (`#101010`) body text, **Black** (`#000000`) headings, **Muted Grey** (`#777777`) secondary text (4.48:1 on white, just under AA for small text), **Nav Grey** (`#999999`) navigation text on the charcoal header (3.31:1, fails AA).
- **Page White** (`#ffffff`) light page. **Night** (`#030620`) dark page, with heading `#f7f8f8`, body `#e5ecf6`, muted at 66% alpha of the body colour.

### Named Rules
**The One Band, One Colour Rule.** Each section owns exactly one band colour and never splits it with a second saturated colour. Text colour is chosen for that band: Charcoal on sky and marigold, white on red, blue and slate.

**The Mint Is Not A Text Colour Rule.** Mint on white is 2.05:1 and Deep Mint on white is 3.14:1. Use them for fills, rules and large icons, not for body text.

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

### Named Rules
**The Light Weight Rule.** Body and display text default to weight 300. Heavier weights are reserved for button labels.

**The Unloaded Weight Rule.** Buttons request weights 500 and 600 but only 100, 300 and 400 are loaded, so the browser synthesises them. Load the weights you use or stay at 400.

## Layout

A single centred column per section. The header is capped at 970px; text sections, the offer cards and the "Why Ukraine" copy sit at roughly 856–970px; card grids go to `max-w-7xl` (1280px), stats to `max-w-6xl` (1152px). Sections stack vertically and are full-bleed colour bands with the content column inside. Spacing follows the Tailwind 4px scale; common steps are 12, 16, 24, 28 and 32px, plus some literal values (50px, 76px top padding under the fixed header, 140px offsets in the offer cards). Breakpoints are Tailwind defaults (sm 640, md 768, lg 1024, xl 1280). Below `md` the parallax layers, the stats band, the offer cards and the summary paragraph are hidden; navigation collapses to a hamburger.

## Elevation & Depth

Mostly flat. Depth comes from stacking colour bands and from parallax illustration layers (z-index 8–16, scrolling at different speeds), not from shadows. Shadows are used in three places only.

### Shadow Vocabulary
- **Card** (`shadow-md`): The two white "What we offer" cards.
- **Header** (`box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)`): Under the header bar in light mode; removed in dark mode in favour of a 1px border at `rgb(107 114 128 / 20%)`.
- **Dropdown** (`drop-shadow-xl`): Navigation sub-menus.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. Shadows appear only on floating things (dropdowns, header) and the offer cards.

## Shapes

Soft but not cute. Buttons are full pills (9999px). Inputs and textareas use 8px (`rounded-lg`). Dropdown menus use 4px (`rounded`). Cards in the offer section are square. Illustration assets are paper cut-outs with irregular silhouettes, which is where the playful shape language lives.

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

## Do's and Don'ts

### Do:
- **Do** give each section one band colour and pick its text colour for contrast: Charcoal on sky and marigold, white on red, blue and slate.
- **Do** keep body copy at Roboto 300 and headlines at Ubuntu Condensed 300 at 40px.
- **Do** use pill buttons and 8px inputs.
- **Do** let illustration and band colour carry decoration; keep CSS ornament minimal.

### Don't:
- **Don't** put white text on Paper Mint (2.05:1) or on Cyan Blue (2.47:1). The incumbent primary button and the design band do this and fail AA; dark Ink on mint is 9.29:1.
- **Don't** use Nav Grey (`#999999`) on Charcoal for small text (3.31:1).
- **Don't** rely on Muted Grey (`#777777`) for small text on white (4.48:1).
- **Don't** request font weights that are not loaded (500, 600, 700) without loading them.
- **Don't** introduce shadows on resting surfaces or a second saturated colour inside a band.
