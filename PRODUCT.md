# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary (confirmed): foreign buyers of software services (founders, product managers, CTOs, mainly in the EU, Britain and the US) evaluating a vendor, particularly in fintech, pharma and insurance.

Secondary (inferred from the en/uk locales, not confirmed): Ukrainian-speaking visitors reading the Ukrainian locale.

## Product Purpose

Marketing and portfolio site for Pragmasoft OÜ (domain pragmasoft.dev). It presents what the company does today, its team, client testimonials and past case studies, so a prospective client can judge credibility and get in touch via the contact page. Success is a qualified inquiry.

## Positioning

Confirmed: a Ukrainian engineering team founded in 2004, re-established in Estonia (EU) in 2025 because of the war. That gives two decades of experience, a small and still highly skilled team, and an EU legal entity. The company mainly supports a few long-standing customers in regulated industries (fintech, pharma, insurance) and offers IT consulting and help with AI adoption.

## Operating Context

- Astro 4 + Tailwind site derived from the AstroWind template, with English (default) and Ukrainian locales.
- Content lives in `src/content/section/{en,uk}` and `src/content/post/{en,uk}` (portfolio case studies).
- Decap CMS is present under `public/decapcms`; the OAuth login handlers are in `worker/`, served by the Cloudflare Worker.
- Deployed via Netlify/Vercel configuration files.

## Capabilities and Constraints

Current services (confirmed):
- Ongoing development and support for existing customers in the EU, Britain and the US, in fintech, pharma and insurance.
- IT consulting.
- AI adoption assistance.

No longer offered (confirmed): graphic/web design and mobile app development, because demand is low. Existing site sections for these (`design.mdx`, `mobile.mdx`) and any copy that sells them are out of date. Cloud and Java server sections need review against what the company actually does now.

Other constraints:
- Bilingual (en/uk); content must stay in parity across locales.
- Blog/portfolio enabled with 6 posts per page, RSS and sitemap.
- The about-section stats ("10 years", "100+ projects", "1000+ feedbacks") are stale. Founding in 2004 means roughly 20 years, but the project and feedback counts are unconfirmed. Do not repeat or extend them without confirmation.
- The "Why Ukraine" section (national IT-export rankings) frames the company as a Ukraine-based outsourcer. Its fit with the 2025 Estonian re-establishment is not decided.

## Brand Commitments

Name: Pragmasoft (legal name Pragmasoft OÜ). Ukrainian roots and the Estonian/EU re-establishment are both part of the company's story. No visual identity commitments were stated.

## Evidence on Hand

- Client testimonials in `src/content/section/en/hero.mdx`.
- About 34 portfolio case studies in `src/content/post/en`. Many likely include design and mobile work and need review.
- Team photos for 10 members in `src/assets/images/team`. Whether the current team matches this list is unconfirmed.
- Not on hand: current client names cleared for public use, metrics, pricing, certifications, AI-adoption case studies. Do not invent them.

## Product Principles

1. Credibility comes from real evidence (named work, real testimonials, a visible team), not from claims.
2. Describe only what the company does today; retired services do not appear as offers.
3. Lead with trust for regulated buyers: 20+ years, an EU entity, and a stable, experienced team.
4. Both locales are first-class; nothing ships in one language only.
5. Make contacting the company easy for a visitor who has decided.
6. Never state numbers or facts the company has not confirmed.
