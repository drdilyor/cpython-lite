<template>
  <nuxt-layout>
    <nuxt-page></nuxt-page>
  </nuxt-layout>
</template>

<script setup lang="ts">
onMounted(async () => {
  await fetchUser()
})
</script>
