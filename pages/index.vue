<template>
  <main class="bg-pink-400">
    <section 
      class="py-32 px-16 " 
      style="
        background-image: url('https://dirtydishes-upload.s3.eu-central-1.amazonaws.com/uploads/fairdentity_banner_first_try_b38856e4e9.jpg'); 
        background-size: cover;
        background-position: bottom;
      "
    >
      <div class="mx-auto max-w-4xl">
        <div class="">
          <h1 class="text-6xl sm:text-8xl mb-10 font-bold text-yellow-400 underline decoration-pink-400">
            Die Zeit ist reif für faire Identität.
            <!-- Für transparente Identität &
            faire Abstammung. -->
            <!-- Transparente Herkunft & faire Identität. -->
          </h1>
          <h2 class="text-3xl mb-10 font-bold text-white">
            
            Fairdentity ist ein Blog für Abstammungsfragen aller Art.
          </h2>
          <!-- <NuxtLink 
            to="die-mission" 
            class="text-2xl p-3 px-4 text-white bg-pink-400 hover:bg-pink-500 rounded-lg font-bold"
          >
            DIE MISSION
          </NuxtLink> -->
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-3xl my-10">
      <div class="grid grid-cols-2 gap-10">
        <NuxtLink 
          :to="post._path" class="block bg-white aspect-square"
          v-for="post in posts" :key="post._path"
        >
          {{ post.title }}
        </NuxtLink>        
      </div>
    </section>
  </main>
</template>

<script setup>

const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog')
    .limit(3)
    .find()
)

</script>