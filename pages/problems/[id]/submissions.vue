<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>