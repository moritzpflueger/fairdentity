<template>
  <main class="px-5">
    <section class="py-20 mx-auto max-w-3xl">

      <div class="video-container">
        <iframe
          :src="embedUrl"
          frameborder="0"
          allowfullscreen
          class="responsive-iframe"
        ></iframe>
      </div>    

      <CategoryTags :categorySlugs="video.categories" />

      <h1 class="font-bold text-4xl sm:text-6xl my-5">{{ video.title }}</h1>
      <div class="text-xl sm:text-2xl font-serif my-5 sm:my-10">
        {{ video.description }}
      </div>

      <h2 class="text-3xl font-bold mt-20 mb-5">Weitere Videos</h2>
      <div class="grid sm:grid-cols-3 gap-5">
        <VideoTeaserListItem
          v-for="video in moreVideos"
          :key="video._path"
          :video="video"
        />
      </div>      
      
      <!-- <ContentDoc class="prose my-10 first-letter:float-left first-letter:text-[5.2rem] first-letter:leading-none first-letter:pr-3 first-letter:font-black first-letter:text-black" />       -->
    </section>
  </main>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const { data: video } = await useAsyncData(`video-${route.path}`, () => 
  queryContent('/videos')
    .where({ _path: route.path })
    .findOne()
)

const videoId = computed(() => {
  const url = new URL(video.value.videoUrl)
  return url.searchParams.get('v') || url.pathname.split('/').pop()
})

const embedUrl = computed(() => {
  return `https://www.youtube.com/embed/${videoId.value}`
})

const { data: moreVideos } = await useAsyncData('more-videos', () =>
  queryContent('/videos')
    .where({ _path: { $ne: `/videos/${slug}` } }) // exlude current video
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>