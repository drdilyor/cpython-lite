<template>
  <api-view :url="props.url" ref="view">
    <template v-slot="{data}">
      <slot
        :count="data.count as number"
        :total-count="data.total as number"
        :cur-page="curPage as number"
        :page-count="data.pagesCount as number"
        :list="data.data as any[]"
        @set-page="setPage"
      ></slot>
    </template>
  </api-view>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {type: String, required: true},
})
const view = ref(null)
const curPage = ref(0)
const getUrl = () => {
  return `${props.url}?page=${curPage.value}`
}
const setPage = (p: number) => {
  curPage.value = p
}
</script>