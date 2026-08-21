# Novak Detailing Co.

Single-page marketing website for Novak Detailing Co., serving the Akron–Canton area.

## Stack

- Nuxt 4
- Vue 3 and TypeScript
- Vanilla CSS
- Static generation
- Nuxt Image, Sitemap, Robots, and ESLint

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run generate
```

## SEO and production environment

Copy `.env.example` to `.env` for local configuration. The site intentionally remains non-indexable until both a real production URL is supplied and indexing is explicitly enabled.

```bash
NUXT_PUBLIC_SITE_URL=https://www.example.com
NUXT_SITE_INDEXABLE=true
```

Optional Google Search Console and Bing Webmaster Tools verification tokens can be supplied with:

```bash
NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NUXT_PUBLIC_BING_SITE_VERIFICATION=
```

The SEO foundation includes server-rendered metadata, canonical URL support, LocalBusiness structured data, sitemap generation, robots controls, and Google/Bing verification hooks. Search Console, Bing Webmaster Tools, IndexNow, final Open Graph imagery, and production-domain validation are completed after the real domain and hosting are established.

The site still requires final business photos, gallery content, social links, branding assets, and a final UI/performance pass before launch.
