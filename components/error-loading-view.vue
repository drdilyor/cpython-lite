<template>
  <template v-if="pending">
    <ui-loading v-if="!noloading"></ui-loading>
  </template>
  <template v-else-if="error">
    <template v-if="(error as Error).message.includes('Failed to fetch')">
      <p>
        Failed to fetch. 
        <ui-button v-if="refresh" @click="() => refresh!()">Refresh</ui-button>
      </p>
    </template>
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