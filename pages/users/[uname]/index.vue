<template>
  <error-loading-view v-bind="{ pending, error, refresh }">
    <div class="my-4 lg:flex items-start">
      <div class="lg:w-1/3 lg:pr-4 space-y-4">
        <ui-list>
          <ui-list-item v-if="info.bio" icon="information" under="About">
            <div v-html="info.bio"></div>
          </ui-list-item>

          <ui-list-item v-if="info.location || info.region" icon="mapMarker" under="Location">
              <div>{{ info.region }} {{ info.region && info.location ? ',' : '' }} {{ info.location }}</div>
          </ui-list-item>

          <ui-list-item v-if="info.dateJoined" icon="calendar" under="Date joined">
            <div><ui-time :value="info.dateJoined" date></ui-time></div>
          </ui-list-item>

          <ui-list-item v-if="info.dateOfBirth" icon="calendarStar" under="Date of birth">
            <div><ui-time :value="info.dateJoined" date></ui-time></div>
          </ui-list-item>
        </ui-list>

        <ui-list v-if="skis">
          <ui-list-item v-for="(progress, ski) in skis">
            <!-- TODO: replace ski with real name, this are 'small' names -->
            <div class="mb-1">{{ ski }} - {{ progress }}%</div>
            <ui-progress-bar class="mb-2" :value="progress" :start="0" :end="100"></ui-progress-bar>
          </ui-list-item>
        </ui-list>
      </div>
      <div class="lg:w-2/3 mt-4 lg:mt-0 border rounded px-2 py-4">
        <div class="text-2xl mb-2 text-center">Problems</div>
        <div class="text-center mb-2 text-xl">Rating: {{ problems.rating }}</div>
        <div class="text-center mb-2 text-xl">Total: {{ problems.solved }}</div>
        <div class="lg:flex flex-wrap justify-center mt-4">
          <div class="flex mb-2 items-center justify-center mr-2" v-for="diff in difficulties">
            <div class="py-1 px-2 mr-1 rounded border-2 inline-block" :class="difficultyClass[diff.value]">{{ diff.name }}</div>
            x{{ (problems as any)[diff.name.toLowerCase()] }}
          </div>
        </div>
        <div class="text-2xl text-center mt-4 mb-2">Activity (last week)</div>
        <div class="text-center mb-2 text-xl">Total: {{ activity.solved }}</div>
        <div>
          <Line
            id="user-problems-activity"
            :data="activityChart"
            :options="{
              responsive: true,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                  beginAtZero: true,
                }
              },
              plugins: {
                legend: { display: false },
              },
            }"
          ></Line>
        </div>
      </div>
    </div>
  </error-loading-view>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { difficulties, difficultyClass } from '~/components/problem-difficulty.vue'
import '~/chart-util'
import { ChartData } from 'chart.js';
import { format } from '~/components/ui-time.vue';

const route = useRoute()

defineProps({
  user: { type: Object, required: true },
})

const {data, pending, error, refresh} = useAsyncData(
  `/users/${route.params.uname}?full`,
  () => Promise.all([
    $get<any>(`/users/${route.params.uname}/info`),
    $get<any>(`/users/${route.params.uname}/social`),
    $get<any>(`/users/${route.params.uname}/technologies`),
    $get<any>(`/users/${route.params.uname}/educations`),
    $get<any>(`/users/${route.params.uname}/skills`),
    $get<any>(`/problems-rating/${route.params.uname}`),
    $get<any>(`/problems-rating/${route.params.uname}/statistics-last-days`),
  ]),
)

const info = computed(() => data.value?.[0])
const social = computed(() => data.value?.[1])
const techs = computed(() => data.value?.[2])
const edu = computed(() => data.value?.[3])
// intentionally misspelled because it hurts my pinky (on dvorka)
const skis = computed(() => data.value?.[4] as {[key: string]: number})
const problems = computed(() => data.value?.[5])
const activity = computed(() => data.value?.[6])

const activityChart = computed(() => (<ChartData>{ // only for completion lmao
  labels: new Array(7).fill(0).map((_, i) => {
    const date = new Date(new Date().setDate(i - activity.value.series.length))
    return format(date, {date: true})
  }),
  datasets: [{
    label: "Solved",
    data: activity.value.series,
  }]
}) as any)

</script>
