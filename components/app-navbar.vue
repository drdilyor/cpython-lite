<template>
  <div class="flex items-stretch px-4 h-12 shadow-md">
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/">
      <img src="@/assets/logo.png" alt="CPython lite logo" height="32" width="32">
      <span class="text-primary-500">CPython</span>
      <span class="text-secondary-500 relative bottom-1">Lite</span>
    </nuxt-link>
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/problems">Problems</nuxt-link>
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/contests">Contests</nuxt-link>
  </div>
</template>

<script setup lang="ts">

</script>