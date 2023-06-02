<template>
  <table class="w-full">
    <thead class="text-white" :class="status != 'running' ? 'bg-primary-600' : 'bg-secondary-600'">
      <td class="p-2">Name</td>
      <td class="p-2">Start</td>
      <td class="p-2"></td>
      <td class="p-2"></td>
    </thead>
    <tbody>
      <tr v-for="contest in contests">
        <td class="p-2">
          <nuxt-link :to="`/contests/${contest.id}`">{{ contest.title }}</nuxt-link>
        </td>
        <td class="p-2"><ui-time :value="contest.startTime" date time></ui-time></td>
        <td class="p-2">
          <span class="flex items-center">
            <ui-icon name="accountCheck" class="mr-1"></ui-icon>
            {{ contest.contestantsCount }}
          </span>
        </td>
        <td class="p-2">
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