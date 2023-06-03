<template>
  <template v-if="pending">
    <ui-loading v-if="!noloading"></ui-loading>
  </template>
  <template v-else-if="error">
    <ui-error :error="error" :refresh="refresh"></ui-error>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>

<script setup lang="ts">
const props = defineProps({
  pending: { type: Boolean, required: true },
  error: { required: true },
  refresh: { type: Function, required: false },
  noloading: { type: Boolean, defaultt: false },
})
</script>