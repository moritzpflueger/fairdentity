<template>
  <NuxtLink 
    :to="path" class="block bg-white shadow border rounded-sm overflow-hidden h-full p-3"
    :title="title"
  >
    <img 
      :src="imageUrl" 
      :alt="imageAlt" 
      class="object-cover object-center"
      :class="[
        { 'aspect-video border-b': layout === 'default' },
        { 'aspect-[21/29] p-3': layout === 'book' }
      ]"
    />
    <div class="p-3">
      <CategoryTags v-if="categories" :categorySlugs="categories" />
      <h2 
        class="text-2xl leading-tight tracking-tighter font-semibold line-clamp-3 font-josefin"
        :class="[
          { 'text text-lg': layout === 'book' }
        ]"
      >
        {{ title }}
      </h2>
      <p v-if="author" class="text-neutral-500">{{ author }}</p>
      <p v-if="description" class="line-clamp-5">{{ description }}</p>            
    </div>
  </NuxtLink>     
</template>

<script setup>
const props = defineProps({
  layout: {
    type: String,
    required: false,
    default: 'default'
  },
  path: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  categories: {
    type: Array,
    required: false
  }
})
</script>