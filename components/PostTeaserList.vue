<template>
  <section class="mx-auto max-w-3xl -mt-12 px-5 mb-32">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-10 ">
      <TeaserListItem
        v-for="post in posts"
        :key="post._path"
        :path="post._path"
        :imageUrl="post.image.image"
        :imageAlt="post.image.alt"
        :title="post.title"
        :description="post.description"
      />      
    </div>
    <NuxtLink 
      to="/blog" class="flex items-center gap-2 float-right mt-5 bg-neutral-100 py-2 pl-3 pr-2 border font-semibold"
    >
      Alle Artikel
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </NuxtLink>
  </section>  
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>
