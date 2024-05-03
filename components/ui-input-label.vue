<template>
  <label :class="[
    breakpoint == 'sm' ? 'sm:text-right sm:py-1 sm:pr-2' :
    breakpoint == 'md' ? 'md:text-right md:py-1 md:pr-2' :
    breakpoint == 'lg' ? 'lg:text-right lg:py-1 lg:pr-2' : '',
    'w-32 mb-2']">
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
defineProps({
  breakpoint: { type: String as PropType<'sm' | 'md' | 'lg' | '-'>, default: 'sm' },
})

</script>