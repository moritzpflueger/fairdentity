<template>
  <section class="mx-auto max-w-4xl px-5 mb-10 -mt-12 relative">
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-10 ">
      <li 
        v-for="(post, index) in posts"
        :key="`item_${index}_${post._path}`"
      >
        <TeaserListItem
          :path="post._path"
          :imageUrl="post.image.url"
          :imageAlt="post.image.alt"
          :title="post.title"
          :description="post.description"
          :categories="post.categories"
        />
      </li>      
    </ul>
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
const { data: posts } = await useAsyncData('posts-teaser', () => 
  queryContent('blog')
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>
