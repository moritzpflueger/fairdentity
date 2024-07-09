<template>
  <div class="">
    <h1 class="font-josefin relative px-5 text-4xl sm:text-6xl min-h-56 sm:min-h-64 font-black tracking-tighter" >
      Die Zeit ist reif für <br />
      <span id="typed-text"></span>
      <p class="text-xl sm:text-3xl my-8 pr-20 font-light tracking-normal font-sans">
        ein Blog für <span class="">Abstammungsfragen</span> <span class="whitespace-nowrap">aller Art</span>.
      </p>
    </h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Typed from 'typed.js'

let typed

onMounted(() => {
  typed = new Typed('#typed-text', {
    strings: [
      "<u class='decoration-yellow-300'>faire Identität.</u>",
      "<u class='decoration-yellow-300'>transparente Abstammung</u>.", 
      "<u class='decoration-yellow-300'>ehrliche Kommunikation.</u>", 
    ],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 500,
    loop: true,  
  })
})

onUnmounted(() => {
  typed.destroy()
})
</script>
