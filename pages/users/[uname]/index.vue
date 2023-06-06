<template>
  <ui-list v-if="data" class="my-4">
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
  ]),
)

const info = computed(() => data.value?.[0])
const social = computed(() => data.value?.[1])
const techs = computed(() => data.value?.[2])
const edu = computed(() => data.value?.[3])

</script>