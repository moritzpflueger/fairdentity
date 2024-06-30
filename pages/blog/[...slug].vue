<template>
  <main class="my-20 mx-auto max-w-3xl ">
    <img 
      :src="post.image.image" 
      :alt="post.image.alt" 
      class="w-full h-96 object-cover object-center"
    />
    <span class="text-right text-neutral-500 block mb-5">
      {{ post.image.caption }}
    </span>
    <div class="flex gap-3">
      <NuxtLink 
        v-for="category in post.categories" 
        :key="category.slug"
        :to="`/blog/category/${category.slug}`"
        class="underline decoration-yellow-400 decoration-8 font-bold"
      >
        {{ category.name }}
      </NuxtLink>
    </div>
    <h1 class="font-bold text-6xl my-10">{{ post.title }}</h1>
    <div class="mb-5">
      {{ postDate }} | {{ post.author }}
    </div>
    <div class="text-2xl font-serif my-10">
      {{ post.description }}
    </div>
    <ContentDoc class="prose my-10 first-letter:float-left first-letter:text-[5.2rem] first-letter:leading-none first-letter:pr-3 first-letter:font-black first-letter:text-black" />
  </main>
</template>

<script setup>
const route = useRoute()

const postDate = computed(() => 
  new Date(post.value.date).toLocaleDateString('de-DE', { 
    day: '2-digit', month: '2-digit', year: 'numeric' 
  })
)

const { data: post } = await useAsyncData(`post-${route}`, () => 
  queryContent('/blog')
    .where({ _path: route.path })
    .findOne()
)

const { data: categories } = await useAsyncData(`category-${route}`, () => 
  queryContent('/categories')
    .where({ slug: { $in: post.value.categories }})
    .find()
)

post.value.categories = categories
</script>
