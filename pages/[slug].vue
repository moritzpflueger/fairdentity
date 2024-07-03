<template>
  <main class="bg-white px-5">
    <section class="mx-auto max-w-3xl py-20">
      <ContentDoc>
        <template v-slot="{ doc }">
          <article>
            <h1 class="font-bold text-6xl my-10">{{ doc.title }}</h1>
            <ContentRenderer class="prose" :value="doc" />
          </article>
        </template>
        <template #not-found>
          <div class="text-center">
            <h1 class="text-4xl">404</h1>
            <p>Page not found</p>
            <NuxtLink to="/">Back to home</NuxtLink>
          </div>
        </template>
      </ContentDoc>
    </section>
  </main>
</template>

<script setup>
// const route = useRoute()

// const { data: page } = await useAsyncData(`post-${route.path}`, () => 
//   queryContent('/')
//     .where({ _path: route.path })
//     .findOne()
// )
</script>