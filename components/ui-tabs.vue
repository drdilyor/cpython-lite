<template>
  <div class="flex mb-4">
    <nuxt-link v-for="tab in tabs" :to="tab.url"
      class="p-2 border-b-2 hover:bg-gray-200"
      :class="[route.path == tab.url ? 'color-primary-700 border-b-primary-600' : 'border-b-transparent']">
      {{ tab.text }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  url: string
  text: string
  icon?: string
}

const props = defineProps({
  tabs: { type: Array<Tab>, required: true},
})

const route = useRoute()
</script>