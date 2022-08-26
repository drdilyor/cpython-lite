<template>
  <div>
    <api-view :url="`/problems/${$route.params.id}`">
      <template v-slot="{data: prob}">
        <div class="is-flex is-flex-direction-column is-align-items-center">
          <h1 class="is-size-3 mb-4">{{ prob.id }}. {{ prob.title}}</h1>
          <p class="mb-2">Author: {{ prob.authorUsername }}</p>
          <p class="mb-2">Time limit: {{ prob.timeLimit }}</p>
          <p class="mb-2">Memory: {{ prob.memoryLimit }} MiB</p>
          <p class="mb-2">Difficulty: {{ prob.difficultyTitle }}</p>
          <p class="mb-2 is-flex is-align-items-flex-start">
            Rating: <ui-rating :value="prob.rating"></ui-rating></p>
        </div>
        <div class="is-family-monospace" v-html="prob.body"></div>
        <h2 class="is-size-5 mb-4 mt-4 has-text-weight-bold">Input</h2>
        <div class="is-family-monospace" v-html="prob.inputData"></div>

        <h2 class="is-size-5 mb-4 mt-4 has-text-weight-bold">Output</h2>
        <div class="is-family-monospace" v-html="prob.outputData"></div>

        <h2 class="is-size-5 mb-4 mt-4 has-text-weight-bold">Sample tests</h2>
        <div class="samples" :class="{
          'has-many-children':
            prob.sampleTests.length >= 2 &&
            prob.sampleTests.length <= 8
        }">
          <div class="is-size-5 has-text-weight-bold has-background-primary-light samples-label">Input</div>
          <div class="is-size-5 has-text-weight-bold has-background-primary-light samples-label">Output</div>
          <template v-for="sample in prob.sampleTests">
            <template v-for="io in [sample.input, sample.output]">
              <div class="outer">
                <button class="button">
                  <mdi name="copy"></mdi>
                </button>
                <div class="text">
                  {{ io }}
                </div>
              </div>
            </template>
          </template>
        </div>
      </template>
    </api-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import '~/assets/variables';

.samples {
  display: grid;
}
.samples .text {
  white-space: pre;
}
@media (min-width: $tablet) {
  .samples {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: $widescreen) {
  .samples.has-many-children {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: auto;
    grid-auto-flow: column;
  }
}
.samples > .samples-label {
  padding: 0.5em 1em;
  align-self: start;
}
.samples > .outer {
  position: relative;
  padding: 1em;
  min-height: 1em * 2 + 3em;
}
.samples > .outer:hover {
  background: $grey-lightest;
}
.samples .button {
  position: absolute;
  top: 1em;
  right: 1em;
  opacity: 0;
}
.samples > .outer:hover .button {
  opacity: 1;
  transition: opacity .3s;
}
</style>