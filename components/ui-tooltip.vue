<template>
  <span class="group/tooltip">
    <span class="absolute -mt-5 hidden group-hover/tooltip:inline-block px-1 text-sm rounded bg-black text-white">{{ label }}</span>
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
})
</script>