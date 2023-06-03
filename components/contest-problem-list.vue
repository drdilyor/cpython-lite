<template>
  <table class="w-full">
    <thead class="bg-primary-600 text-white">
      <td class="p-2"></td>
      <td class="p-2">Problem</td>
      <td class="p-2"></td>
      <td v-if="!short" class="p-2"></td>
    </thead>
    <tbody>
      <tr v-for="problem in contest.problems">
        <td class="p-2">{{ problem.symbol }}</td>
        <td class="p-2">
          <nuxt-link :to="url(problem)">{{ problem.problem.title }}</nuxt-link>
        </td>
        <td class="p-2">
          <span class="flex">
            <ui-icon name="accountCheck"></ui-icon>
            {{ problem.solved }}
          </span>
        </td>
        <td v-if="!short"><ui-button light :url="url(problem)">Open</ui-button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

const props = defineProps({
  contestId: { type: Number, required: true },
  short: { type: Boolean, default: false },
})

const contest = useContest()

const url = (problem: any) => `/contests/${props.contestId}/problems/${problem.symbol}`

</script>