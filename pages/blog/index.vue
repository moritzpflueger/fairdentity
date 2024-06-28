<template>
  <h1>Blog</h1>
  <NuxtLink to="/">Back Home</NuxtLink>  
  <ul>
    <li v-for="post in posts" :key="post.slug">
      <nuxt-link :to="`${post._path}`">
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
)

</script>