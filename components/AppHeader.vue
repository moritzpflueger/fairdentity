<template>
  <header class="bg-yellow-400 p-5">
    <nav class="mx-auto max-w-6xl flex justify-between" role="navigation" aria-label="main navigation">
      <div class="navbar-brand pl-3">
        <NuxtLink to="/" class="navbar-item">
          <!-- <Logo /> insert Logo if available -->
          <h1 class="text-3xl font-bold whitespace-nowrap">
            ◉ fairdentity
          </h1>
        </NuxtLink>
      </div>

      <ul 
        class="
          flex
          absolute
          sm:relative
          top-20
          sm:top-0
          flex-col
          sm:flex-row
          py-32
          sm:py-0 
          items-center
          sm:items-center 
          left-0 
          h-[100dvh]
          sm:h-auto 
          w-full
          sm:w-auto 
          bg-yellow-400
          sm:bg-transparent 
          gap-10
          sm:gap-10 
          text-4xl
          sm:text-xl 
          font-semibold
        "
        :class="{'hidden sm:flex' : !showMenu}"
      >
        <li>
          <NuxtLink to="/blog" class="">
            Artikel
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/die-mission" class="">
            Mission
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/unterstuetzung" class="">
            Unterstützung
          </NuxtLink>
        </li>
      </ul>
      <button 
        @click="showMenu=!showMenu" 
        class="sm:hidden"
      >
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>    
  </header>
</template>

<script setup>
  import { watch } from 'vue'
  const route = useRoute()
  const showMenu = ref(false)

  watch(() => route.fullPath, () => {
    showMenu.value = false
  })

  // const navQuery = queryContent('/blog')

  // import { ref, watch } from 'vue'

  
  // const showDropdown = ref(false)
  // const menuItems = ref([])

  // async fetch () {
  //   const data = await fetch('/menuItems')
  //   this.menuItems = data.items
  // }

  // watch($route) => {
  //   this.showMenu = false
  //   this.showDropdown = false
  // }

  // const itemLink = (item) => {
  //   if (item.topic) {
  //     return '/tag/' + item.topic.slug
  //   }
  //   if (item.page) {
  //     return '/page/' + item.page.slug
  //   }
  //   if (item.url) {
  //     return '/' + item.url
  //   }
  //   return '/undefined'
  // }

  // const toggleMenu = () => {
  //   this.showMenu = !this.showMenu
  // }

  // const toggleDropdown = () => {
  //   this.showDropdown = !this.showDropdown
  // }
</script>
