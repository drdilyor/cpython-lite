<template>
  <template v-if="(error as Error).message.includes('Failed to fetch')">
    <slot name="network">
      <p>
        Network error.
        <ui-button v-if="refresh" @click="() => refresh!()">Refresh</ui-button>
      </p>
    </slot>
  </template>
  <template v-else>
    {{ showError(error as any) }}
  </template>
</template>

<script setup lang="ts">
const props = defineProps({
  error: { required: true },
  refresh: { type: Function, required: false },
})
</script>