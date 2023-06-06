<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <error-loading-view :pending="contest.pending || pending" :error="contest.error || error"
      :refresh="() => (refresh(), refreshContest())">
      <h1 class="text-4xl my-4">{{ contest.info.title }}</h1>
      <div class="flex items-center my-4">
        <ui-checkbox id="all-submissions" v-model="all" class="mr-2"></ui-checkbox>
        <label for="all-submissions">All submissions</label>
      </div>
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

const all = ref(false)

const { data: submissions, pending, error, refresh } = useAsyncData(
  `/attempts?contest_id=${+route.params.id}`,
  () => $get<any>(`/attempts`, {
    query: {
      contest_id: +route.params.id,
      page_size: 100,
      username: !all.value && user.user ? user.user.username : undefined,
    },
  }),
  { lazy: true, watch: [all] },
)

</script>