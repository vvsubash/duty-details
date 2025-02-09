// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://matcha.mizu.sh/matcha.css' },
      ],
    },
  },
  runtimeConfig: {
    public: {
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',
  hub: {
    database: true,
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
})
