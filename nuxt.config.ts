// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/decap-cms.js'],
  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    'nuxt-swiper',
    ["@nuxtjs/google-fonts", {
      families: {
        'Josefin Sans': '100..700'
      }
    }]
  ],
  routeRules: {
    '/': { prerender: true }
  }
})