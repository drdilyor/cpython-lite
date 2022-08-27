<template>
  <div class="field">
    <label class="label">{{ props.label }}</label>
    <div class="control" :class="controlClass">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  label: {type: String, required: true},
  controlClass: {default: {}},
})

</script>