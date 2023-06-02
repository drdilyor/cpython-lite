<template>
  <div class="flex items-stretch px-4 h-12 shadow-md">
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/">
      <img src="@/assets/logo.png" alt="CPython lite logo" height="32" width="32">
      <span class="text-primary-500">CPython</span>
      <span class="text-secondary-500 relative bottom-1">Lite</span>
    </nuxt-link>
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/problems">Problems</nuxt-link>
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/contests">Contests</nuxt-link>
    <div class="flex-1"></div>
    <div class="flex items-center px-2 hover:bg-gray-200">
      <template v-if="user.pending">
        <div class="w-8 h-8 mr-2 bg-black opacity-10 rounded-full"></div>
        <div class="w-16 h-4 bg-black opacity-10 rounded"></div>
      </template>
      <template v-else-if="user.user">
        <img class="w-8 h-8 mr-2 rounded-full" :src="user.user.avatar" alt="User avatar">
        <div>{{ user.user.username }}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useUser()
</script>