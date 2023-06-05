<template>
  <div class="lg:flex lg:flex-row-reverse">
    <div class="p-4 flex-1">
      <problem-tabs :id="+route.params.id"></problem-tabs>
      <error-loading-view v-bind="{pending, error, refresh}">
        <problem-statement :problem="problem"></problem-statement>
        <problem-submit
          :problem="problem"
          :submitUrl="`/problems/${+route.params.id}/submit`"
          @submit="onSubmitted"></problem-submit>
      </error-loading-view>
    </div>
    <div v-if="route.query.contestId" class="p-4 lg:pr-0 lg:w-1/3 lg:max-w-md">
      <error-loading-view :pending="contest.pending" :error="contest.error" :refresh="refreshContest">
        <contest-problem-list v-if="contest" :contest-id="+route.query.contestId" short upsolve></contest-problem-list>
      </error-loading-view>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const contest = useContest()
if (route.query.contestId)
  fetchContest(+route.query.contestId)

const {data: problem, pending, error, refresh} = useAsyncData(
  `problems/${+route.params.id}`,
  () => $get<any>(`/problems/${+route.params.id}`),
  {lazy: true},
)

const onSubmitted = ({}) => {
  router.push(`/problems/${+route.params.id}/submissions`)
}

</script>
