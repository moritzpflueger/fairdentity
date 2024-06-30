// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/decap-cms.js'],
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss", "@nuxt/image"],
  routeRules: {
    '/': { prerender: true }
  }
})