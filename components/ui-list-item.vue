<template>
  <div class="flex items-start py-2 px-4">
    <ui-icon v-if="icon" :name="icon"
      class="mr-4 mt-3"></ui-icon>
    <div>
      <slot></slot>
      <div v-if="under" class="text-sm text-opacity-60 text-black">{{ under }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, required: false },
  under: { type: String, required: false },
})
</script>