<template>
  <ul class="flex flex-wrap mb-2">
    <li 
      v-for="category in categories" 
      :key="category.slug"
    >
      <NuxtLink 
        :to="`/blog/category/${category.slug}`"
        class="topic-list__item font-josefin tracking-tighter text-lg whitespace-nowrap"
      >
        {{ category.name }}
      </NuxtLink>      
    </li>
  </ul>  
</template>

<script setup>
const route = useRoute()

const props = defineProps({
  categorySlugs: {
    type: Array,
    required: true
  }
})

const { data: categories } = await useAsyncData(`category-${route}-${props.categorySlugs.toString()}`, () => 
  queryContent('/categories')
    .where({ slug: { $in: props.categorySlugs }})
    .only(['name', 'slug'])
    .find()
)

</script>

<style>
.topic-list__item {
  padding: 0 .2rem 0;
  margin-right: 5px;
  margin-bottom: 2px;
  color: black;
  position: relative;
  position: relative;
  overflow: hidden;
  text-decoration: none;  
  z-index: 1;
}

.topic-list__item::after {
  content: "";
  position: absolute;
  left: -2px;
  bottom: 2px;
  width: calc(100% + 1px);
  height: calc(100% - 22px);
  z-index: -1;
  transition: all 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
  @apply bg-yellow-300;
}

.topic-list__item:hover::after {
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 100%;
}  
</style>