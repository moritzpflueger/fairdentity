<template>
  <footer class="bg-yellow-400 p-4 min-h-96">
    <p class="font-semibold">
      &copy; {{ currentYear }} Fairdentity
    </p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
