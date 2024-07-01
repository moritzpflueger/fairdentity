<template>
  <section class="mx-auto max-w-3xl my-10 px-5 text-center">
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
        <p class="text-4xl font-semibold px-20">{{ quote.text }}</p>
        <div class="font-serif text-2xl my-10 px-20">{{ quote.author }}</div>
      </SwiperSlide>
      <!-- Custom Navigation Buttons -->
      <div class="swiper-button-next custom-button-next"></div>
      <div class="swiper-button-prev custom-button-prev"></div>        
    </Swiper>
  </section>  
</template>

<script setup>
const { data: quotes } = await useAsyncData('quotes', () => 
  queryContent('/quotes')
    .limit(3)
    .find()
)
</script>

<style>
.custom-button-next, .custom-button-prev {
  cursor: pointer;
  position: absolute;
  top: var(--swiper-navigation-top-offset, 100%);
  transform: translateY(-100%);
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