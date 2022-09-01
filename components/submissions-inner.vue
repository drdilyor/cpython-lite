<template>
  <div>
    <ui-pagination
      v-if="!short"
      :cur-page="page"
      :total-pages="submissions ? submissions.pagesCount : 1"
      @set-page="v => page = v"></ui-pagination>
    <table v-if="submissions !== null" class="table is-fullwidth is-hoverable">
      <thead>
        <th>ID</th>
        <th>Submitted</th>
        <th v-if="!short">Language</th>
        <th v-if="!short">User</th>
        <th v-if="!short">Problem</th>
        <th>Verdict</th>
        <th v-if="!short" class="has-text-right">Time</th>
        <th v-if="!short" class="has-text-right">Memory</th>
        <th v-if="!short" class="has-text-right">Code size</th>
      </thead>
      <tbody>
        <tr v-for="s in submissions.data">
          <td><nuxt-link :to="`/practice/submissions/${s.id}`">
            {{ s.id }}</nuxt-link></td>
          <td>
            <span class="avoid-wrap">{{ new Date(s.created).toLocaleString([], {dateStyle: 'medium'}) }}</span>
            {{ ' ' }}
            <span class="avoid-wrap">{{ new Date(s.created).toLocaleString([], {timeStyle: 'short'}) }}</span>
          </td>
          <td v-if="!short"><span class="tag">{{ s.lang }}</span></td>
          <td v-if="!short">{{ s.user.username }}</td>
          <td v-if="!short"><nuxt-link :to="`/practice/problems/${s.problemId}`">
            {{ s.problemId }} {{ s.problemTitle }}</nuxt-link></td>
          <td><span class="tag" :class="verdictColor[s.verdict] ? verdictColor[s.verdict] : 'is-black'">
            {{ s.verdictTitle }}
            {{ showTest.includes(s.verdict) ? "#" + s.testCaseNumber : ''}}
          </span></td>
          <td v-if="!short" class="has-text-right">{{ s.time }} ms</td>
          <td v-if="!short" class="has-text-right">{{ s.memory }} KiB</td>
          <td v-if="!short" class="has-text-right">{{ s.sourceCodeSize }}</td>
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
  query: {type: Object, default: {}},
  short: {type: Boolean, default: false},
})
const page = ref(1);

const getUrlQuery = (opts: object) => Object.entries(opts)
  .map(kv => kv.join('=')).join('&')

const {data: submissions, error, pending, refresh} = useLazyFetch<Paginated<Submission>>(
  () => `${prefix}attempts?${getUrlQuery({...props.query, page: page.value})}`,
  {initialCache: false},
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

<style>
.avoid-wrap {
  display: inline-block;
}
</style>