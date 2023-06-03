<template>
  <template v-if="(error as Error).message.includes('Failed to fetch')">
    <p>
      Failed to fetch. 
      <ui-button v-if="refresh" @click="() => refresh!()">Refresh</ui-button>
    </p>
  </template>
  <template v-else>
    {{ showError(error) }}
  </template>
</template>

<script setup lang="ts">
const props = defineProps({
  error: { required: true },
  refresh: { type: Function, required: false },
})
</script>