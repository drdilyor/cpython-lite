<template>
  <p class="delayed-fade-in opacity-0" ref="root">Loading...</p>
</template>

<script setup lang="ts">
const displayDelay = 500
let timerId = -1
const root = ref(null as null | HTMLElement)

onMounted(() => {
  timerId = window.setTimeout(() => {
    root.value!.classList.remove('opacity-0')
    timerId = -1
  }, displayDelay)
})

onUnmounted(() => {
  if (timerId != -1)
    window.clearTimeout(timerId)
})
</script>

<style>
.delayed-fade-in {
  transition: opacity 200ms ease;
}
</style>
