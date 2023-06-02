<template>
  <div class="p-4">
    <contest-tabs :id="contestId"></contest-tabs>
    <problem-statement :problem="problem.problem" :symbol="problem.symbol"></problem-statement>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const contestId = computed(() => +route.params.id)

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
const problemId = computed(() => route.params.pr)

const problem = {
    "problem": {
        "id": 543,
        "difficultyTitle": "Beginner",
        "notSolved": 27,
        "solved": 121,
        "hasChecker": true,
        "attemptsCount": 398,
        "tags": [
            {
                "id": 14,
                "name": "Non standart"
            },
            {
                "id": 1,
                "name": "Simple"
            }
        ],
        "solutionKepcoinValue": 0,
        "hasSolution": false,
        "authorUsername": "admin",
        "likesCount": 0,
        "dislikesCount": 0,
        "sampleTests": [],
        "availableLanguages": [
            {
                "lang": "py",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "cpp",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "hs",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "r",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "kt",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "c",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "php",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "cs",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            },
            {
                "lang": "js",
                "timeLimit": null,
                "memoryLimit": null,
                "codeTemplate": null
            }
        ],
        "canViewSolution": false,
        "voteType": null,
        "translateDone": false,
        "timeLimit": 2000,
        "memoryLimit": 512,
        "title": "Stupid problem",
        "body": "<p>Submit code that doesn&#39;t display anything.</p>",
        "inputData": "<p>Nothing.</p>",
        "outputData": "<p>Nothing.</p>",
        "comment": "<p>Nothing.</p>",
        "codeTemplate": "",
        "difficulty": 1,
        "partialSolvable": false,
        "ogImage": "https://cpython.s3.amazonaws.com/media/images/problem-preview/543.webp",
        "image": null,
        "translateAuthor": null,
        "author": 207
    },
    "attemptsCount": 45,
    "solved": 25,
    "attemptUsersCount": 26,
    "isSolved": false,
    "isAttempted": false,
    "symbol": "A",
    "ball": 100
}


</script>