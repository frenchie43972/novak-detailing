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
