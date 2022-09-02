<template>
  <span class="tag has-text-white" :class="'has-background-' +difficultyColor[problem.difficulty]">
    {{ problem.difficultyTitle }}</span>
</template>

<script lang="ts">
const difficultyColor = [
  '',
  'info',
  'info-dark',
  'success',
  'success-dark',
  'warning-dark',
  'danger-dark',
  'black'
]

export default defineNuxtComponent({
  props: {
    problem: {type: Object, required: true},
  },
  setup() {
    return {difficultyColor}
  }
})
</script>