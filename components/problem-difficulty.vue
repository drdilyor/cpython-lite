<template>
  <span class="py-1 px-2 rounded border-2 inline-block" :class="difficultyClass[problem.difficulty]">
    {{ difficultyTitle[problem.difficulty] }}
  </span>
</template>

<script lang="ts">
export const difficulties = [
  { "value": 1, "name": "Beginner" },
  { "value": 2, "name": "Basic" },
  { "value": 3, "name": "Normal" },
  { "value": 4, "name": "Medium" },
  { "value": 5, "name": "Advanced" },
  { "value": 6, "name": "Hard" },
  { "value": 7, "name": "Extremal" },
]

const difficultyTitle = Object.fromEntries(difficulties.map(({ value, name }) => [value, name]))

export const difficultyClass: { [k: string]: string } = {
  1: 'bg-green-100 border-green-600',
  2: 'bg-cyan-100 border-cyan-600',
  3: 'bg-blue-100 border-blue-600',
  4: 'bg-violet-200 border-violet-600',
  5: 'bg-yellow-100 border-yellow-600',
  6: 'bg-red-100 border-red-600',
  7: 'bg-red-600 text-white border-black',
}

export default defineNuxtComponent({
  props: {
    problem: { type: Object, required: true },
  },
  setup() {
    return {difficultyClass, difficultyTitle}
  }
})
</script>
