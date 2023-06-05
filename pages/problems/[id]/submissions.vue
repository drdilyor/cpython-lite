<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>
    <h1 v-if="problem && problem.id == +route.params.id" class="text-4xl my-4">{{ problem.id }}. {{ problem.title }}</h1>
    <ui-pagination v-if="submissions" :cur-page="page" :total-pages="submissions.pagesCount" @set-page="value => page = value"></ui-pagination>
    <error-loading-view :pending="pending || problemPending" :error="error || problemError" :refresh="() =>(refresh(), problemRefresh())">
      <submission-list :submissions="submissions.data"></submission-list>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const page = ref(1)

const {data: submissions, pending, error, refresh} = useAsyncData(
  () => $get<any>(`/attempts`, {
    query: {
      problem_id: route.params.id,
      page_size: 20,
      page: page.value,
    }
  }),
  {
    lazy: true,
    watch: [page],
  }
)

const {data: problem, pending: problemPending, error: problemError, refresh: problemRefresh} = useAsyncData(
  () => $get<any>(`/problems/${route.params.id}`),
  {lazy: true},
)

</script>