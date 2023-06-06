<template>
  <nuxt-layout :key="user.user ? user.user.username : '=anonymous'">
    <nuxt-page :keepalive="{max: 5}"></nuxt-page>
  </nuxt-layout>
</template>

<script setup lang="ts">
const user = useUser()

onMounted(async () => {
  await fetchUser()
})
</script>
