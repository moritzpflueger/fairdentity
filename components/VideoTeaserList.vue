<template>
  <section class="mx-auto max-w-3xl px-5 mt-20 mb-32">
    <h2 class="text-3xl mb-5 font-bold">Neueste Videos</h2>    
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-10 ">
      <TeaserListItem
        v-for="video in videos"
        :key="video._path"
        :path="video._path"
        :imageUrl="thumbnailUrl(video)"
        :imageAlt="video.title"
        :title="video.title"
      />      
    </div>
    <NuxtLink 
      to="/videos" class="flex items-center gap-2 float-right mt-5 bg-neutral-100 py-2 pl-3 pr-2 border font-semibold"
    >
      Alle Videos
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </NuxtLink>    
  </section>  
</template>

<script setup>

const { data: videos } = await useAsyncData('videos', () => 
  queryContent('/videos')
    .sort({ date: -1 })
    .limit(3)
    .find()
)

const videoId = (video) => {
  const url = new URL(video.videoUrl)
  return url.searchParams.get('v') || url.pathname.split('/').pop()
}

const thumbnailUrl = (video) => {
  return `https://img.youtube.com/vi/${videoId(video)}/hqdefault.jpg`
}

</script>
