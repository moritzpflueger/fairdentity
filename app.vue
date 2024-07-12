<template>
  <div class="w-full">
    <AppHeader @headerHeight="(height) => headerHeight = height"/>
    <NuxtPage 
      class="nuxt-page min-h-screen bg-white !w-full"
      :style="{ paddingTop: `${headerHeight}px` }"
    />
    <AppFooter />
    <CookieConsent />
  </div>
</template>

<script setup>
const headerHeight = ref(0)

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    { link: "https://fonts.googleapis.com", rel: "preconnect" },
    { link: "https://fonts.gstatic.com", rel: "preconnect", crossorigin: true },
    { link: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap", rel: "stylesheet"},
  ],
})
</script>
