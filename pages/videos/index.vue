<template>
  <section class="">
    <h1 class="text-4xl text-center pt-20 pb-28 font-serif bg-neutral-100 bg-noise">
      Alle Videos
    </h1>
    <ul class="px-5 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto pb-20 -mt-10">
      <li v-for="video in videos" :key="video._path" class="">
        <TeaserListItem 
          :imageUrl="thumbnailUrl(video)"
          :title="video.title"
          :path="video._path"
        />
      </li>
    </ul>    
  </section>
</template>

<script setup>
const { data: videos } = await useAsyncData('videos', () => 
  queryContent('/videos').find()
)

const videoId = (video) => {
  const url = new URL(video.videoUrl)
  return url.searchParams.get('v') || url.pathname.split('/').pop()
}

const thumbnailUrl = (video) => {
  return `https://img.youtube.com/vi/${videoId(video)}/hqdefault.jpg`
}
</script>