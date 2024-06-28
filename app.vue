<template>
  <div>
    <h1 class="text-6xl font-serif">Welcome to Fairdentity</h1>
    <p>
      Take a look at our <NuxtLink to="/blog">blog</NuxtLink>!
    </p>
    <NuxtPage />
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
