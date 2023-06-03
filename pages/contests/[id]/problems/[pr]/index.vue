<template>
  <div class="p-4">
    <contest-tabs :id="contestId"></contest-tabs>
    <error-loading-view :pending="contest.pending || pending" :error="contest.error || error">
        <problem-statement :problem="problem.problem" :symbol="problem.symbol"></problem-statement>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const contest = useContest()

const contestId = computed(() => +route.params.id)
const problemId = computed(() => route.params.pr)

fetchContest(contestId.value).then(() => {})

const {data: problem, pending, error, refresh} = useAsyncData(
    () => $get<any>(`/contests/${contestId.value}/problem?symbol=${problemId.value}`),
    { lazy: true },
)


</script>