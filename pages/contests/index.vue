<template>
  <div class="p-4">
    <h1 class="text-4xl">Contests</h1>
    <error-loading-view :pending="runningPending" :error="runningError" :refresh="runningRefresh"
      noloading>
      <template v-if="running.total">
        <h2 class="text-2xl mt-4 mb-2">Heads up! Running contests</h2>
        <contest-list :contests="running.data" status="running"></contest-list>
      </template>
    </error-loading-view>

    <hr class="my-4">
    <h2 class="text-2xl mt-4 mb-2">Upcoming</h2>

    <error-loading-view :pending="upcomingPending" :error="upcomingError" :refresh="upcomingRefresh">
      <contest-list v-if="upcoming.total" :contests="upcoming" status="upcoming"></contest-list>
      <p v-else>No upcoming contests.</p>
    </error-loading-view>

    <hr class="my-4">
    <h2 class="text-2xl mt-4 mb-2">Archive</h2>

    <error-loading-view v-bind="{pending, error, refresh}">
      <contest-list v-if="past.count" :contests="past.data" status="past"></contest-list>
      <p v-else>No contests found.</p>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">

const { data: upcoming, pending: upcomingPending, error: upcomingError, refresh: upcomingRefresh } = useAsyncData(
  `/contests?status=-1`,
  () => $get<any>(`/contests?status=-1&page_size=50`),
  { lazy: true },
)
const { data: running, pending: runningPending, error: runningError, refresh: runningRefresh } = useAsyncData(
  `/contests?status=0`,
  () => $get<any>(`/contests?status=0&page_size=50`),
  { lazy: true },
)

const { data: past, pending, error, refresh } = useAsyncData(
  `/contests?status=1`,
  () => $get<any>(`/contests?status=1&page_size=20`),
  { lazy: true },
)

</script>