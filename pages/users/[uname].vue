<template>
  <div v-if="user && !error" class="p-4">
    <div>
      <img :src="user.coverPhoto" alt="">
      <div class="relative flex min-h-20 px-4 pb-4 md:px-8">
        <img class="w-36 md:w-52 shadow-lg bg-white border-4 border-white absolute bottom-4" :src="user.avatar" alt="">
        <div class="w-36 md:w-52 mr-4 shrink-0">
        </div>
        <div class="pt-2">
          <div class="text-xl">
            {{ user.firstName || '' }} {{ user.lastName || '' }}
          </div>
          <div class="text-gray-600">{{ user.username }}</div>
        </div>
      </div>
    </div>
    <div class="flex gap-2 my-2">
      <ui-button :url="`/users/${route.params.uname}`" :light="route.path != `/users/${route.params.uname}`">Ratings</ui-button>
      <ui-button :url="`/users/${route.params.uname}/blog`" :light="route.path != `/users/${route.params.uname}/blog`">Blog</ui-button>
    </div>
    <nuxt-page :user="user">
    </nuxt-page>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: user, pending, error, refresh} = useAsyncData(
  `/users/${route.params.uname}`,
  () => $get<any>(`/users/${route.params.uname}`),
)
</script>
