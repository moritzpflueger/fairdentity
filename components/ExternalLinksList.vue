<template>
  <section class="mx-auto max-w-3xl px-5 mt-20">
    <div class="external-links">
      <h2 class="text-3xl my-10 font-bold">Empfohlene Beiträge aus dem Netz</h2>
      <ul>
        <li v-for="link in links" :key="link._path" class="my-5">
          <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-start gap-5 ">
            <img :src="getFaviconUrl(link.url)" :alt="`${link.title} Favicon`" class="" />
            <div>
              <h3 class="text-2xl font-semibold underline decoration-4 decoration-yellow-400">
                {{ link.title }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 ml-2 -translate-y-1 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>                    
              </h3>
              <p class="line-clamp-3">{{ link.description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>      
  </section>  
</template>

<script setup>
const { data: links } = await useAsyncData('links', () => 
  queryContent('/external-links')
    .find()
)

const getFaviconUrl = (url) => {
  const domain = new URL(url).hostname
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`
}
</script>