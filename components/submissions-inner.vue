<template>
  <div>
    <ui-pagination
      :cur-page="page"
      :total-pages="submissions ? submissions.pagesCount : 1"
      @set-page="v => page = v"></ui-pagination>
      <table v-if="submissions !== null" class="table is-fullwidth is-hoverable">
        <thead>
          <th>ID</th>
          <th>Submitted</th>
          <th>Language</th>
          <th>User</th>
          <th>Problem</th>
          <th>Verdict</th>
          <th class="has-text-right">Time</th>
          <th class="has-text-right">Memory</th>
          <th class="has-text-right">Code size</th>
        </thead>
        <tbody>
          <tr v-for="s in submissions.data">
            <td><nuxt-link :to="`/practice/submissions/${s.id}`">
              {{ s.id }}</nuxt-link></td>
            <td>{{ new Date(s.created).toLocaleString([], {dateStyle: 'medium', timeStyle: 'short'}) }}</td>
            <td><span class="tag">{{ s.lang }}</span></td>
            <td>{{ s.user.username }}</td>
            <td><nuxt-link :to="`/practice/problems/${s.problemId}`">
              {{ s.problemId }} {{ s.problemTitle }}</nuxt-link></td>
            <td><span class="tag" :class="verdictColor[s.verdict] ? verdictColor[s.verdict] : 'is-black'">
              {{ s.verdictTitle }}
              {{ showTest.includes(s.verdict) ? "#" + s.testCaseNumber : ''}}
            </span></td>
            <td class="has-text-right">{{ s.time }} ms</td>
            <td class="has-text-right">{{ s.memory }} KiB</td>
            <td class="has-text-right">{{ s.sourceCodeSize }}</td>
          </tr>
        </tbody>
      </table>
      <api-view-pending v-else-if="pending"></api-view-pending>
      <api-view-error v-else></api-view-error>
  </div>
</template>

<script setup lang="ts">
import { prefix, Paginated } from "~~/api"


interface Submission {
  id: number
  user: any
  team: any
  contestProblem: number | null
  problemId: number
  problemTitle: string
  verdictTitle: string
  verdict: number
  sourceCodeSize: number
  lang: 'py' | 'cpp'
  testCaseNumber: number
  time: number // milliseconds
  memory: number // kilobytes
  created: string
}

const props = defineProps({
  baseUrl: {type: String, required: true},
})
const page = ref(1);

const {data: submissions, error, pending} = useFetch<Paginated<Submission>>(
  () => `${prefix}${props.baseUrl}?page=${page.value}`
);
const verdictColor: any = {
  1: 'is-success',
  2: 'is-danger is-light',
  3: 'is-danger is-light',
  4: 'is-danger is-light',
  5: 'is-warning',
}
const showTest = [2, 3, 4]
</script>