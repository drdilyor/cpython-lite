<template>
  <nuxt-link :to="`/users/${user.username}`">{{ user.username }}</nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  user: { type: Object, required: true }
})
</script>