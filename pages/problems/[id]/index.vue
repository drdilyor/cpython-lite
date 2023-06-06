<template>
  <div class="lg:flex">
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
    <div class="p-4 lg:pl-0 lg:w-1/3 lg:max-w-md">
      <div v-if="route.query.contestId">
        <error-loading-view :pending="contest.pending" :error="contest.error" :refresh="refreshContest">
          <contest-problem-list v-if="contest" :contest-id="+route.query.contestId" short upsolve></contest-problem-list>
        </error-loading-view>
      </div>
      <div>
        <ui-list v-if="!pending && !error">
          <ui-list-item>
            <div class="flex flex-wrap gap-y-1 items-start">
              <problem-difficulty :problem="problem" class="mr-1"></problem-difficulty>
              <problem-tags :problem="problem"></problem-tags>
            </div>
          </ui-list-item>
          <ui-list-item under="Solved / unsolved count">
            {{ problem.solved }} / {{ problem.notSolved }}
          </ui-list-item>
          <ui-list-item under="Limits" v-if="problem.timeLimit && problem.memoryLimit">
            {{ (problem.timeLimit/1000).toFixed(1) }} s / {{ problem.memoryLimit }} MB
          </ui-list-item>
          <ui-list-item v-if="problem.availableLanguages.reduce((count, x) => count + !!(x.timeLimit) + !!(x.memoryLimit), 0)">
            <ui-table v-slot="{table, thead, th, tr, td}" light>
              <table :class="table">
                <thead :class="thead">
                  <tr>
                    <th :class="th" class="">Language</th>
                    <th :class="th" class="w-32">Specific limits</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="language in problem.availableLanguages" >
                    <tr v-if="language.timeLimit || language.memoryLimit" :class="tr">
                      <td :class="td"><ui-language :lang="language.lang"></ui-language></td>
                      <td :class="td">
                        {{ language.timeLimit ? (language.timeLimit/1000).toFixed(1) : '-' }} s / {{ language.memoryLimit || '-' }} MB</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </ui-table>
          </ui-list-item>
        </ui-list>
      </div>
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
