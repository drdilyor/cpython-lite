<template>
  <div class="columns">
    <div class="column is-12">
      <div class="box">
        <practice-tabs></practice-tabs>
        <submit-inner></submit-inner>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
</script>
