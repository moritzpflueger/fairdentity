<template>
  <div id="hero-text" class="text-center">
    <h1 class="text-4xl sm:text-6xl font-light text-center mb-10" >
      <div class="text-3xl sm:text-5xl">Die Zeit <span class="whitespace-nowrap">ist reif für</span> </div>
      <span id="typed-text" class="italic tracking-tighter font-black underline decoration-yellow-400">
      </span>
      <!-- Für transparente Identität &
      faire Abstammung. -->
      <!-- Transparente Herkunft & faire Identität. -->
    </h1>
    <h2 class="text-xl sm:text-3xl mb-8 font-normal font-serif">
      ein Blog für <span class="">Abstammungsfragen</span> aller Art.
    </h2>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Typed from 'typed.js'

let typed

onMounted(() => {
  typed = new Typed('#typed-text', {
    strings: ["ehrliche Abstammung.", "transparente Kommunikation.", "faire Identität."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true,  
  })
})

onUnmounted(() => {
  typed.destroy()
})
</script>

<style scoped>
#hero-text {
  font-size: 2rem; /* Adjust as needed */
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  font-family: 'Josefin Sans', serif !important;
}
</style>
