<template>
  <section class="mx-auto max-w-3xl -mt-12 px-5 mb-20">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-10 ">
      <ul>
        <li
          v-for="item in items" 
          :key="item._path"        
        >
          <TeaserListItem :imageUrl="item" />          
        </li>
      </ul>
      <NuxtLink 
        :to="post._path" class="block bg-white p-2 rounded-lg border"
        v-for="post in items" :key="post._path"
      >
        <img 
          :src="post.image.url" 
          :alt="post.image.alt" 
          class="object-cover object-center aspect-video rounded-md"
        />
        <div class="">
          <h2 class="text-xl font-bold my-5">{{ post.title }}</h2>
          <p class="line-clamp-5">{{ post.description }}</p>            
        </div>
      </NuxtLink>         
    </div>
  </section>    
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>