<template>
  <div class="flex items-stretch h-2 bg-primary-100 rounded">
    <!-- This is bad because it's rounded, it should ignore the rounded part -->
    <div class="bg-primary-600 rounded" :style="{'flex-grow': fraction}"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {type: Number, required: true},
  start: {type: Number, required: true},
  end: {type: Number, required: true},
})

const fraction = computed(() => (props.value - props.start) / (props.end - props.start))
</script>
