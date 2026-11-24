# Pragmasoft site: working notes

Marketing/portfolio site for Pragmasoft OÜ, canonical domain **https://pragmasoft.dev**. Astro 7 (static output) + Tailwind 4 on the AstroWind theme, languages `en` (default, prefixed) and `uk`. See `PRODUCT.md` and `DESIGN.md` for product and design context.

## Hosting: one Cloudflare Worker

- Production is a single **Cloudflare Worker named `pragmasoft-static`** (account "Pragmasoft OÜ"). It serves the static build from `dist/` as Workers Static Assets, and handles `/api/*` in code. There is no Cloudflare Pages project in use any more.
- URLs: `https://pragmasoft.dev` (Custom Domain, apex only, no `www`) and `https://pragmasoft-static.pragmasoft-ou.workers.dev`.
- Everything lives in `wrangler.jsonc`:
  - `main: ./worker/index.js`: routes `/api/auth` and `/api/callback` to `worker/auth.js` and `worker/callback.js`; anything else falls through to `env.ASSETS.fetch`.
  - `assets.directory: ./dist`, `not_found_handling: "404-page"` (serves `404.html`; Workers does not infer this like Pages did), `run_worker_first: ["/api/*"]` (only `/api/*` hits the Worker; the rest is served straight from assets).
  - `routes: [{ pattern: "pragmasoft.dev", custom_domain: true }]`: Wrangler creates the DNS record and certificate itself. Do **not** add a manual CNAME; a CNAME to `workers.dev` does not work. The zone must be on this Cloudflare account.
  - `vars.GITHUB_CLIENT_ID` is a plain, public var.
- `public/_headers` and `public/_redirects` are copied into `dist/` and honored natively by Workers (the `/` to `/en/` 301, `.ics` headers, immutable caching for `/_astro/*`). Editing them needs no Worker change.
- The Worker handlers (`worker/auth.js`, `worker/callback.js`) are the former Pages Functions, adapted (`onRequest(context)` kept as is). The old `functions/` folder and the Cloudflare Pages project have been removed.

## Tooling decision: Wrangler, not the `cf` CLI

We tried the new `cf` CLI (1.0.0-rc.4, `cloudflare.config.ts`) and backed out. For Astro it delegates the whole build to `astro build` and then expects `.cloudflare/output/v1`. A static Astro build never writes that, `@astrojs/cloudflare@14.4.9` pins a Vite plugin that writes an older Build Output format, `@cloudflare/vite-plugin@2.0.0-rc.4` conflicts with `astro-icon` and with the adapter, and `cf deploy ./dist` only handles assets-only Workers (no entrypoint). Revisit when `cf` gains static Astro support. Until then: **`wrangler` only**, no Astro adapter, no `cloudflare.config.ts`, no `.cloudflare/` directory. Keep `wrangler` as a devDependency.

## Build

- `npm run build` runs `astro check && astro build` (about 2 minutes, writes `dist/`). Node `>=22.23.4` (Astro 7); `.nvmrc` pins 24.
- Astro prints many "Could not render ... conflicts with higher priority route" warnings during build. They are pre-existing and harmless.
- Local dev (this sandbox): `npm start -- --host 0.0.0.0 --port 4321`. Keep the Linux `node_modules`; never run `npm install` from the Windows host side.

## Deployment (GitHub Actions)

`.github/workflows/deploy.yml`, repo `pragmasoft-ukraine/pragmasoft-static`, default branch `master`:

| Trigger | What runs |
|---|---|
| push to `master` | `npm ci`, `npm run build`, `wrangler deploy --secrets-file <tmp file>`: **production** |
| pull request (same repo only) | build, then `wrangler versions upload`: uploads a version without making it live; the job log prints a preview URL `https://<version-id>-pragmasoft-static.pragmasoft-ou.workers.dev` |

Gotchas that already bit us:
- Secrets are uploaded with `deploy --secrets-file`, **not** the `wrangler-action` `secrets:` input. That input runs *before* the deploy and fails with "latest version of your Worker isn't currently deployed" whenever an undeployed version exists (every PR preview creates one), so production never deployed. The workflow writes a file containing only `GITHUB_CLIENT_SECRET=${GITHUB_CLIENT_SECRET}`; Wrangler expands the value from the environment, so no secret touches disk.
- PR runs never upload secrets (secret changes go live immediately).
- If `wrangler secret ...` fails the same way by hand, deploy first, or use `wrangler versions secret put|bulk`.
- Pushing or merging to `master` deploys to production. Work on branches and open a PR.
- Cloudflare's native Git integration (Workers Builds) is deliberately **not** used; the GitHub Actions workflow is the single deploy path. Do not enable both.

