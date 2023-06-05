<template>
  <ui-icon name="chevronDown" class="transition-transform" :class="{'rotate-180': expanded}"></ui-icon>
</template>

<script setup lang="ts">
defineProps({
  expanded: { type: Boolean, default: false },
})
</script>
