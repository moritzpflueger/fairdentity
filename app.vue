<template>
  <div class="w-full">
    <AppHeader />
    <NuxtPage class="nuxt-page min-h-screen bg-white !w-full" />
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
})

const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
)
</script>

<style>
body {
  @apply bg-yellow-400;
}
</style>
