<template>
  <span class="rounded px-2 py-1 bg-gray-200">{{ langFull }}</span>
</template>

<script lang="ts">

export default defineNuxtComponent({
  props: {
    langFull: { type: String, required: true },
  },
  setup(props) {
    return {langFull: props.langFull};
  }
})
</script>