<template>
  <div class="columns">
    <div class="column is-12">
      <div class="box">
        <practice-tabs :problem-id="+$route.params.id"></practice-tabs>
        <submit-inner :key="+$route.params.id" :problem-id="+$route.params.id"></submit-inner>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
</script>
