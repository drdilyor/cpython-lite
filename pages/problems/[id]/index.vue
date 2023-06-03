<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>
    <error-loading-view v-bind="{pending, error, refresh}">
      <problem-statement :problem="problem"></problem-statement>
      <problem-submit
        :problem="problem"
        :submitUrl="`/problems/${+route.params.id}/submit`"
        @submit="onSubmitted"></problem-submit>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const {data: problem, pending, error, refresh} = useAsyncData(
  () => $get<any>(`/problems/${+route.params.id}`),
  {lazy: true},
)

const onSubmitted = ({}) => {
  router.push(`/problems/${+route.params.id}/submissions`)
}

</script>