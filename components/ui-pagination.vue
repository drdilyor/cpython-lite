<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list is-flex is-justify-content-center" style="margin-left: auto; margin-right: auto">
      <li v-for="page in showPages">
        <nuxt-link
          class="pagination-link"
          :class="{
            'is-current':
              page == props.curPage}"
          :aria-label="`Goto page ${page}`"
          @click="page == props.curPage ?0:  $emit('setPage', page)">
          {{ page }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineEmits({
  'setPage': Number,
})

const props = defineProps({
  curPage: {type: Number, required: true},
  totalPages: {type: Number, required: true},
})

const showPages = computed(() => {
  let res = [props.curPage]
  if (props.curPage != props.totalPages)
    res.push(props.totalPages)
  if (props.curPage != 1)
    res.push(1)

  for (let d = 2; props.curPage + d -1 < props.totalPages; d <<= 1) {
    res.push(props.curPage + d - 1)
  }
  for (let d= 2; props.curPage - d + 1 > 1; d <<= 1) {
    res.push(props.curPage - d + 1)
  }
  res.sort((a, b) => a - b)
  return res
})
</script>