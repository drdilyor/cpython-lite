<template>
  <ui-table v-slot="{table, thead, th, tr, td}">
    <table :class="table">
      <thead :class="thead">
        <tr>
          <th :class="th" class="w-12"></th>
          <th :class="th" class="">Problem</th>
          <th :class="th" class="w-16"></th>
          <th v-if="!short" :class="th" class="w-24"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="problem in contest.problems" :class="tr">
          <td :class="td">{{ problem.symbol }}</td>
          <td :class="td" class="link">
            <nuxt-link :to="url(problem)">{{ problem.problem.title }}</nuxt-link>
          </td>
          <td :class="td">
            <span class="flex">
              <ui-icon name="accountCheck"></ui-icon>
              {{ problem.solved }}
            </span>
          </td>
          <td v-if="!short" :class="td"><ui-button light :url="url(problem)">Open</ui-button></td>
        </tr>
      </tbody>
    </table>
  </ui-table>
</template>

<script setup lang="ts">

const props = defineProps({
  contestId: { type: Number, required: true },
  short: { type: Boolean, default: false },
  upsolve: { type: Boolean, default: false },
})

const contest = useContest()

const url = (problem: any) => !props.upsolve ?
  `/contests/${props.contestId}/problems/${problem.symbol}` :
  `/problems/${problem.problem.id}?contestId=${props.contestId}`


</script>