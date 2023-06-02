<template>
  <ui-tabs :tabs="[
    { url: `/contests/${id}`, text: 'Contest' },
    { url: `/contests/${id}/problems`, text: 'Problems' },
    { url: `/contests/${id}/submissions`, text: 'Submissions' },
    { url: `/contests/${id}/standings`, text: 'Standings' },
  ]"></ui-tabs>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, required: true },
})
</script>