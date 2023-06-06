<template>
  <slot
    table="w-full table-fixed"
    :thead="!light ? 'bg-primary-600 text-white' : 'bg-gray-100'"
    th="p-2 font-normal text-left"
    tr="hover:bg-gray-100"
    td="p-2"
    ></slot>
</template>

<script setup lang="ts">
defineProps({
  light: { type: Boolean, default: false },
})
</script>