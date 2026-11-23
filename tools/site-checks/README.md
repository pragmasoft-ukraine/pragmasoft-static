# site-checks

Content-parity and visual-regression helpers used during the Astro 7 / Tailwind 4 upgrade.
Run everything from the **site root** (the folder with `package.json`), with a Linux-native `node_modules`.

- `build_snap.sh NAME`: builds the site (temporarily pinning post dates so ordering is deterministic), writes `NAME.json` (via `snap.py`) and a comparison against `baseline-pinned.json` to `NAME-cmp.txt`. Outputs land in this folder; they are git-ignored.
- `shots.sh NAME PORT`: serves `./dist` and screenshots 5 reference pages at 390 and 1280 wide into `shots/NAME/` (uses the Impeccable `shot` command).
- `snap.py DIST OUT.json`, `cmp.py A.json B.json`: snapshot a build and diff two snapshots (routes, text, headings, links, images, head tags, sitemap, RSS).
- `imgdiff.cjs A B OUT`: pixel diff of two screenshot folders (needs `sharp` from the site's `node_modules`). `sbs.cjs`, `bands.cjs`: side-by-side crop and per-band diff helpers.
- `baseline-pinned.json`: snapshot of the pre-upgrade site (Astro 4.11, Tailwind 3.4, commit `df68660`) built with pinned dates. Use it to prove content parity for any later change. Note it predates the conference page, so new routes show as ADDED.
