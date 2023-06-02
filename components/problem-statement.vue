<template>
  <h1 class="text-4xl my-4">{{ symbol || problem.id }}. {{ problem.title }}</h1>
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
  
  <div class="grid gap-y-2" style="grid-template-columns: auto 1fr">
    <label class="font-bold p-2 text-right" for="submit-lang">Language</label>
    <select class="max-w-2xl" name="submit-lang">
      <option v-for="lang in problem.availableLanguages" :value="lang.lang">{{ langName[lang.lang] }}</option>
    </select>
    <label class="font-bold p-2 text-right" for="submit-source">Source code</label>
    <textarea class="font-mono border-2" name="submit-source" rows="10"></textarea>
  </div>
</template>

<script setup lang="ts">
import { langName } from '@/components/ui-language.vue'

const props = defineProps({
  problem: { type: Object, required: true },
  symbol: { type: String, requride: false },
})

</script>