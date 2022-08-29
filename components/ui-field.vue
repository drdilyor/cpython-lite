<template>
  <div class="field">
    <label class="label">{{ props.label }}</label>
    <div class="control" :class="controlClass">
      <slot></slot>
    </div>
    <p class="help is-danger" v-if="message">{{message}}</p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  label: {type: String, required: true},
  controlClass: {default: {}},
  message: {type: String, required: false},
})

</script>
