<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <template v-if="contest && submissions">
      <h1 class="text-4xl my-4">{{ contest.info.title }}</h1>
      <ui-pagination v-if="submissions.total" :cur-page="page" :total-pages="submissions.pagesCount" @set-page="value => page = value"></ui-pagination>
      <ui-expand-panel class="bg-gray-100" header="Filters" hide-header>
        <div class="flex items-center">
          <ui-checkbox id="all-submissions" v-model="all" class="mr-2"></ui-checkbox>
          <label for="all-submissions">All submissions</label>
        </div>
      </ui-expand-panel>
    </template>
    <error-loading-view :pending="contest.pending || pending" :error="contest.error || error"
      :refresh="() => (refresh(), refreshContest())">
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

const all = useQueryParam('allSubmissions', false)
const page = useQueryParam('page', 1)

const { data: submissions, pending, error, refresh } = useAsyncData(
  `/attempts?contest_id=${+route.params.id}`,
  () => $get<any>(`/attempts`, {
    query: {
      contest_id: +route.params.id,
      page_size: 20,
      page: page.value,
      username: !all.value && user.user ? user.user.username : undefined,
    },
  }),
  { lazy: true, watch: [all, page] },
)
watch(all, () => page.value = 1)

</script>