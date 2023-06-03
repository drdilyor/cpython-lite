<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <error-loading-view :pending="contest.pending || pending" :error="contest.error || error" :refresh="() => (refresh(), refreshContest())">
      <h1 class="my-4 text-4xl">{{ contest.info.title }}</h1>
      <table class="w-full">
        <thead class="bg-primary-600 text-white">
          <td class="p-2 w-10">Rank</td>
          <td class="p-2">User</td>
          <td class="p-2 w-16 text-center">Score</td>
          <td v-for="problem in contest.problems" class="w-14 text-center">{{ problem.symbol }}</td>
        </thead>
        <tbody>
          <tr v-for="user in standings" class="hover:bg-gray-100">
            <td class="p-2 text-right">{{ user.rank }}</td>
            <td class="p-2"><ui-user :user="user"></ui-user></td>
            <td class="p-2 font-bold text-center text-primary-700">{{ user.points }}</td>
            <td v-for="problem in problemInfos(user)" class="text-center">
              <template v-if="problem">
                <span v-if="problem.points" class="font-bold text-green-700">{{ problem.points }}</span>
                <span v-if="problem.attemptsCount" class="text-red-700">({{ problem.attemptsCount }})</span>
                <br>
                <span v-if="problem.points" class="text-sm text-gray-700">
                  <ui-time :value="+new Date(problem.firstAcceptedTime) - +new Date(contest.info.startTime)" time utc></ui-time>
                </span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const contest = useContest()
fetchContest(+route.params.id)

const {data: standings, pending, error, refresh} = useAsyncData(
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