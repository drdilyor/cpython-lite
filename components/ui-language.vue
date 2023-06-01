<template>
  <span class="rounded px-2 py-1 bg-gray-200">{{ langName[lang] }}</span>
</template>

<script lang="ts">
export const langName: {[k:string]: string} = {
  py: 'Python',
  cpp: 'C++',
  hs: 'Haskell',
  r: 'R',
  kt: 'Kotlin',
  c: 'C',
  php: 'PHP',
  cs: 'C#',
  js: 'JavaScript'
}

export default defineNuxtComponent({
  props: {
    lang: { type: String, required: true },
  },
  setup() {
    return {langName}
  }
})
</script>