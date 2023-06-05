<template>
  <div class="p-4">
    <error-loading-view v-bind="{ pending, error, refresh}">
      <submission-list :submissions="[submission]"></submission-list>
      <pre class="p-2 font-mono bg-gray-50">{{ submission.sourceCode }}</pre>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: submission, pending, error, refresh} = useAsyncData(
  () =>$get(`/attempts/${+route.params.id}`),
  {lazy: true},
)
</script>