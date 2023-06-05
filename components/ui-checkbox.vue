<template>
  <input :id="id" type="checkbox" :value="modelValue" @input="event => $emit('update:modelValue', (event.target as HTMLInputElement).checked)"
    class="relative bg-transparent appearance-none w-5 h-5 cursor-pointer
      before:absolute before:inline-block before:w-5 before:h-5 before:rounded before:border-2
      after:block after:absolute after:left-1.5 after:top-0.5 after:w-2 after:h-3
      after:border-b-2 after:border-r-2 after:border-white"
    :class="!modelValue ?
      'before:bg-white before:border-gray-500 before:hover:border-gray-700 before:active:border-gray-700 after:opacity-0 after:rotate-0' :
      'before:border-primary-600 before:bg-primary-600 before:after:opacity-100 after:rotate-45 after:transition-all'">
</template>

<script setup lang="ts">
defineProps({modelValue: Boolean, id: String})
defineEmits({'update:modelValue': Boolean})
</script>