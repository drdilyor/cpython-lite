<template>
  <div v-if="user && !error" class="p-4">
    <div>
      <div class="max-h-96 overflow-hidden -mx-4 transition-all" :class="!coverLoaded ? 'h-96' : ''">
        <img :src="user.coverPhoto" alt="User banner" @onload="coverLoaded = true">
      </div>
      <div class="relative flex pb-4 md:px-16">
        <img class="w-36 md:w-52 shadow-lg bg-white border-4 border-white absolute bottom-4" :src="user.avatar" alt="User avatar">
        <div class="w-36 md:w-52 mr-4 shrink-0">
        </div>
        <div class="pt-2">
          <div class="text-xl">
            <template v-if="user.firstName || user.lastName">
              {{ user.firstName || '' }} {{ user.lastName || '' }}
            </template>
            <template v-else>
              {{ user.username }}
            </template>
          </div>
          <div class="text-gray-600" v-if="user.firstName || user.lastName">{{ user.username }}</div>
        </div>
      </div>
    </div>
    <ui-tabs buttoned :tabs="tabs" class="mb-4"></ui-tabs>
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

const tabs = [
  {url: `/users/${route.params.uname}`, text: 'Ratings'},
  {url: `/users/${route.params.uname}/blog`, text: 'Blog'},
]

const coverLoaded = ref(false)
</script>
