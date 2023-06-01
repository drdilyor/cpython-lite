<template>
  {{ display }}
</template>

<script setup lang="ts">
const props = defineProps({
  value: { type: [Date, String, Number], required: true },
  date: { type: Boolean, default: false },
  time: { type: Boolean, default: false },
  seconds: { type: Boolean, default: false },
})
const display = computed(() => {
  const date = new Date(props.value)
  let res = ''
  if (props.date) res += date.getFullYear() + '-' + date.getMonth().toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
  if (props.date && props.time) res += ' '
  if (props.time) res += date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0')
  if (props.seconds) res += ':' + date.getSeconds().toString().padStart(2, '0')
  return res
})
</script>