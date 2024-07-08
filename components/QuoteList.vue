<template>
  <section class="mx-auto max-w-4xl px-5 text-center">
    <Swiper
      class="flex"
      :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :navigation="{
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
      }"
      :loop="true"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide 
        v-for="quote in quotes" 
        :key="quote._path" 
        class="bg-white !h-auto"
      >
        <span class="flex !h-28 justify-center text-9xl font-bold text-yellow-400 italic leading-tight">"</span>
        <p class="text-3xl sm:text-4xl font-semibold px-5 sm:px-24">
          {{ quote.text }}
        </p>
        <div class="font-serif text-xl sm:text-2xl my-5 sm:my-10 px-32">
          {{ quote.author }}
        </div>
      </SwiperSlide>
      <!-- Custom Navigation Buttons -->
      <div class="swiper-button-next custom-button-next"></div>
      <div class="swiper-button-prev custom-button-prev"></div>        
    </Swiper>
  </section>  
</template>

<script setup>
const { data: quotes } = await useAsyncData('quotes', async () => {

  const fetchedQuotes = await queryContent('/quotes').find()
  return shuffleQuotes(fetchedQuotes)
})

function shuffleQuotes(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

</script>

<style scoped>
.custom-button-next, .custom-button-prev {
  cursor: pointer;
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  transform: translateY(-50%);
  @apply 
  bg-neutral-100 
    border 
    rounded 
    p-5 
    text-black
  ;
}

.custom-button-next::after, .custom-button-prev::after {
  @apply text-xl font-bold;
}
</style>