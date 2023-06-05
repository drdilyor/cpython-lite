<template>
  <div v-if="data" class="my-2 py-4 space-y-4 border rounded">
    <div class="flex items-center px-4" v-if="info.bio">
      <ui-icon name="information" class="mr-4"></ui-icon>
      <div>
        <div v-html="info.bio"></div>
        <div class="text-sm text-black text-opacity-60">About</div>
      </div>
    </div>
    <div class="flex items-center px-4" v-if="info.location || info.region">
      <ui-icon name="mapMarker" class="mr-4"></ui-icon>
      <div>
        <div>{{ info.region }} {{ info.region && info.location ? ',' : '' }} {{ info.location }}</div>
        <div class="text-sm text-black text-opacity-60">Location</div>
      </div>
    </div>
    <div class="flex items-center px-4">
      <ui-icon name="calendar" class="mr-4"></ui-icon>
      <div>
        <div><ui-time :value="info.dateJoined" date></ui-time></div>
        <div class="text-sm text-black text-opacity-60">Date Joined</div>
      </div>
    </div>
    <div class="flex items-center px-4" v-if="info.dateOfBirth">
      <ui-icon name="calendarStar" class="mr-4"></ui-icon>
      <div>
        <div><ui-time :value="info.dateOfBirth" date></ui-time></div>
        <div class="text-sm text-black text-opacity-60">Date of birth</div>
      </div>
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
    $get(`/users/${route.params.uname}/info`),
    $get(`/users/${route.params.uname}/social`),
    $get(`/users/${route.params.uname}/technologies`),
    $get(`/users/${route.params.uname}/educations`),
  ]),
)

const info = computed(() => data.value?.[0])
const social = computed(() => data.value?.[1])
const techs = computed(() => data.value?.[2])
const edu = computed(() => data.value?.[3])

</script>