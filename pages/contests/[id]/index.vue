<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <error-loading-view v-bind="{pending, error, refresh}">
      <h1 class="text-4xl my-4">{{ contest.title }}</h1>
      <div>{{ contest.isRated ? 'Rated' : 'Unrated' }}</div>
      <div>Type: {{ contest.type }}</div>
      <div>Duration:
        <ui-time :value="contest.startTime" date time></ui-time>
        {{ ' - ' }}
        <ui-time :value="contest.finishTime" date time></ui-time>
      </div>
      <div>Problems: {{ contest.problemsCount }}</div>
      <div>Author(s): 
        <template v-for="(author, index) in contest.authors">
        {{ index == 0 ? '' : ', ' }}
        <ui-user :user="author"></ui-user>
        </template>
      </div>
      <div class="mt-2">
        <ui-button v-if="!contest.isRegistered" @click="contest.isRegistered = true, $forceUpdate()">Register</ui-button>
        <ui-button v-else outline disabled>Registered</ui-button>
      </div>

      <hr class="my-4">
      <div v-html="contest.description"></div>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {data: contest, pending, error, refresh} = useAsyncData(
  () => $get<any>(`/contests/${route.params.id}`),
  {lazy: true}
)

</script>