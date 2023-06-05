<template>
  <ui-table v-slot="{table, thead, th, tr, td}">
    <table :class="table" class="min-w-[50rem]">
      <thead :class="thead">
        <th :class="th" class="w-20">ID</th>
        <th :class="th">When</th>
        <th :class="th" class="w-48 lg:w-64">Who</th>
        <th :class="th" class="w-32">Lang</th>
        <th :class="th" class="w-20">Verdict</th>
        <th :class="th" class="w-24">Time</th>
        <th :class="th" class="w-24">Memory</th>
      </thead>
      <tbody>
        <tr v-for="submission in submissions" :class="tr">
          <td :class="td">
            <nuxt-link v-if="user.user.is_superuser || user.user.username == submission.user.username" :to="`/submissions/${submission.id}`">
              {{ submission.id }}
            </nuxt-link>
            <template v-else>{{ submission.id }}</template>
          </td>
          <td :class="td"><ui-time :value="submission.created" date time seconds></ui-time></td>
          <td :class="td"><ui-user :user="submission.user" limit-width class="w-44 lg:w-60"></ui-user></td>
          <td :class="td"><ui-language :lang="submission.lang"></ui-language></td>
          <td :class="td"><submission-verdict :submission="submission"></submission-verdict></td>
          <td :class="td" class="text-right">{{ submission.time }}ms</td>
          <td :class="td" class="text-right">{{ submission.memory }}KB</td>
        </tr>
      </tbody>
    </table>
  </ui-table>
</template>
<script setup lang="ts">
defineProps({
  submissions: { type: Array<any>, required: true },
})

const user = useUser()
</script>