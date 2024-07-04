<template>
  <div class="w-full">
    <AppHeader />
    <NuxtPage class="nuxt-page min-h-screen bg-white !w-full" />
    <AppFooter />
    <CookieConsent />
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    { link: "https://fonts.googleapis.com", rel: "preconnect" },
    { link: "https://fonts.gstatic.com", rel: "preconnect", crossorigin: true },
    // { link: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap", rel: "stylesheet"},
    { link: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap", rel: "stylesheet"}
  ],
})
</script>

<style>
body {
  @apply bg-yellow-400;
}
</style>
