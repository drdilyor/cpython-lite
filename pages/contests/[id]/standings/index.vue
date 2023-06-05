<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <error-loading-view :pending="contest.pending || pending" :error="contest.error || error" :refresh="() => (refresh(), refreshContest())">
      <h1 class="my-4 text-4xl">{{ contest.info.title }}</h1>
      <div class="overflow-x-auto">
        <ui-table v-slot="{table, thead, th, tr, td}">
          <table :class="table">
            <thead :class="thead" class="bg-primary-600 text-white">
              <tr>
                <th :class="th" class="w-14">Rank</th>
                <th :class="th" class="w-48">User</th>
                <th :class="th" class="w-16 text-center">Score</th>
                <th v-for="problem in contest.problems"
                  :class="th" class="w-14 text-center cursor-pointer hover:bg-primary-700"
                  @click="$router.push(`/contests/${+route.params.id}/problems/${problem.symbol}`)">
                  {{ problem.symbol }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in standings" :class="tr">
                <td :class="td" class="text-right">{{ user.rank }}</td>
                <td :class="td"><ui-user :user="user" class="w-44" limit-width></ui-user></td>
                <td :class="td" class="text-center">
                  <span class="font-bold text-primary-700">{{ user.points }}</span>
                  <span v-if="contest.type.has_penalty" class="text-red-700">({{ user.penalties }})</span>
                </td>
                <td v-for="problem in problemInfos(user)" :class="td" class="text-center">
                  <template v-if="problem">
                    <template v-if="contest.type.has_score">
                      <span class="font-bold text-green-700">{{ problem.points }}</span>
                      <span v-if="problem.attemptsCount" class="text-red-700">({{ problem.attemptsCount }})</span>
                    </template>
                    <span v-else class="font-bold" :class="problem.firstAcceptedTime ? 'text-green-700' : 'text-red-700'">
                      {{ (problem.firstAcceptedTime ? '+' : '-')
                       + (problem.attemptsCount || '') }}
                    </span>
                    <br>
                    <span v-if="problem.firstAcceptedTime" class="text-sm text-gray-700">
                      <ui-time :value="+new Date(problem.firstAcceptedTime) - +new Date(contest.info.startTime)" time utc></ui-time>
                    </span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </ui-table>
      </div>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const contest = useContest()
fetchContest(+route.params.id)

const {data: standings, pending, error, refresh} = useAsyncData(
  `/contests/${+route.params.id}/contestants`,
  () => $get<any>(`/contests/${+route.params.id}/contestants`),
  {lazy: true},
)

const problemInfos = (user: any) => {
  const symbols: string[] = contest.value.problems.map((problem: any) => problem.symbol)
  const res = new Array(contest.value.problems.length)
  for (let info of user.problemsInfo) {
    res[symbols.indexOf(info.problemSymbol)] = info
  }
  return res
}

</script>