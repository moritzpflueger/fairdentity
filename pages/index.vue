<template>
  <main class="bg-white pb-20">
    <section class="py-28 px-16 bg-neutral-100 bg-noise">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <h1 class="text-4xl sm:text-6xl text-center mb-10">
            Die Zeit ist reif für <span class="font-black italic underline decoration-yellow-400 whitespace-nowrap">faire Identität.</span>
            <!-- Für transparente Identität &
            faire Abstammung. -->
            <!-- Transparente Herkunft & faire Identität. -->
          </h1>
          <h2 class="text-xl sm:text-3xl mb-8 font-serif">
            ein Blog für <span class="">Abstammungsfragen</span> aller Art.
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

    <PostTeaserList />
    <QuoteList />
    <VideoTeaserList />
    <ExternalLinksList />
  </main>
</template>