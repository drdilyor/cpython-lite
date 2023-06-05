<template>
  <nuxt-layout>
    <nuxt-page :keepalive="{max: 5}"></nuxt-page>
  </nuxt-layout>
</template>

<script setup lang="ts">
onMounted(async () => {
  await fetchUser()
})
</script>
