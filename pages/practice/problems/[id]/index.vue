<template>
  <div class="columns is-desktop">
    <div class="column is-two-thirds-desktop is-three-quarters-fullhd">
      <div class="box">
        <practice-tabs :problem-id="+$route.params.id"></practice-tabs>
        <template v-if="prob">
          <div class="is-flex is-flex-direction-column is-align-items-center">
            <h1 class="is-size-3 mb-4">{{ prob.id }}. {{ prob.title}}</h1>
            <p class="mb-2">Author: {{ prob.authorUsername }}</p>
            <p class="mb-2">Time limit: {{ prob.timeLimit }}</p>
            <p class="mb-2">Memory: {{ prob.memoryLimit }} MiB</p>
            <p class="mb-2">Difficulty: {{ prob.difficultyTitle }}</p>
            <p class="mb-2 is-flex is-align-items-flex-start">
              Rating: <ui-rating :value="prob.rating"></ui-rating></p>
          </div>
          <div><ui-mathjax :body="prob.body"></ui-mathjax></div>
          <h2 class="is-size-5 mb-4 mt-4 has-text-weight-bold">Input</h2>
          <div><ui-mathjax :body="prob.inputData"></ui-mathjax></div>

          <h2 class="is-size-5 mb-4 mt-4 has-text-weight-bold">Output</h2>
          <div><ui-mathjax :body="prob.outputData"></ui-mathjax></div>

          <h2 class="is-size-5 mb-4 mt-4 has-text-weight-bold">Sample tests</h2>
          <div class="samples" :class="{
            'has-many-children':
              prob.sampleTests.length >= 2 &&
              prob.sampleTests.length <= 8
          }">
            <div class="is-size-5 has-text-weight-bold has-background-primary-light has-text-primary-dark samples-label">Input</div>
            <div class="is-size-5 has-text-weight-bold has-background-primary-light has-text-primary-dark samples-label">Output</div>
            <template v-for="sample in prob.sampleTests">
              <template v-for="io in [sample.input, sample.output]">
                <div class="outer">
                  <button class="button" @click="copy(io)">
                    <mdi name="copy"></mdi>
                  </button>
                  <div class="text is-family-monospace">
                    {{ io }}
                  </div>
                </div>
              </template>
            </template>
          </div>
        </template>
        <api-view-pending v-else-if="pending"></api-view-pending>
        <api-view-error v-else></api-view-error>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <h2 class="is-size-3 has-text-centered mb-4">Problem tags</h2>
        <p v-if="prob" class="tags">
          <span v-for="tag in prob.tags" class="tag">{{ tag.name }}</span>
        </p>
      </div>
      <div v-if="auth.user" class="box">
        <h2 class="is-size-3 has-text-centered mb-4">Last submissions</h2>
        <api-view
          :url="`/attempts/?problem_id=${$route.params.id}&username=${auth.user.username}`"
          v-slot="{data: submissions}"
          >
          <submission-list short :list="submissions.data"></submission-list>
        </api-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuth} from '~/api/auth';
import {prefix} from '~/api';

const route = useRoute();
const auth = useAuth();

const {data: prob, pending, error} = useLazyFetch<any>(
  `${prefix}problems/${route.params.id}/`,
  {initialCache: false},
)

const copy = (text: string) => {
  navigator.clipboard.writeText(text)
  .then(() => {})
}
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
  .samples:not(.has-many-children) > .samples-label {
    &:nth-child(odd) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-child(even) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
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
.samples > .samples-label,
.samples > .outer {
  border-radius: 0.25em;
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
