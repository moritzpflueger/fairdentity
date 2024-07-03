<template>
  <header 
    class="bg-white p-5 fixed w-full z-50 transition-shadow duration-300 ease-in-out"
    :class="[
      { 'shadow !py-1': scrollY > 0 && !showMenu },
      { 'bg-yellow-400': showMenu }
    ]"
  >
    <nav class="mx-auto max-w-6xl flex justify-between" role="navigation" aria-label="main navigation">
      <div class="navbar-brand pl-3">
        <NuxtLink to="/" class="navbar-item">
          <!-- <Logo /> insert Logo if available -->
          <h1 class="text-3xl italic font-semibold whitespace-nowrap underline decoration-yellow-400">
            <span class="font-black">fair</span><span class="font-bold">de</span>ntity
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
          py-16
          sm:py-0 
          items-center
          sm:items-center 
          left-0 
          h-[calc(100dvh-5rem)]
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
          <NuxtLink to="/blog" class="hover:underline decoration-yellow-400 decoration-4">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/videos" class="hover:underline decoration-yellow-400 decoration-4">
            Videos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/books" class="hover:underline decoration-yellow-400 decoration-4">
            Bücher
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/unterstuetzung" class="hover:underline decoration-yellow-400 decoration-4">
            Unterstützung
          </NuxtLink>
        </li>
        <li v-if="showMenu" class="flex gap-2 text-xl font-normal mt-auto">
          <SocialLinks />
        </li>
        <li v-if="showMenu" class="text-xl font-normal">
          <NuxtLink to="/impressum" class="hover:underline decoration-yellow-400 decoration-4">
            Impressum
          </NuxtLink>
        </li>
      </ul>
      <button 
        @click="showMenu=!showMenu" 
        class="sm:hidden"
      >
        <svg v-if="showMenu" class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <svg v-else class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
  const scrollY = ref(0)

  const updateScroll = () => {
    scrollY.value = window.scrollY
  }

  watch(() => route.fullPath, () => {
    showMenu.value = false
  })

  onMounted(() => {
    window.addEventListener('scroll', updateScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })

</script>
