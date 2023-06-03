<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <error-loading-view :pending="contest.pending" :error="contest.error">
      <h1 class="text-4xl my-4">{{ contest.info.title }}</h1>
      <contest-problem-list :contest-id="+route.params.id"></contest-problem-list>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const contest = useContest()
fetchContest(+route.params.id).then(() => {})

</script>