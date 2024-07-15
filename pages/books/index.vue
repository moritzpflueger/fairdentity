<template>
  <section class="">
    <h1 class="text-4xl text-center pt-20 pb-28 font-serif bg-neutral-100 bg-noise">
      Alle Bücher
    </h1>
    <ul class="px-5 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto pb-20 -mt-10">
      <li v-for="book in books" :key="book._path" class="">
        <TeaserListItem 
          :imageUrl="book.image.url"
          :imageAlt="book.image.alt"
          :title="book.title"
          :author="book.author"
          :path="book._path"
          :layout="'book'"
        />
      </li>
    </ul>    
  </section>
</template>

<script setup>
const { data: books } = await useAsyncData('books', () => 
  queryContent('books').find()
)
</script>