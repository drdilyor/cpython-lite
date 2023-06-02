<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <h1 class="text-4xl my-4">{{ contest.title }}</h1>
    <contest-problem-list :contest-id="+route.params.id"></contest-problem-list>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const contest = {
    "id": 271,
    "title": "CPython Intermediate Contest #9",
    "description": "<p>This is description</p>".repeat(3),
    "authors": [
        {
            "username": "The_Samurai",
            "ratingTitle": "Pretor"
        },
        {
            "username": "admin",
            "ratingTitle": "Master"
        }
    ],
    "status": 1,
    "startTime": "2023-05-30T20:10:00+05:00",
    "finishTime": "2023-05-31T00:00:00+05:00",
    "type": "Ball550",
    "category": 1,
    "categoryTitle": "CompetitiveProgramming",
    "isRated": true,
    "logo": null,
    "contestantsCount": 26,
    "registrantsCount": 39,
    "problemsCount": 10,
    "doubleRatingPurchased": false,
    "saveRatingPurchased": false,
    "isParticipated": false,
    "isRegistered": false,
    "solved": 0,
    "participationType": 1
}



</script>