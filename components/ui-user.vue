<template>
  <nuxt-link :to="`/users/${user.username}`" :title="title()"
  :class="[user.ratingTitle && 'font-bold ' + ratingColor[user.ratingTitle], limitWidth && 'block text-ellipsis overflow-hidden']">
    {{ user.username }}
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  user: { type: Object, required: true },
  limitWidth: { type: Boolean, default: false }, // remember to set the width from parent
})
// neofit - ritor - liktor - legat - master - magistr - pretor valar
const ratingColor: {[k: string]: string} = {
  'Neofit': 'text-gray-500',
  'Ritor': 'text-green-700',
  'Liktor': 'text-cyan-600',
  'Legat': 'text-blue-700',
  'Master': 'text-fuchsia-700',
  'Magistr': 'text-yellow-600',
  'Pretor': 'text-red-600',
  'Archon': 'text-red-600',
  'Mayar': 'text-red-600 first-letter:text-black',
  'Malik': 'text-red-600 first-letter:text-black',
  'Valar': 'text-red-600 first-letter:text-black',
}

const title = () => props.user.ratingTitle && `${props.user.ratingTitle} ${props.user.username}`
</script>