<template>
  <div class="w-full">
    <AppHeader />
    <NuxtPage class="min-h-screen" />
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
