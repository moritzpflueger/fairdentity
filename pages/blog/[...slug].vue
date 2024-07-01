<template>
  <main class="">
    <section class="py-20 mx-auto max-w-3xl">
      <img 
        :src="post.image.image" 
        :alt="post.image.alt" 
        class="w-full h-96 object-cover object-center"
      />
      <span class="text-right text-neutral-500 block mb-5">
        {{ post.image.caption }}
      </span>
      
      <CategoryTags :categorySlugs="post.categories" />
      
      <h1 class="font-bold text-6xl my-10">{{ post.title }}</h1>
      <div class="mb-5">
        {{ postDate }} | {{ post.author }}
      </div>
      <div class="text-2xl font-serif my-10">
        {{ post.description }}
      </div>
      <ContentDoc class="prose my-10 first-letter:float-left first-letter:text-[5.2rem] first-letter:leading-none first-letter:pr-3 first-letter:font-black first-letter:text-black" />      
    </section>
  </main>
</template>

<script setup>
const route = useRoute()

const postDate = computed(() => 
  new Date(post.value.date).toLocaleDateString('de-DE', { 
    day: '2-digit', month: '2-digit', year: 'numeric' 
  })
)

const { data: post } = await useAsyncData(`post-${route.path}`, () => 
  queryContent('/blog')
    .where({ _path: route.path })
    .findOne()
)
</script>
