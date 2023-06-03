<template>
  <slot v-bind="{register, cancel, pending, error}"></slot>
</template>

<script setup lang="ts">
const contest = useContest()

const pending = ref(false as boolean)
const error = ref(null as Error | null)

const register = async () => {
  if (pending.value) return
  try {
    pending.value = true
    await $post(`/contests/${contest.value.info.id}/registration`, {body: {}})
  } catch (e: any) {
    error.value = e
  } finally {
    pending.value = false
  }
}

const cancel = async () => {
  if (pending.value) return
  try {
    pending.value = true
    error.value = null
    await $post(`/contests/${contest.value.info.id}/cancelRegistration`, {body: {}})
  } catch (e: any) {
    error.value = e
  } finally {
    pending.value = false
  }
}

</script>