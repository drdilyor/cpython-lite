<template>
  <button v-if="!url" :class="classes" v-bind="$attrs">
    <slot></slot>
  </button>
  <nuxt-link v-else :to="url" :class="classes" v-bind="$attrs">
    <slot></slot>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  url: { type: String, required: false },
  light: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  secondary: { type: Boolean, default: false },
})
const classes = computed(() => {
  if (+props.light + +props.outline >= 2) console.error('ui-button: only at most one of button style can be provided')
  let res = 'inline-flex items-center px-4 py-1 rounded '
  if (props.outline) {
    res += 'border-2 ' + (!props.secondary ? 'border-primary-600 hover:bg-primary-100' : 'border-secondary-600 hover:bg-secondary-100') + ' '
  }
  else if (props.light) {
    res += 'hover:bg-gray-200 active:bg-gray-300 ' + (!props.secondary ? 'text-primary-700' : 'text-secondary-700') + ' '
  }
  else res += 'text-white ' + (!props.secondary ? 'bg-primary-600 hover:bg-primary-700' : 'bg-secondary-600 hover:bg-secondary-700') + ' '
  return res
})
</script>