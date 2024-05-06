<template>
  <nuxt-link v-if="link" :to="`/users/${user.username}`" :title="title()" :class="rootClass()">
    {{ user.username }}
  </nuxt-link>
  <span v-else :title="title()" :class="rootClass()">
    {{ user.username }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  user: { type: Object, required: true },
  limitWidth: { type: Boolean, default: false }, // remember to set the width from parent
  link: { type: Boolean, default: true }
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

const rootClass = () => [
  props.user.ratingTitle && 'font-bold ' + ratingColor[props.user.ratingTitle],
  props.limitWidth && 'block text-ellipsis overflow-hidden'
]
</script>