## Environment variables and secrets

| Name | Where | Kind | Notes |
|---|---|---|---|
| `GITHUB_CLIENT_ID` | `wrangler.jsonc` `vars` | public var | OAuth app id for Decap login |
| `GITHUB_CLIENT_SECRET` | Worker secret | secret | Set by the workflow on every `master` deploy, from the Actions secret `OAUTH_CLIENT_SECRET` |
| `OAUTH_CLIENT_SECRET` | GitHub repo secret | secret | Source of truth for the above. Named differently because Actions rejects secret names starting with `GITHUB_` |
| `CLOUDFLARE_API_TOKEN` | GitHub repo secret | secret | Needs Workers Scripts: Edit plus rights to attach the custom domain |
| `CLOUDFLARE_ACCOUNT_ID` | GitHub repo **variable** | variable | `16f20538a59829dd75cc7456a231fb12`. Read as `vars.`, not `secrets.` |

- **Rotate the OAuth client secret:** generate a new one in the GitHub OAuth app, `gh secret set OAUTH_CLIENT_SECRET --repo pragmasoft-ukraine/pragmasoft-static`, then re-run the deploy workflow (or push to `master`). For an immediate change without deploying: `npx wrangler secret put GITHUB_CLIENT_SECRET`.
- Local `wrangler dev` reads secrets from `.dev.vars` (git-ignored). `.wrangler/`, `.cloudflare/` and `.dev.vars` are git-ignored.
- Never commit secret values, and do not paste them into issues or chat.

## Decap CMS

- The CMS is served at **`/decapcms/`** (`public/decapcms/index.html`), **not `/admin/`** (that path is a 404). Config: `public/decapcms/config.yml`.
- Backend is GitHub (`repo: pragmasoft-ukraine/pragmasoft-static`, `branch: master`). Saving in the CMS **commits straight to `master`, which triggers a production deploy**.
- Login flow: Decap opens `https://pragmasoft.dev/api/auth` (Worker redirects to GitHub, scope `repo user`), GitHub returns to `/api/callback`, which exchanges the code for a token using `GITHUB_CLIENT_SECRET` and posts it back to the CMS window.
- GitHub OAuth app settings: callback URL must be exactly `https://pragmasoft.dev/api/callback`. If the domain changes, update the OAuth app, `base_url` in `public/decapcms/config.yml`, and `site` in `src/config.yaml`.
- `config.yml` has `local_backend: true`, which only takes effect on localhost (run `npx decap-server` for local editing).
- Content: posts in `src/content/post` (i18n `multiple_folders`, `en` and `uk`); media goes to `src/assets/images`.

## Domains

- `pragmasoft.dev`: zone on the Pragmasoft OÜ Cloudflare account; canonical (`site:` in `src/config.yaml`).
- `pragmasoft.com.ua`: the previous domain, in a **different Cloudflare account**. Worker routes cannot span accounts, so redirecting it to `pragmasoft.dev` must be done there with a Redirect Rule (a proxied placeholder DNS record, then a dynamic 301 to `concat("https://pragmasoft.dev", http.request.uri.path)`). Status: done (301 with path and query preserved; the old Pages project and its custom domain were removed).

## Site checks

`tools/site-checks/` holds content-parity and visual-regression helpers (see its README). `baseline-pinned.json` is intentionally the **pre-upgrade snapshot with the old domain**; do not regenerate it, diffs against it show what changed since the Astro 4 site.

## Sandbox notes (for agents)

- `CLOUDFLARE_API_TOKEN` in the sandbox is a proxy placeholder; the proxy swaps in the real token on requests to Cloudflare. `npx wrangler whoami` should show account "Pragmasoft OÜ".
- New hosts (for example `pragmasoft.dev`, `*.pragmasoft-ou.workers.dev`) return 403 "Approval required" until the owner allows them in the sandbox network policy.
- The token can deploy Workers and attach the custom domain but cannot list DNS records.
- Tools that spawn a local workerd server (the Astro Cloudflare adapter) fail on `[::1]` through the proxy unless `NO_PROXY` includes the bracketed literal. We no longer use the adapter.

## Open items

None at the moment.
