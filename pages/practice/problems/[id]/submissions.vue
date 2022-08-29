<template>
  <div class="columns">
    <div class="column is-12">
      <div class="box">
        <practice-tabs :problem-id="+$route.params.id"></practice-tabs>
        <submissions-inner key="all" :query="{problem_id: +$route.params.id}"></submissions-inner>
      </div>
    </div>
  </div>
</template>

<script>
</script>