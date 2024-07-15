<template>
  <section class="mx-auto max-w-4xl px-5 mt-20">
    <h2 class="text-3xl my-8 font-semibold font-josefin tracking-tighter">Empfohlene Beiträge aus dem Netz</h2>
    <ul>
      <li v-for="link in links" :key="link._path" class="my-5 border rounded-sm hover:bg-neutral-100">
        <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex flex-col items-start gap-2 p-5">
          <div class="flex items-center gap-5">
            <img :src="getFaviconUrl(link.url)" :alt="`${link.title} Favicon`" class="w-10 h-10" />
            <h3 class="text-2xl font-semibold hover:underline">
              {{ link.title }}
            </h3>              
          </div>
          <p class="line-clamp-3">{{ link.description }}</p>
          <div class="flex w-full justify-between items-center">
            <div class="w-full text-neutral-500 truncate">
              {{ link.url }}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 ml-2 -translate-y-1 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>                    
          </div>
        </a>
      </li>
    </ul>
  </section>  
</template>

<script setup>
const { data: links } = await useAsyncData('links', () => 
  queryContent('external-links')
    .find()
)

const getDomain = (url) => {
  return new URL(url).hostname
}

const getFaviconUrl = (url) => {
  const domain = getDomain(url)
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`
}
</script>