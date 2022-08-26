<template>
  <span class="is-flex">
    <mdi v-for="icon in icons" :name="icon"></mdi>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {type: Number, required: true},
})

const icons = computed(() => {
  const res = [] as string[]
  for (let i = 1; i <= 5; i++) {
    res.push(i <= props.value ? 'star' : 'star-outline')
  }
  return res
})
</script>