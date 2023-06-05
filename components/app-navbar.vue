<template>
  <div class="flex items-stretch px-4 h-12 shadow-md">
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/">
      <img class="h-8 w-8" src="@/assets/logo.png" alt="CPython lite logo">
      <span class="hidden sm:inline text-primary-500">CPython</span>
      <span class="hidden sm:inline relative bottom-1 text-secondary-500">Lite</span>
    </nuxt-link>
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/problems">Problems</nuxt-link>
    <nuxt-link class="flex items-center px-2 hover:bg-gray-200" to="/contests">Contests</nuxt-link>
    <div class="flex-1"></div>
    <div class="group relative">
      <div class="h-full flex items-center px-2 group-hover:bg-gray-200">
        <template v-if="user.pending">
          <div class="w-8 h-8 mr-2 bg-black opacity-10 rounded-full"></div>
          <div class="hidden sm:block w-16 h-4 bg-black opacity-10 rounded"></div>
        </template>
        <template v-else-if="user.user">
          <img class="w-8 h-8 rounded-full" :src="user.user.avatar" alt="User avatar">
          <div class="hidden sm:block ml-2">{{ user.user.username }}</div>
        </template>
        <template v-else>
          <ui-button url="/login">Login</ui-button>
        </template>
      </div>
      <template v-if="user.user">
        <div class="absolute invisible right-0 min-w-full group-hover:visible flex flex-col items-stretch bg-white shadow-md">
          <div class="px-2 py-2 hover:bg-gray-200 cursor-pointer" @click="logoutUser">Logout</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useUser()
</script>