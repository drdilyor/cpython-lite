<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <error-loading-view :pending="contest.pending" :error="contest.error" :refresh="() => refreshContest()">
      <h1 class="text-4xl my-4">{{ info.title }}</h1>
      <div>{{ info.isRated ? 'Rated' : 'Unrated' }}</div>
      <div>Type: {{ info.type }}</div>
      <div>Duration:
        <ui-time :value="info.startTime" date time></ui-time>
        {{ ' - ' }}
        <ui-time :value="info.finishTime" date time></ui-time>
      </div>
      <div>Problems: {{ info.problemsCount }}</div>
      <div>Author(s): 
        <template v-for="(author, index) in info.authors">
        {{ index == 0 ? '' : ', ' }}
        <ui-user :user="author"></ui-user>
        </template>
      </div>
      <div v-if="info.status < 1" class="mt-2">
        <contest-registration>
          <template #default="{register, cancel, error, pending}">
            <ui-button class="mt-4" :disabled="pending" :outline="info.isRegistered" @click="registerOrCancel(register, cancel)">
              {{ info.isRegistered ? 'Registered' : 'Register' }}
            </ui-button>
            <ui-error v-if="error" :error="error" :refresh="() => registerOrCancel(register, cancel)"></ui-error>
          </template>
        </contest-registration>
      </div>

      <hr class="my-4">
      <div v-html="info.description"></div>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const contest = useContest()
const info = computed(() => contest.value.info)
fetchContest(+route.params.id, true).then(() => {})

const registerOrCancel = (register: () => Promise<void>, cancel: () => Promise<void>) => {
  if (!info.value.isRegistered) {
    register()
    .then(() => info.value.isRegistered = false)
  } else {
    cancel()
    .then(() => info.value.isRegistered = true)
  }
}

</script>