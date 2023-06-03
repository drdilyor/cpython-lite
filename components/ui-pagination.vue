<template>
  <ul class="flex justify-center space-x-2 my-2">
    <li
      v-for="page in showPages"
      class="py-1 px-2 border-2 rounded cursor-pointer"
      :class="page != props.curPage
        ? 'border-gray-200 hover:border-gray-300'
        : 'border-transparent bg-primary-600 hover:bg-primary-700 text-white' "
      :aria-label="`Goto page ${page}`"
      @click.prevent="page == props.curPage ? 0 :  $emit('setPage', page)">
      {{ page }}
    </li>
  </ul>
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