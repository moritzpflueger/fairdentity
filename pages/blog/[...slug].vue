<template>
  <main class="">
    <section class="py-10 sm:py-20 px-5 mx-auto max-w-3xl">
      <img 
        :src="post.image.url" 
        :alt="post.image.alt" 
        class="w-full max-h-96 object-cover object-center"
      />
      <span class="text-right text-neutral-500 block mb-5">
        {{ post.image.caption }}
      </span>
      
      <CategoryTags :categorySlugs="post.categories" />
      
      <h1 class="font-bold font-josefin tracking-tighter text-4xl sm:text-6xl my-5 sm:my-10">{{ post.title }}</h1>
      <div class="mb-5">
        {{ postDate }} | {{ post.author }}
      </div>
      <div class="text-2xl font-serif my-5 sm:my-10">
        {{ post.description }}
      </div>
      <ContentDoc class="prose my-5 sm:my-10 first-letter:float-left first-letter:text-[5.2rem] first-letter:leading-none first-letter:pr-3 first-letter:font-black first-letter:text-black" />      
    </section>
    <section class="bg-neutral-100 bg-noise p-5 sm:p-10">
      <div class="mx-auto max-w-5xl">
        <div class="flex justify-between items-end sm:items-center mb-5">

          <h2 class="text-3xl font-bold">Das könnte dich auch interessieren</h2>
          <NuxtLink 
            to="/blog" class="flex items-center gap-2 bg-white py-2 pl-3 pr-2 border font-semibold whitespace-nowrap"
          >
            Alle Artikel
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </NuxtLink>              
        </div>
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <li v-for="post in morePosts" :key="post._path">
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
      </div>
    </section>  
  </main>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const postDate = computed(() => 
  new Date(post.value.date).toLocaleDateString('de-DE', { 
    day: '2-digit', month: '2-digit', year: 'numeric' 
  })
)

const { data: post } = await useAsyncData(`post-${route.path}`, () => 
  queryContent('blog')
    .where({ _path: route.path })
    .findOne()
)

const { data: morePosts } = await useAsyncData(`more-posts-${route.path}`, () =>
  queryContent('blog')
    .where({ _path: { $ne: `/blog/${slug}` } }) // exlude current video
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>
