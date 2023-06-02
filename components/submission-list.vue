<template>
  <table class="w-full">
    <thead class="bg-primary-600 text-white">
      <td class="p-2">ID</td>
      <td class="p-2">When</td>
      <td class="p-2">Who</td>
      <td class="p-2">Lang</td>
      <td class="p-2">Verdict</td>
      <td class="p-2">Time</td>
      <td class="p-2">Memory</td>
    </thead>
    <tbody>
      <tr v-for="submission in submissions">
        <td class="p-2">
          <nuxt-link :to="`/submissions/${submission.id}`">{{ submission.id }}</nuxt-link>
        </td>
        <td class="p-2"><ui-time :value="submission.created" date time seconds></ui-time></td>
        <td class="p-2"><ui-user :user="submission.user"></ui-user></td>
        <td class="p-2"><ui-language :lang="submission.lang"></ui-language></td>
        <td class="p-2"><submission-verdict :submission="submission"></submission-verdict></td>
        <td class="p-2 text-right">{{ submission.time }}ms</td>
        <td class="p-2 text-right">{{ submission.memory }}KB</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
defineProps({
  submissions: { type: Array<any>, required: true },
})
</script>