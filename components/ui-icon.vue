<template>
  <span class="inline-flex items-center">
    <svg :style="{width:size + 'px',height:size + 'px'}" viewBox="0 0 24 24">
      <path fill="currentColor" :d="icons[normalizedName]"></path>
    </svg>
  </span>
</template>

<script setup lang="ts">
import {
  mdiThumbUp,
  mdiThumbDown,
  mdiThumbsUpDown,
  mdiAccountCheck,
} from '@mdi/js'

const icons: { [k: string]: string } = {
  mdiThumbUp,
  mdiThumbDown,
  mdiThumbsUpDown,
  mdiAccountCheck,
}

const props = defineProps({
  name: { type: String, required: true },
  small: { type: Boolean, default: false },
})
const size = computed(() => props.small ? 16 : 24)
const normalizedName = computed(() => 'mdi' + props.name[0].toUpperCase() + props.name.slice(1))
</script>