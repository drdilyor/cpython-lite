<template>
  <div class="columns">
    <div class="column">
      <div class="box">
        <h1 class="is-size-3 has-text-centered mb-4">Submission</h1>
        <api-view :url="`/attempts/${$route.params.id}/`"
          v-slot="{data: submission}">
          <submission-list :list="[submission]"></submission-list>
          <h2 class="is-size-5 mb-2">Code</h2>
          <ui-copy-code
            class="source"
            :content="submission.sourceCode"></ui-copy-code>
        </api-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import "~/assets/variables.scss";

.source {
  background: $grey-lightest;
  padding: 1em;
  min-height: 1em * 2 + 3em;

  @media screen and (min-width: $desktop) {
    padding: 1em 2em;
  }
}
</style>
