<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>
    <template v-if="problem && problem.id == +route.params.id">
      <h1 class="text-4xl my-4">{{ problem.id }}. {{ problem.title }}</h1>
      <div class="flex p-2 rounded border border-primary-800 bg-primary-50 text-primary-800">
        <ui-icon name="lightbulb"></ui-icon>
        <p class="flex-1">
          <strong>Hint: </strong>
          Click on the verdict to update it without refreshing the page.
        </p>
      </div>
    </template>

    <ui-pagination v-if="submissions" :cur-page="page" :total-pages="submissions.pagesCount" @set-page="value => page = value"></ui-pagination>
    <error-loading-view :pending="pending || problemPending" :error="error || problemError" :refresh="() =>(refresh(), problemRefresh())">
      <submission-list :submissions="submissions.data" @verdict-update="verdictUpdate"></submission-list>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const page = useQueryParam('page', 1)

const {data: submissions, pending, error, refresh} = useAsyncData(
  `/attempts?problem_id=${+route.params.id}`,
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

onActivated(() => refresh())

const {data: problem, pending: problemPending, error: problemError, refresh: problemRefresh} = useAsyncData(
  `/problems/${+route.params.id}`,
  () => $get<any>(`/problems/${+route.params.id}`),
  {lazy: true},
)

const verdictUpdate = async (submissionId: any) => {
  for (let i = 0; i < submissions.value.data.length; i++) {
    if (submissions.value.data[i].id == submissionId) {
      const res = await $get(`/attempts/${submissionId}`)
      if (submissions.value.data[i].id == submissionId) { // prevent updating changed submission
        submissions.value.data[i] = res
      }
    }
  }
}

</script>