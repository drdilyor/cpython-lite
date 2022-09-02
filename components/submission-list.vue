<template>
  <p v-if="!list.length" class="has-text-centered">
    No submissions yet.
  </p>
  <table v-else class="table is-fullwidth is-hoverable">
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
      <tr v-for="s in list">
        <td><nuxt-link :to="`/practice/submissions/${s.id}`">
          {{ s.id }}</nuxt-link></td>
        <td>
          <ui-time :dt="new Date(s.created)"></ui-time>
        </td>
        <td v-if="!short"><span class="tag">{{ s.lang }}</span></td>
        <td v-if="!short">{{ s.user.username }}</td>
        <td v-if="!short"><nuxt-link :to="`/practice/problems/${s.problemId}`">
          {{ s.problemId }} {{ s.problemTitle }}</nuxt-link></td>
        <td><submission-verdict :submission="s"></submission-verdict></td>
        <td v-if="!short" class="has-text-right">{{ s.time }} ms</td>
        <td v-if="!short" class="has-text-right">{{ s.memory }} KiB</td>
        <td v-if="!short" class="has-text-right">{{ s.sourceCodeSize }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
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
  list: {type: Array<Submission>, required: true},
  short: {type: Boolean, default: false},
})
</script>