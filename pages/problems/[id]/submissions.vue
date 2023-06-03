<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>
    <error-loading-view :pending="pending || problemPending" :error="error || problemError" :refresh="() =>(refresh(), problemRefresh())">
      <h1 class="text-4xl my-4">{{ problem.id }}. {{ problem.title }}</h1>
      <submission-list :submissions="submissions.data"></submission-list>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: submissions, pending, error, refresh} = useAsyncData(
  () => $get<any>(`/attempts`, {
    query: {
      problem_id: route.params.id,
    }
  }),
  {lazy: true}
)

const {data: problem, pending: problemPending, error: problemError, refresh: problemRefresh} = useAsyncData(
  () => $get<any>(`/problems/${route.params.id}`),
  {lazy: true},
)

</script>