<template>
  <div class="outer">
    <button class="button" @click="copy(content)">
      <mdi name="copy"></mdi>
    </button>
    <div class="text is-family-monospace">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {type: String, required: true},
})

const copy = (text: string) => {
  navigator.clipboard.writeText(text)
  .then(() => {})
}
</script>

<style scoped>
.button {
  position: absolute;
  top: 1em;
  right: 1em;
  opacity: 0;
}
.outer {
  position: relative;
}
.outer:hover > .button {
  opacity: 1;
  transition: opacity .3s;
}
.text {
  white-space: pre;
}
</style>
