
<template>
  <div>
    Filtered by Category
    <h1>Posts in {{ category }}</h1>
    <div v-for="post in posts" :key="post.slug" class="mb-10">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <NuxtLink :to="post._path">Read more</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const category = route.params.category

const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog')
    .where({ 'categories': { $contains: category } })
    .only(['title', 'description', '_path'])
    .sort({ date: -1 })
    .find()
)
</script>
