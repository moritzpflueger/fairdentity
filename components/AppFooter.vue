<template>
  <footer class="bg-yellow-400 bg-noise flex flex-col items-center gap-10 p-10">
    <ul class="flex flex-col md:flex-row justify-between w-full gap-5 sm:gap-20">
      <li class="">
        <ul>
          <li class="font-bold mb-1">Inhalte</li>
          <li>
            <NuxtLink to="/blog">Alle Artikel</Nuxtlink>
          </li>
          <li>
            <NuxtLink to="/videos">Alle empfohlenen Videos</Nuxtlink>
          </li>
          <li>
            <NuxtLink to="/books">Alle empfohlenen Bücher</Nuxtlink>
          </li>
        </ul>
      </li>
      <li class="">
        <ul>
          <li class="font-bold mb-1">Mitmachen</li>
          <li v-for="page in pages" :key="page._path">
            <NuxtLink :to="page._path">{{ page.title }}</Nuxtlink>
          </li>
        </ul>
      </li>
      <li class="">
        <ul>
          <li class="font-bold mb-1">Aktuelle Artikel</li>
          <li v-for="post in posts" :key="post._path">
            <NuxtLink :to="post._path">{{ post.title }}</Nuxtlink>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="flex flex-col sm:flex-row sm:items-center sm:gap-10 w-full">  
      <li class="flex gap-3 order-last sm:order-none mt-5 sm:mt-0">
        <SocialLinks />
      </li>
      <li>
        <NuxtLink to="/impressum">Impressum</Nuxtlink>
      </li>
      <li>
        <NuxtLink to="/datenschutzerklaerung">Datenschutzerklärung</Nuxtlink>
      </li>            
      <li class="sm:ml-auto font-semibold">
        &copy; {{ currentYear }} Fairdentity
      </li>
    </ul>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

// Function to filter only top-level pages
const isTopLevelPage = (path) => {
  return path.split('/').length === 2; // Only pages that have one slash (i.e., /page-name)
}

const { data: posts } = await useAsyncData('posts-footer', () => 
  queryContent('/blog')
    .only(['_path', 'title'])
    .limit(5)
    .find()
)

const { data: pages } = await useAsyncData('pages-footer', () => 
  queryContent('/')
    .where({ _path: { $not: { $in: ['/impressum', '/settings', '/datenschutzerklaerung'] } } })
    .only(['_path', 'title'])
    .find()
    .then((pages) => pages.filter((page) => isTopLevelPage(page._path)))
)
</script>
