<template>
  <div>
    <button class="button is-primary" @click="increment">{{ count}}</button>
  </div>
</template>

<script setup>
const count = ref(0);
const increment = () => count.value++;
</script>
