<template>
  <div class="flex items-stretch px-4 h-12 w-full" :class="!transparent ? 'shadow-md' : 'absolute text-white bg-transparent'">
    <!-- shadow from top to make text more visible -->
    <div v-if="transparent" class="absolute inset-0 h-[150%] opacity-50 bg-gradient-to-b from-black to-transparent"></div>

    <nuxt-link class="z-10 flex items-center px-2 hover:bg-gray-200 hover:text-black" to="/">
      <img class="h-8 w-8" src="@/assets/logo.png" alt="CPython lite logo">
      <span class="hidden sm:inline" :class="!transparent ? 'text-primary-500' : ''">CPython</span>
      <span class="hidden sm:inline relative bottom-1" :class="!transparent ? 'text-secondary-500' : ''">Lite</span>
    </nuxt-link>
    <nuxt-link class="z-10 flex items-center px-2 hover:bg-gray-200 hover:text-black" to="/problems">Problems</nuxt-link>
    <nuxt-link class="z-10 flex items-center px-2 hover:bg-gray-200 hover:text-black" to="/contests">Contests</nuxt-link>
    <div class="z-10 flex-1"></div>
    <div class="z-10 group relative">
      <div class="h-full flex items-center px-2 group-hover:bg-gray-200">
        <template v-if="user.pending">
          <div class="w-8 h-8 mr-2 bg-black opacity-10 rounded-full"></div>
          <div class="hidden sm:block w-16 h-4 bg-black opacity-10 rounded"></div>
        </template>
        <template v-else-if="user.user">
          <img class="w-8 h-8 rounded-full" :src="user.user.avatar" alt="User avatar">
          <div class="hidden sm:block ml-2 group-hover:text-black">{{ user.user.username }}</div>
        </template>
        <template v-else>
          <ui-button url="/login">Login</ui-button>
        </template>
      </div>
      <template v-if="user.user">
        <div class="absolute invisible right-0 min-w-full group-hover:visible flex flex-col items-stretch bg-white text-black shadow-md">
          <nuxt-link class="px-2 py-2 hover:bg-gray-200 cursor-pointer" :to="`/users/${user.user.username}`">Profile</nuxt-link>
          <div class="px-2 py-2 hover:bg-gray-200 cursor-pointer" @click="logoutUser">Logout</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useUser()
defineProps({
  transparent: { type: Boolean, default: false },
})
</script>
