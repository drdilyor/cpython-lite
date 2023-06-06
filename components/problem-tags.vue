<template>
  <span v-for="tag in problem.tags" :key="tag.id"
    class="inline-block border-2 rounded border-slate-500 py-1 px-2 mr-1 bg-slate-100">
    {{ tag.name }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  problem: { type: Object, required: true },
})
</script>