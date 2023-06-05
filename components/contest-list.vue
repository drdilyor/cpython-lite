<template>
  <ui-table v-slot="{ table, thead, th, tr, td }">
    <table :class="table">
      <thead :class="[thead, status != 'running' ? 'bg-primary-600' : 'bg-secondary-600']">
        <tr>
          <th :class="th">Name</th>
          <th :class="th" class="w-28 md:w-40">Start</th>
          <th :class="th" class="w-16"></th>
          <th :class="th" class="w-36 hidden md:table-cell"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contest in contests" :class="tr">
          <td :class="td">
            <nuxt-link :to="`/contests/${contest.id}`" class="link">{{ contest.title }}</nuxt-link>
          </td>
          <td :class="td"><ui-time :value="contest.startTime" date time></ui-time></td>
          <td :class="td">
            <span class="flex items-center">
              <ui-icon name="accountCheck" class="mr-1"></ui-icon>
              {{ contest.contestantsCount }}
            </span>
          </td>
          <td :class="td" class="hidden md:table-cell">
            <template v-if="status == 'upcoming'">
              <ui-button>Register</ui-button>
            </template>
            <template v-else-if="status == 'past'">
              <ui-button :url="`/contests/${contest.id}/standings`" light>
                Standings
              </ui-button>
            </template>
            <template v-else>
              <ui-button :url="`/contests/${contest.id}`" secondary>
                Enter
              </ui-button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </ui-table>
</template>

<script setup lang="ts">
export interface Contest {
  id: number
  title: string
  description: string
  startTime: string,
  finishTime: string,
  authors: {ratingTitle: string, username: string}[]
  category: number
  categoryTitle: string
  contestantsCount: number
  isRated: boolean
  isRegistered: boolean
  isParticipated: boolean
  doubleRatingsPurchased?: boolean
  saveRatingsPurchased?: boolean
}

const props = defineProps({
  contests: { type: Array<Contest>, required: true },
  status: { type: String, required: true }
})
</script>