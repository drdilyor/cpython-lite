<template>
  <NuxtLayout>
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-bold mb-4 mt-40">
        {{ error?.statusCode }}
      </h1>
      <p>Oops! There is an error</p>
      <p>{{ error?.statusMessage }}</p>
      <div class="mt-4 space-x-2">
        <ui-button @click="$router.go(-1)">Go back</ui-button>
        <ui-button outline to="/">Go home</ui-button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

</script>
