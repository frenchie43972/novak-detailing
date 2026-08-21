const publicSiteUrl = process.env.NUXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') || ''
const siteUrl = publicSiteUrl || 'http://localhost:3000'
const indexable = Boolean(publicSiteUrl) && process.env.NUXT_SITE_INDEXABLE === 'true'
const siteDescription = 'Professional interior, exterior, mobile, and warehouse car detailing serving Akron, Canton, and surrounding Northeast Ohio communities.'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-04',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/eslint',
  ],
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  site: {
    url: siteUrl,
    name: 'Novak Detailing Co.',
    description: siteDescription,
    defaultLocale: 'en-US',
    indexable,
  },
  runtimeConfig: {
    public: {
      siteUrl: publicSiteUrl,
      googleSiteVerification: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
      bingSiteVerification: process.env.NUXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  robots: {
    sitemap: [`${siteUrl}/sitemap.xml`],
  },
  routeRules: {
    '/': { prerender: true },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
