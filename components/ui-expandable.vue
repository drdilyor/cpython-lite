<template>
  <slot name="activator" :toggle="toggle" :expanded="expanded"></slot>
  <slot name="default" :show="expanded"></slot>
</template>

<script setup lang="ts">
const expanded = ref(false)
const toggle = () => expanded.value = !expanded.value
</script>