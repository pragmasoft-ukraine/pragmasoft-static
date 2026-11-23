---
version: 1
slug: "src-pages-locale-conference-index-astro"
primary_target: "src/pages/[locale]/conference/index.astro"
related_targets: []
---

# Surface brief: Conference page (/en/conference, /uk/conference)

Scope: one new route inside the established Pragmasoft world, English and Ukrainian, built on the upgrade branch (Astro 7, Tailwind 4; page CSS is plain CSS with variables).
Mode: Persuade. The visitor decides to attend and acts by adding the series to their calendar.

## Audience, job, action
- Audience: engineers and engineering leads who follow AI-assisted development, plus Pragmasoft's EU/UK/US buyers and Ukrainian-speaking readers.
- Job: learn what the conference is, who speaks when, and keep the dates.
- Action: "Add to calendar" (a generated .ics for all nine talks). No registration URL exists; the Google Meet link is shared later.
- Proof/content: real agenda from AGENDA.md (nine speakers, nine topics, 30 Nov to 10 Dec 2026, 18:00 Kyiv, Google Meet). Speaker names only; placeholder portraits. No talk descriptions, no invented claims, no prices.
- Constraints: content readable with no CSS feature support; prefers-reduced-motion honoured; no white text on mint or cyan; weights 100/300/400 only; Ukrainian copy is a draft for owner review.

## Direction contract
THESIS: Strata. The page is a vertical landscape of paper layers, sky to marigold to mint to slate bedrock, and the agenda is the geology you scroll through. The category default it refuses: a hero banner over a flat table or a grid of speaker cards.
OWN-WORLD: flat saturated bands from DESIGN.md (Sky #81cddb, Marigold #ffb700, Mint #30cbab, Slate #485365), Charcoal/Ink/white text chosen per band, faceted low-poly triangle edges between layers (authored SVG mask), the logo kite, papercraft bird and turtle from the site assets, Ubuntu Condensed headlines, Roboto 300 body, pill buttons. Recognisable with content removed: four coloured strata with torn triangular seams.
STORY: the visitor sees a kite high in a sky and a title, understands this is nine daily talks, scrolls down through the days, reaches bedrock, and adds the series to their calendar. The tether grounds the kite: free flight tied to solid ground.
FIRST VIEWPORT: sky band under the site header. Left: H1 "Practical agentic software engineering 2026" in Ubuntu Condensed at display scale, one line of facts (dates, 18:00 Kyiv, Google Meet, online), and the charcoal pill "Add to calendar" with a quiet "See the schedule" link. Right: the kite high with its tether dropping toward the layers below; the first marigold seam with triangular teeth is visible at the fold.
FORM: pinned by the owner, no roll. seed: none (pinned), "Direction: \"Strata\". The page is a vertical landscape of paper layers". Agenda rows run across marigold (week one, five talks) and mint (week two, four talks); slate closes with the calendar action and organiser line. Parallax by scroll speed via scroll-driven animations inside @supports, with static fallbacks.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment
The kite drifts across the page on its tether as the layers slide past at different speeds, and lands the visitor on the slate close.

## Unresolved (owner)
Name spellings and Ukrainian forms; talk descriptions; per-talk calendar events; talk duration (1 hour assumed in the .ics); photos; URL and nav placement.
