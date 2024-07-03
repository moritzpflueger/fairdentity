<template>
  <section class="">
    <h1 class="px-5 text-4xl text-center pt-20 pb-32 font-serif bg-neutral-100 bg-noise">
      Alle Artikel
    </h1>
    <ul class="px-5 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-10 max-w-4xl mx-auto pb-20 -mt-10">
      <li v-for="post in posts" :key="post.slug" class="">
        <TeaserListItem
          :imageUrl="post.image.url"
          :title="post.title"
          :description="post.description"
          :path="post._path"
          :categories="post.categories"
        />
      </li>
    </ul>    
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
)
</script>