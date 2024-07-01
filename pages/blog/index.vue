<template>
  <section class="">
    <h1 class="text-4xl text-center pt-20 pb-32 font-serif bg-neutral-100 bg-noise">
      Alle Artikel
    </h1>
    <ul class="grid grid-cols-3 gap-10 max-w-4xl mx-auto mb-20 -mt-20">
      <li v-for="post in posts" :key="post.slug" class="my-10">
        <NuxtLink :to="`${post._path}`">
          <img 
            :src="post.image.image" 
            alt="post.image.alt"
            class="object-cover object-center aspect-video" 
          />
          <div class="flex flex-wrap gap-3 my-5">
            <span v-for="tag in post.tags" class="underline decoration-yellow-400 decoration-8 font-bold whitespace-nowrap">
              {{ tag }}
            </span>            
          </div>          
          <h2 class="text-2xl font-bold my-5">{{ post.title }}</h2>
        </NuxtLink>
        <p class="line-clamp-5">{{ post.description }}</p>
      </li>
    </ul>    
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
)
</script>