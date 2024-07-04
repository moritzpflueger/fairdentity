
<template>
  <section class="">
    <div 
      class="pt-36 pb-28 bg-cover bg-center bg-no-repeat"
      :style="`background-image: url(${category.image.url})`"
    >
      <h1 
        class="font-josefin tracking-tighter text-4xl text-center font-bold py-5 underline decoration-8 decoration-yellow-400"
      >
        {{ category.name }}
      </h1>
      <p class="mx-auto max-w-2xl px-10 font-serif text-xl text-center">
        {{ category.description }}
      </p>
    </div>
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
const route = useRoute()
const { category: categorySlug } = route.params

const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog')
    .where({ 'categories': { $contains: categorySlug } })
    .only(['title', 'description', '_path', 'image', 'categories'])
    .sort({ date: -1 })
    .find()
)

const { data: category } = await useAsyncData(`category-${route}`, () => 
  queryContent('/categories')
    .where({ slug: { $eq: categorySlug }})
    .findOne()
)
</script>
