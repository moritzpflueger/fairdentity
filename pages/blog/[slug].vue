<template>
  <main class="mx-auto my-20">
    <h1 class="text-6xl my-10">{{ post.title }}</h1>
    <ContentDoc class="prose" />
  </main>
</template>

<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route}`, () => 
  queryContent('/blog')
    .where({ _path: route })
    .findOne()
)
</script>
