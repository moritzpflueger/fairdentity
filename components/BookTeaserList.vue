<template>
  <section class="mx-auto max-w-4xl px-5 mt-20 mb-32">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <h2 class="text-3xl font-bold sm:col-span-1 order-1">Empfohlene Bücher</h2>    
      <div class="sm:col-span-1 order-last sm:order-1">
        <NuxtLink 
          to="/books" 
          class="inline-flex float-right items-center gap-2 bg-neutral-100 py-2 pl-3 pr-2 border font-semibold"
        >
          Alle Bücher
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </NuxtLink>              
      </div>
      <div class="sm:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-5 order-2">
        <TeaserListItem
          v-for="book in books"
          :key="book._path"
          :title="book.title"
          :author="book.author"
          :path="book._path"
          :imageUrl="book.image.url"
          :imageAlt="book.image.alt"
          :layout="'book'"
        />      
      </div>        
    </div>
  </section>  
</template>

<script setup>

const { data: books } = await useAsyncData('books-teaser', () => 
  queryContent('/books')
    .sort({ date: -1 })
    .limit(4)
    .find()
)

</script>
