<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>

    <error-loading-view v-bind="{pending, error, refresh}">
      <problem-statement :problem="problem"></problem-statement>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: problem, pending, error, refresh} = useAsyncData(
  () => $get<any>(`/problems/${+route.params.id}`),
  {lazy: true},
)

</script>