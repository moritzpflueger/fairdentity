<template>
  <div class="">
    <img :src="thumbnailUrl" :alt="`Video Thumbnail ${video.title}`" class="aspect-video object-cover" />
    <h3 class="font-bold my-5 text-xl">{{ video.title }}</h3>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

const videoId = computed(() => {
  const url = new URL(props.video.videoUrl)
  return url.searchParams.get('v') || url.pathname.split('/').pop()
})

const thumbnailUrl = computed(() => {
  return `https://img.youtube.com/vi/${videoId.value}/hqdefault.jpg`
})
</script>