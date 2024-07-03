<template>
  <main class="">
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 sm:py-20 px-5 mx-auto max-w-5xl">
      <div class="col-span-1">
        <img 
          :src="book.image.url" 
          :alt="book.image.alt" 
          class="w-full max-h-[50dvh] object-contain object-left lg:object-right"
        />
        <span v-if="book.image.caption" class="text-neutral-500 block lg:text-right">
          {{ book.image.caption }}
        </span>        
      </div>
      <div class="col-span-1 lg:col-span-2 ">
        
        <CategoryTags :categorySlugs="book.categories" />
        
        <h1 class="font-bold text-4xl sm:text-6xl my-5 sm:my-10">{{ book.title }}</h1>
        <div class="text-xl">
          {{ book.author }}
        </div>

        <div class="text-2xl font-serif my-5 sm:my-10">
          {{ book.description }}
        </div>
        <ContentDoc class="prose my-5 sm:my-10" />              
      </div>
    </section>
    <section class="bg-neutral-100 bg-noise p-5 sm:p-10">
      <div class="mx-auto max-w-7xl">
        <div class="flex justify-between items-center mb-5">

          <h2 class="text-3xl font-bold">Weitere Bücher</h2>
          <NuxtLink 
            to="/books" class="flex items-center gap-2 bg-white py-2 pl-3 pr-2 border font-semibold"
          >
            Alle Bücher
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </NuxtLink>              
        </div>
        <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          <li v-for="book in moreBooks" :key="book._path">
            <TeaserListItem
              :path="book._path"
              :title="book.title"
              :author="book.author"
              :imageUrl="book.image.url"
              :imageAlt="book.image.alt"
              :layout="'book'"
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

const { data: book } = await useAsyncData(`book-${route.path}`, () => 
  queryContent('/books')
    .where({ _path: route.path })
    .findOne()
)

const { data: moreBooks } = await useAsyncData('more-books', () =>
  queryContent('/books')
    .where({ _path: { $ne: `/books/${slug}` } }) // exlude current video
    .sort({ date: -1 })
    .limit(5)
    .find()
)

</script>