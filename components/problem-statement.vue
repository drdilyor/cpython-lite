<template>
  <h1 class="text-4xl my-4 flex items-center">
    {{ symbol || problem.id }}. {{ problem.title }}
    <ui-button v-if="upsolve" class="ml-2 text-base" :url="`/problems/${problem.id}`">Upsolve</ui-button>
  </h1>
  <ui-mathjax :body="problem.body"></ui-mathjax>

  <hr v-if="problem.inputData || problem.outputData" class="mt-4">
  <template v-if="problem.inputData">
    <h2 class="text-2xl mt-4 mb-2">Input</h2>
    <ui-mathjax :body="problem.inputData"></ui-mathjax>
  </template>
  <template v-if="problem.outputData">
    <h2 class="text-2xl mt-4 mb-2">Output</h2>
    <ui-mathjax :body="problem.outputData"></ui-mathjax>
  </template>

  <template v-for="(sample, index) in problem.sampleTests">
    <hr class="mt-4">
    <h2 class="text-2xl mt-4 mb-2">Sample input {{ index+1 }}</h2>
    <pre>{{ sample.input }}</pre>
    <h2 class="text-2xl mt-4 mb-2">Sample output {{ index+1 }}</h2>
    <pre>{{ sample.output }}</pre>
  </template>
  <hr class="mt-4 mb-2">
</template>

<script setup lang="ts">
const props = defineProps({
  problem: { type: Object, required: true },
  symbol: { type: String, required: false },
  upsolve: { type: Boolean, deafult: false },
})

</script>