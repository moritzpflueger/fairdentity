<template>
  <a v-for="link in settings?.social_links" :key="link.url" :href="link.url" class="block">
    <svg :id="'icon-' + link.icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" class="w-10">
      <path :d="link.iconPath" />
    </svg>
  </a>      
</template>

<script setup>
const { data: settings } = await useAsyncData('settings', () =>
  queryContent('/settings')
    .only(['social_links'])
    .findOne()
)
</script>