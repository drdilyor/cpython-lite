<template>
  <nuxt-link :to="`/users/${user.username}`" :class="limitWidth && 'block text-ellipsis overflow-hidden'">
  {{ user.username }}</nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  user: { type: Object, required: true },
  limitWidth: { type: Boolean, default: false }, // remember to set the width from parent
})
</script>