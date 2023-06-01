<template>
  <ui-tabs :tabs="[
    { url: `/problems/${id}`, text: 'Problem' },
    { url: `/problems/${id}/submissions`, text: 'Submissions' },
    { url: `/problems/${id}/ranking`, text: 'Ranking' },
  ]"></ui-tabs>
</template>

<script setup lang="ts">
const props = defineProps({
  id: { type: Number, required: true },
})
</script>