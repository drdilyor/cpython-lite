<template>
  <template v-if="buttoned">
    <div class="flex gap-2">
      <ui-button v-for="tab in tabs" :url="tab.url"
        :light="route.path != tab.url">
        {{ tab.text }}
      </ui-button>
    </div>
  </template>
  <template v-else>
    <div class="flex mb-4">
      <nuxt-link v-for="tab in tabs" :to="tab.url"
        class="p-2 border-b-2 hover:bg-gray-200"
        :class="[route.path == tab.url ? 'color-primary-700 border-b-primary-600' : 'border-b-transparent']">
        {{ tab.text }}
      </nuxt-link>
    </div>
  </template>
</template>

<script setup lang="ts">
interface Tab {
  url: string
  text: string
  icon?: string
}

const props = defineProps({
  tabs: { type: Array<Tab>, required: true },
  buttoned: { type: Boolean, default: false },
})

const route = useRoute()
</script>