<template>
  <div class="p-4">
    <h1 class="text-4xl">Contests</h1>
    <template v-if="running.length">
      <h2 class="text-2xl mt-4 mb-2">Heads up! Running contests</h2>
      <contest-list :contests="running" status="running"></contest-list>
    </template>

    <hr class="my-4">
    <h2 class="text-2xl mt-4 mb-2">Upcoming</h2>
    <contest-list v-if="upcoming.length" :contests="upcoming" status="upcoming"></contest-list>
    <p v-else>No upcoming contests.</p>

    <hr class="my-4">
    <h2 class="text-2xl mt-4 mb-2">Archive</h2>
    <contest-list v-if="past.count" :contests="past.data" status="past"></contest-list>
    <p v-else>No contests found.</p>

  </div>
</template>

<script setup lang="ts">
const upcoming = [
        {
            "id": 271,
            "title": "CPython Intermediate Contest #9",
            "description": "<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
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
        },
    ]

const running = upcoming
const past = 
{
    "count": 10,
    "total": 211,
    "pagesCount": 22,
    "data": [
        {
            "id": 271,
            "title": "CPython Intermediate Contest #9",
            "description": "<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
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
        },
        {
            "id": 259,
            "title": "HTML & CSS & JS | Contest",
            "description": "<p>Prizes:</p>\r\n\r\n<ol>\r\n\t<li>10$ + 100🟡</li>\r\n\t<li>5$ + 50🟡</li>\r\n\t<li>2.5$ + 25🟡</li>\r\n</ol>",
            "authors": [
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-29T20:00:00+05:00",
            "finishTime": "2023-05-29T23:00:00+05:00",
            "type": "ACM2H",
            "category": 2,
            "categoryTitle": "Technologies",
            "isRated": true,
            "logo": "https://cpython.s3.amazonaws.com/media/images/contest-logo/None_P5j86o2.jpg",
            "contestantsCount": 29,
            "registrantsCount": 77,
            "problemsCount": 9,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": true,
            "isRegistered": true,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 269,
            "title": "HTML & CSS & JS | Beta Contest",
            "description": "<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
            "authors": [
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-26T19:00:00+05:00",
            "finishTime": "2023-05-27T00:30:00+05:00",
            "type": "ACM2H",
            "category": 2,
            "categoryTitle": "Technologies",
            "isRated": false,
            "logo": "https://cpython.s3.amazonaws.com/media/images/contest-logo/None_LcV6H0Y.jpg",
            "contestantsCount": 14,
            "registrantsCount": 22,
            "problemsCount": 9,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": true,
            "isRegistered": true,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 267,
            "title": "CPython Not Beginner Contest #29 | The_Samurai & MDSPro",
            "description": "<p>CP Contest for beginners(not)/intermediate(800-2100).</p>\r\n\r\n<p>Prizes:</p>\r\n\r\n<ol>\r\n\t<li>100🟡</li>\r\n\t<li>50&nbsp;🟡</li>\r\n\t<li>30&nbsp;🟡</li>\r\n</ol>",
            "authors": [
                {
                    "username": "MDSPro",
                    "ratingTitle": "Master"
                },
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
            "startTime": "2023-05-24T20:00:00+05:00",
            "finishTime": "2023-05-25T00:00:00+05:00",
            "type": "ACM20M",
            "category": 1,
            "categoryTitle": "CompetitiveProgramming",
            "isRated": true,
            "logo": null,
            "contestantsCount": 26,
            "registrantsCount": 34,
            "problemsCount": 14,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": false,
            "isRegistered": false,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 265,
            "title": "Hack It | Training #2",
            "description": "<p>The ability to read someone else&#39;s solution and find errors is useful in CF rounds, and not only.</p>\r\n\r\n<p>I invite you to the&nbsp;practice contest, where you need to hack specially selected solutions to problems.</p>",
            "authors": [
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-23T12:00:00+05:00",
            "finishTime": "2023-05-24T19:30:00+05:00",
            "type": "ACM2H",
            "category": 7,
            "categoryTitle": "Training",
            "isRated": false,
            "logo": "https://cpython.s3.amazonaws.com/media/images/contest-logo/265_Yvw6qoP.jpg",
            "contestantsCount": 41,
            "registrantsCount": 50,
            "problemsCount": 12,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": false,
            "isRegistered": true,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 263,
            "title": "CPython Beginner Contest #28",
            "description": "<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
            "authors": [
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-21T19:35:00+05:00",
            "finishTime": "2023-05-21T23:35:00+05:00",
            "type": "ACM20M",
            "category": 6,
            "categoryTitle": "Mixed",
            "isRated": true,
            "logo": null,
            "contestantsCount": 25,
            "registrantsCount": 30,
            "problemsCount": 14,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": false,
            "isRegistered": false,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 264,
            "title": "SQL | Training",
            "description": "<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
            "authors": [
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-21T12:00:00+05:00",
            "finishTime": "2023-05-21T19:30:00+05:00",
            "type": "ACM2H",
            "category": 7,
            "categoryTitle": "Training",
            "isRated": false,
            "logo": "https://cpython.s3.amazonaws.com/media/images/contest-logo/264.jpg",
            "contestantsCount": 6,
            "registrantsCount": 12,
            "problemsCount": 17,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": false,
            "isRegistered": false,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 260,
            "title": "One Line #7",
            "description": "<ul>\r\n\t<li>One Liner</li>\r\n\t<li>Only Python</li>\r\n</ul>",
            "authors": [
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-20T20:00:00+05:00",
            "finishTime": "2023-05-20T23:00:00+05:00",
            "type": "Ball550",
            "category": 4,
            "categoryTitle": "NonStandart",
            "isRated": true,
            "logo": "https://cpython.s3.amazonaws.com/media/images/contest-logo/260_ue5LUfP.jpg",
            "contestantsCount": 25,
            "registrantsCount": 43,
            "problemsCount": 8,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": true,
            "isRegistered": true,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 258,
            "title": "CPython Intermediate Contest #8",
            "description": "<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
            "authors": [
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-18T19:25:00+05:00",
            "finishTime": "2023-05-18T23:25:00+05:00",
            "type": "ACM20M",
            "category": 1,
            "categoryTitle": "CompetitiveProgramming",
            "isRated": true,
            "logo": "https://cpython.s3.amazonaws.com/media/images/contest-logo/245_IkzcHkm.jpg",
            "contestantsCount": 29,
            "registrantsCount": 37,
            "problemsCount": 13,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": false,
            "isRegistered": false,
            "solved": 0,
            "participationType": 1
        },
        {
            "id": 257,
            "title": "CPython Beginner Contest #27",
            "description": "<p>CP contest for beginners(maybe no).</p>\r\n\r\n<p>Difficulty of problems - <strong>800-2400.</strong></p>",
            "authors": [
                {
                    "username": "Asadbek06",
                    "ratingTitle": "Ritor"
                },
                {
                    "username": "admin",
                    "ratingTitle": "Master"
                }
            ],
            "status": 1,
            "startTime": "2023-05-11T19:35:00+05:00",
            "finishTime": "2023-05-11T23:35:00+05:00",
            "type": "ACM20M",
            "category": 1,
            "categoryTitle": "CompetitiveProgramming",
            "isRated": true,
            "logo": "https://cpython.s3.amazonaws.com/media/images/contest-logo/245_IkzcHkm.jpg",
            "contestantsCount": 32,
            "registrantsCount": 36,
            "problemsCount": 14,
            "doubleRatingPurchased": false,
            "saveRatingPurchased": false,
            "isParticipated": false,
            "isRegistered": false,
            "solved": 0,
            "participationType": 1
        }
    ]
}

</script>