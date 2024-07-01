<template>
  <NuxtLink 
    :to="path" class="block bg-whit border rounded-sm"
  >
    <img 
      :src="imageUrl" 
      :alt="imageAlt" 
      class="object-cover object-center aspect-video rounded-sm"
    />
    <div class="p-3">
      <h2 class="text-xl font-bold">{{ title }}</h2>
      <p class="line-clamp-5 mt-3">{{ description }}</p>            
    </div>
  </NuxtLink>     
</template>

<script setup>
const props = defineProps({
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
  description: {
    type: String,
    required: false
  }
})
</script>