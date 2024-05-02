<template>
  <nuxt-layout :key="user.user ? user.user.username : '=anonymous'">
    <nuxt-loading-indicator></nuxt-loading-indicator>
    <nuxt-page :keepalive="{max: 5}"></nuxt-page>
  </nuxt-layout>
</template>

<script setup lang="ts">
const user = useUser()

onMounted(async () => {
  await fetchUser()
})
</script>
