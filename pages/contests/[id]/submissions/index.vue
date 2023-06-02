<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <h1 class="text-4xl my-4">{{ contest.title }}</h1>
    <submission-list :submissions="submissions.data"></submission-list>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const submissions = {
    "count": 20,
    "total": 296,
    "pagesCount": 15,
    "data": [
        {
            "id": 121116,
            "user": {
                "username": "aminjonshermatov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "D"
            },
            "problemId": 933,
            "problemTitle": "Ternary search",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 448,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 2,
            "time": 1,
            "memory": 1544,
            "balls": null,
            "created": "2023-05-30T23:58:12.412498+05:00"
        },
        {
            "id": 121113,
            "user": {
                "username": "aminjonshermatov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "D"
            },
            "problemId": 933,
            "problemTitle": "Ternary search",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 455,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 2,
            "time": 1,
            "memory": 1552,
            "balls": null,
            "created": "2023-05-30T23:54:01.291420+05:00"
        },
        {
            "id": 121110,
            "user": {
                "username": "Isometric1",
                "ratingTitle": "Ritor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "D"
            },
            "problemId": 933,
            "problemTitle": "Ternary search",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 65,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 8,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6664,
            "balls": null,
            "created": "2023-05-30T23:37:59.997362+05:00"
        },
        {
            "id": 121100,
            "user": {
                "username": "aminjonshermatov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "F1"
            },
            "problemId": 1425,
            "problemTitle": "Country Khorezmstan #1",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 1216,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 6,
            "time": 1510,
            "memory": 21700,
            "balls": null,
            "created": "2023-05-30T23:25:21.042725+05:00"
        },
        {
            "id": 121098,
            "user": {
                "username": "aminjonshermatov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "F1"
            },
            "problemId": 1425,
            "problemTitle": "Country Khorezmstan #1",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 1216,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 6,
            "time": 160,
            "memory": 4492,
            "balls": null,
            "created": "2023-05-30T23:25:01.095759+05:00"
        },
        {
            "id": 121094,
            "user": {
                "username": "aminjonshermatov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "F1"
            },
            "problemId": 1425,
            "problemTitle": "Country Khorezmstan #1",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 1216,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 6,
            "time": 150,
            "memory": 4412,
            "balls": null,
            "created": "2023-05-30T23:12:29.456461+05:00"
        },
        {
            "id": 121093,
            "user": {
                "username": "KhusanboySobirjonov",
                "ratingTitle": "Neofit"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "D"
            },
            "problemId": 933,
            "problemTitle": "Ternary search",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 19,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 2,
            "time": 10,
            "memory": 6468,
            "balls": null,
            "created": "2023-05-30T23:12:09.821281+05:00"
        },
        {
            "id": 121092,
            "user": {
                "username": "aminjonshermatov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "F1"
            },
            "problemId": 1425,
            "problemTitle": "Country Khorezmstan #1",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 1144,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 6,
            "time": 1,
            "memory": 1572,
            "balls": null,
            "created": "2023-05-30T23:09:28.777265+05:00"
        },
        {
            "id": 121091,
            "user": {
                "username": "KhusanboySobirjonov",
                "ratingTitle": "Neofit"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "C2"
            },
            "problemId": 458,
            "problemTitle": "Removed number #2",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 150,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 8,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6608,
            "balls": null,
            "created": "2023-05-30T23:07:17.349642+05:00"
        },
        {
            "id": 121090,
            "user": {
                "username": "aminjonshermatov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "F1"
            },
            "problemId": 1425,
            "problemTitle": "Country Khorezmstan #1",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 1160,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 6,
            "time": 1,
            "memory": 1576,
            "balls": null,
            "created": "2023-05-30T23:06:51.839456+05:00"
        },
        {
            "id": 121089,
            "user": {
                "username": "KhusanboySobirjonov",
                "ratingTitle": "Neofit"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "E"
            },
            "problemId": 520,
            "problemTitle": "Three digits",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 510,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 52,
            "time": 10,
            "memory": 6712,
            "balls": null,
            "created": "2023-05-30T22:57:30.657657+05:00"
        },
        {
            "id": 121088,
            "user": {
                "username": "dusenbaev",
                "ratingTitle": "Ritor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "G1"
            },
            "problemId": 1117,
            "problemTitle": "Statistical elements | Mode #1",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 1022,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 5,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 6,
            "time": 20,
            "memory": 8188,
            "balls": null,
            "created": "2023-05-30T22:50:03.501616+05:00"
        },
        {
            "id": 121087,
            "user": {
                "username": "Isometric1",
                "ratingTitle": "Ritor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "D"
            },
            "problemId": 933,
            "problemTitle": "Ternary search",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 66,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 2,
            "time": 1,
            "memory": 6608,
            "balls": null,
            "created": "2023-05-30T22:47:03.034391+05:00"
        },
        {
            "id": 121086,
            "user": {
                "username": "Orifxon",
                "ratingTitle": "Ritor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "B"
            },
            "problemId": 742,
            "problemTitle": "L-system",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 162,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 8,
            "verdict": 1,
            "lang": "cpp",
            "testCaseNumber": 0,
            "time": 0,
            "memory": 0,
            "balls": null,
            "created": "2023-05-30T22:45:11.592932+05:00"
        },
        {
            "id": 121085,
            "user": {
                "username": "Orifxon",
                "ratingTitle": "Ritor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "B"
            },
            "problemId": 742,
            "problemTitle": "L-system",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 162,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "cpp",
            "testCaseNumber": 0,
            "time": 1,
            "memory": 1504,
            "balls": null,
            "created": "2023-05-30T22:44:29.915799+05:00"
        },
        {
            "id": 121083,
            "user": {
                "username": "mardonbekhazratov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "B"
            },
            "problemId": 742,
            "problemTitle": "L-system",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 95,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 0,
            "time": 1,
            "memory": 6420,
            "balls": null,
            "created": "2023-05-30T22:44:13.780651+05:00"
        },
        {
            "id": 121082,
            "user": {
                "username": "mardonbekhazratov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "B"
            },
            "problemId": 742,
            "problemTitle": "L-system",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 90,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 0,
            "time": 1,
            "memory": 6388,
            "balls": null,
            "created": "2023-05-30T22:43:36.418989+05:00"
        },
        {
            "id": 121081,
            "user": {
                "username": "mardonbekhazratov",
                "ratingTitle": "Liktor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "B"
            },
            "problemId": 742,
            "problemTitle": "L-system",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 90,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 0,
            "time": 1,
            "memory": 6460,
            "balls": null,
            "created": "2023-05-30T22:43:10.460258+05:00"
        },
        {
            "id": 121080,
            "user": {
                "username": "ilyasdev",
                "ratingTitle": "Ritor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "B"
            },
            "problemId": 742,
            "problemTitle": "L-system",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 10,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 0,
            "time": 1,
            "memory": 6412,
            "balls": null,
            "created": "2023-05-30T22:42:36.122114+05:00"
        },
        {
            "id": 121079,
            "user": {
                "username": "ilyasdev",
                "ratingTitle": "Ritor"
            },
            "team": null,
            "contestProblem": {
                "contest": 271,
                "symbol": "B"
            },
            "problemId": 742,
            "problemTitle": "L-system",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 51,
            "canView": false,
            "canTestView": false,
            "kepcoinValue": 4,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 0,
            "time": 1,
            "memory": 6376,
            "balls": null,
            "created": "2023-05-30T22:42:16.725142+05:00"
        }
    ]
}

const contest = 
{
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