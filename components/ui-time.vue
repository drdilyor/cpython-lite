<template>
  <span class="avoid-wrap">{{ props.dt.toLocaleDateString() }}</span>
  {{ ' ' }}
  <span class="avoid-wrap">{{ props.dt.toLocaleTimeString() }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  dt: {type: Date, required: true},
})
</script>

<style>
.avoid-wrap {
  display: inline-flex;
}
</style>
