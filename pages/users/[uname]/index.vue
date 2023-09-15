<template>
  <div class="my-4 flex items-start space-x-4">
    <div class="lg:w-1/3 space-y-4">
      <ui-list v-if="data">
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
  </div>
</template>

<script setup lang="ts">
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
  ]),
)

const info = computed(() => data.value?.[0])
const social = computed(() => data.value?.[1])
const techs = computed(() => data.value?.[2])
const edu = computed(() => data.value?.[3])
// intentionally misspelled because it hurts my pinky (on dvorka)
const skis = computed(() => data.value?.[4] as {[key: string]: number})

const problems = {
    "user": {
        "username": "drdilyor",
        "ratingTitle": "Magistr"
    },
    "rating": 64580,
    "solved": 323,
    "beginner": 57,
    "basic": 48,
    "normal": 76,
    "medium": 63,
    "advanced": 57,
    "hard": 20,
    "extremal": 2
}

</script>
