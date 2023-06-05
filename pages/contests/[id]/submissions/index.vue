<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <error-loading-view :pending="contest.pending || pending" :error="contest.error || error"
      :refresh="() => (refresh(), refreshContest())">
      <h1 class="text-4xl my-4">{{ contest.info.title }}</h1>
      <submission-list v-if="submissions.total" :submissions="submissions.data"></submission-list>
      <p v-else>No submissions.</p>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const user = useUser()

const contest = useContest()
fetchContest(+route.params.id)

const { data: submissions, pending, error, refresh } = useAsyncData(
  `/attempts?contest_id=${+route.params.id}`,
  () => $get<any>(`/attempts`, {
    query: {
      contest_id: +route.params.id,
      page_size: 100,
      username: user.user ? user.user.username : undefined,
    },
  }),
  { lazy: true },
)

</script>