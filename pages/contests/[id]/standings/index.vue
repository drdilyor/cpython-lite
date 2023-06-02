<template>
  <div class="p-4">
    <contest-tabs :id="+route.params.id"></contest-tabs>
    <h1 class="my-4 text-4xl">{{ contest.title }}</h1>
    <table class="w-full">
      <thead class="bg-primary-600 text-white">
        <td class="p-2 w-10">Rank</td>
        <td class="p-2">User</td>
        <td class="p-2 w-16 text-center">Score</td>
        <td v-for="problem in problems" class="w-14 text-center">{{ problem.symbol }}</td>
      </thead>
      <tbody>
        <tr v-for="user in standings" class="hover:bg-gray-100">
          <td class="p-2 text-right">{{ user.rank }}</td>
          <td class="p-2"><ui-user :user="user"></ui-user></td>
          <td class="p-2 font-bold text-center text-primary-700">{{ user.points }}</td>
          <td v-for="problem in problemInfos(user)" class="text-center">
            <template v-if="problem">
              <span v-if="problem.points" class="font-bold text-green-700">{{ problem.points }}</span>
              <span v-if="problem.attemptsCount" class="text-red-700">({{ problem.attemptsCount }})</span>
              <br>
              <span v-if="problem.points" class="text-sm text-gray-700">
                <ui-time :value="+new Date(problem.firstAcceptedTime) - +new Date(contest.startTime)" time utc></ui-time>
              </span>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

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

const problems = [
    {
        "problem": {
            "id": 543,
            "title": "Stupid problem",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 45,
        "solved": 25,
        "attemptUsersCount": 26,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "A",
        "ball": 100
    },
    {
        "problem": {
            "id": 742,
            "title": "L-system",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 44,
        "solved": 7,
        "attemptUsersCount": 15,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "B",
        "ball": 500
    },
    {
        "problem": {
            "id": 457,
            "title": "Removed number #1",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 32,
        "solved": 20,
        "attemptUsersCount": 21,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "C1",
        "ball": 250
    },
    {
        "problem": {
            "id": 458,
            "title": "Removed number #2",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 34,
        "solved": 17,
        "attemptUsersCount": 20,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "C2",
        "ball": 250
    },
    {
        "problem": {
            "id": 933,
            "title": "Ternary search",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 45,
        "solved": 5,
        "attemptUsersCount": 13,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "D",
        "ball": 750
    },
    {
        "problem": {
            "id": 520,
            "title": "Three digits",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 27,
        "solved": 16,
        "attemptUsersCount": 17,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "E",
        "ball": 500
    },
    {
        "problem": {
            "id": 1425,
            "title": "Country Khorezmstan #1",
            "timeLimit": 2000,
            "memoryLimit": 256,
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
            ]
        },
        "attemptsCount": 33,
        "solved": 7,
        "attemptUsersCount": 12,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "F1",
        "ball": 750
    },
    {
        "problem": {
            "id": 1117,
            "title": "Statistical elements | Mode #1",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 17,
        "solved": 4,
        "attemptUsersCount": 7,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "G1",
        "ball": 1000
    },
    {
        "problem": {
            "id": 1118,
            "title": "Statistical elements | Mode #2",
            "timeLimit": 2000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 8,
        "solved": 3,
        "attemptUsersCount": 5,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "G2",
        "ball": 1750
    },
    {
        "problem": {
            "id": 865,
            "title": "Minimum product",
            "timeLimit": 3000,
            "memoryLimit": 512,
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
            ]
        },
        "attemptsCount": 11,
        "solved": 1,
        "attemptUsersCount": 3,
        "isSolved": false,
        "isAttempted": false,
        "symbol": "I",
        "ball": 2500
    }
]

const standings = [
    {
        "team": null,
        "username": "The_Samurai",
        "problemsInfo": [
            {
                "problemSymbol": "F1",
                "points": 700,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:24:56.572887+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "G1",
                "points": 924,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:33:59.245891+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 558,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T21:46:50.684330+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "G2",
                "points": 1640,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:08:01.357146+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 445,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:50:36.295586+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 100,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:10:23.507891+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "C1",
                "points": 249,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:13:36.694238+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "C2",
                "points": 235,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:16:32.530968+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 495,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:18:36.756530+05:00",
                "theBest": true
            }
        ],
        "ratingTitle": "Pretor",
        "newRating": 2299,
        "newRatingTitle": "Pretor",
        "perfomanceTitle": "Valar",
        "type": 1,
        "points": 5346,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 1,
        "rating": 2225,
        "seed": 1.6381189568892391,
        "delta": 74,
        "bonus": 0,
        "perfomance": 3499,
        "updated": "2023-06-01T10:23:16.322297+05:00"
    },
    {
        "team": null,
        "username": "Isometric1",
        "problemsInfo": [
            {
                "problemSymbol": "E",
                "points": 492,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:24:37.167667+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 727,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:38:21.764640+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 477,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:52:31.863771+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "G1",
                "points": 708,
                "penalties": 0,
                "attemptsCount": 4,
                "firstAcceptedTime": "2023-05-30T21:34:41.490926+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "G2",
                "points": 1306,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T22:31:40.671189+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 100,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:10:32.217761+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 249,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:13:45.024280+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 249,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:13:55.381163+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "D",
                "points": 317,
                "penalties": 0,
                "attemptsCount": 7,
                "firstAcceptedTime": "2023-05-30T23:37:59.997362+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1384,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Magistr",
        "type": 1,
        "points": 4625,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 2,
        "rating": 1200,
        "seed": 16.897293636177025,
        "delta": 184,
        "bonus": 0,
        "perfomance": 2083,
        "updated": "2023-06-01T10:23:16.328477+05:00"
    },
    {
        "team": null,
        "username": "triplem",
        "problemsInfo": [
            {
                "problemSymbol": "G1",
                "points": 986,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:22:57.563448+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "F1",
                "points": 726,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:38:52.790306+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 5,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "G2",
                "points": 1654,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:00:27.295973+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "I",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 6,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 249,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:14:09.613321+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 249,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:14:14.925155+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 94,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:15:26.212552+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 446,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T21:03:55.863588+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Liktor",
        "newRating": 1532,
        "newRatingTitle": "Liktor",
        "perfomanceTitle": "Master",
        "type": 1,
        "points": 4404,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 3,
        "rating": 1472,
        "seed": 8.625819204745715,
        "delta": 60,
        "bonus": 0,
        "perfomance": 1852,
        "updated": "2023-06-01T10:23:16.330403+05:00"
    },
    {
        "team": null,
        "username": "alexwice",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 97,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:34:32.221470+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 486,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:35:55.923500+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "C1",
                "points": 242,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:38:04.084347+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 241,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:41:16.887026+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 457,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:43:12.671360+05:00",
                "theBest": true
            },
            {
                "problemSymbol": "E",
                "points": 481,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:45:05.842823+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "G1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "G2",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "I",
                "points": 2300,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:23:33.546865+05:00",
                "theBest": true
            }
        ],
        "ratingTitle": "Liktor",
        "newRating": 1571,
        "newRatingTitle": "Liktor",
        "perfomanceTitle": "Legat",
        "type": 1,
        "points": 4304,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 4,
        "rating": 1556,
        "seed": 6.700290767776891,
        "delta": 15,
        "bonus": 0,
        "perfomance": 1732,
        "updated": "2023-06-01T10:23:16.332124+05:00"
    },
    {
        "team": null,
        "username": "aminjonshermatov",
        "problemsInfo": [
            {
                "problemSymbol": "C1",
                "points": 233,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:24:31.609676+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 455,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:47:09.940951+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "G1",
                "points": 927,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:16:42.032484+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 367,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T21:56:04.309222+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 216,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T22:14:59.117913+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 6,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 5,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 100,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:10:24.653468+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1406,
        "newRatingTitle": "Liktor",
        "perfomanceTitle": "Legat",
        "type": 1,
        "points": 2298,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 5,
        "rating": 1343,
        "seed": 12.322508552603168,
        "delta": 63,
        "bonus": 0,
        "perfomance": 1653,
        "updated": "2023-06-01T10:23:16.333789+05:00"
    },
    {
        "team": null,
        "username": "Asadbek06",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 97,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:38:03.710278+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 241,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:44:08.485971+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 191,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T21:25:27.970940+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 472,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:02:15.420241+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 675,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:41:33.418100+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1334,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Liktor",
        "type": 1,
        "points": 1676,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 6,
        "rating": 1262,
        "seed": 14.913196060767836,
        "delta": 72,
        "bonus": 0,
        "perfomance": 1591,
        "updated": "2023-06-01T10:23:16.335407+05:00"
    },
    {
        "team": null,
        "username": "mardonbekhazratov",
        "problemsInfo": [
            {
                "problemSymbol": "C2",
                "points": 246,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:25:54.014782+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 488,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:32:51.770166+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 583,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T21:16:04.652217+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 100,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:10:47.199955+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 13,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 233,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:23:23.641270+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Liktor",
        "newRating": 1432,
        "newRatingTitle": "Liktor",
        "perfomanceTitle": "Liktor",
        "type": 1,
        "points": 1650,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 7,
        "rating": 1431,
        "seed": 9.715350581756304,
        "delta": 1,
        "bonus": 0,
        "perfomance": 1541,
        "updated": "2023-06-01T10:23:16.337042+05:00"
    },
    {
        "team": null,
        "username": "ThA",
        "problemsInfo": [
            {
                "problemSymbol": "C2",
                "points": 223,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:59:42.341617+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 483,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:40:55.582273+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 593,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T21:50:12.950598+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 100,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:13:50.412480+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 246,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:22:58.544449+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Liktor",
        "newRating": 1418,
        "newRatingTitle": "Liktor",
        "perfomanceTitle": "Liktor",
        "type": 1,
        "points": 1645,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 8,
        "rating": 1404,
        "seed": 10.480445684764083,
        "delta": 14,
        "bonus": 0,
        "perfomance": 1496,
        "updated": "2023-06-01T10:23:16.338747+05:00"
    },
    {
        "team": null,
        "username": "ilyasdev",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 97,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:37:12.355507+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 239,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:50:30.513867+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 224,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:58:06.573361+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 463,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:18:09.885488+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 617,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T22:06:05.156862+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 4,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1333,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Liktor",
        "type": 1,
        "points": 1640,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 9,
        "rating": 1312,
        "seed": 13.302686026385922,
        "delta": 21,
        "bonus": 0,
        "perfomance": 1457,
        "updated": "2023-06-01T10:23:16.340415+05:00"
    },
    {
        "team": null,
        "username": "zarnigor_rakhimova",
        "problemsInfo": [
            {
                "problemSymbol": "C2",
                "points": 246,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:25:41.068410+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 475,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:55:43.540677+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 7,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 440,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:59:57.962868+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 95,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:10:29.134122+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 247,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:19:26.684357+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1261,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Liktor",
        "type": 1,
        "points": 1503,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 10,
        "rating": 1226,
        "seed": 16.072260553155807,
        "delta": 35,
        "bonus": 0,
        "perfomance": 1420,
        "updated": "2023-06-01T10:23:16.342067+05:00"
    },
    {
        "team": null,
        "username": "Orifxon",
        "problemsInfo": [
            {
                "problemSymbol": "C2",
                "points": 243,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:34:49.712700+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 341,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T22:45:11.592932+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 4,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 463,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:18:10.102853+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 94,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:14:55.583024+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 230,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:34:35.901438+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Liktor",
        "newRating": 1366,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Ritor",
        "type": 1,
        "points": 1371,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 11,
        "rating": 1412,
        "seed": 10.250102959527737,
        "delta": -46,
        "bonus": 0,
        "perfomance": 1385,
        "updated": "2023-06-01T10:23:16.343750+05:00"
    },
    {
        "team": null,
        "username": "shahzodbekaliyev07",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 97,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:36:57.970928+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 350,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T22:27:50.949898+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 383,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T22:13:42.535986+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 232,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:14:33.939684+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 228,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:31:00.162002+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1233,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Ritor",
        "type": 1,
        "points": 1290,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 12,
        "rating": 1213,
        "seed": 16.486577915837863,
        "delta": 20,
        "bonus": 0,
        "perfomance": 1353,
        "updated": "2023-06-01T10:23:16.345431+05:00"
    },
    {
        "team": null,
        "username": "anonim.ghost.uz",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 97,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:40:40.541549+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 628,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T21:07:59.812681+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 214,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T21:33:43.276629+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 235,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:03:36.723310+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "G2",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "G1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Liktor",
        "newRating": 1407,
        "newRatingTitle": "Liktor",
        "perfomanceTitle": "Ritor",
        "type": 1,
        "points": 1174,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 13,
        "rating": 1468,
        "seed": 8.72801301309341,
        "delta": -61,
        "bonus": 0,
        "perfomance": 1320,
        "updated": "2023-06-01T10:23:16.347152+05:00"
    },
    {
        "team": null,
        "username": "gooddaytofight",
        "problemsInfo": [
            {
                "problemSymbol": "C1",
                "points": 245,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:28:33.183178+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 698,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:13:36.681312+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 99,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:14:42.078208+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1207,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Ritor",
        "type": 1,
        "points": 1042,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 14,
        "rating": 1200,
        "seed": 16.897293636177025,
        "delta": 7,
        "bonus": 0,
        "perfomance": 1290,
        "updated": "2023-06-01T10:23:16.348951+05:00"
    },
    {
        "team": null,
        "username": "prathik8794",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 89,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:50:50.799092+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 414,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T22:02:32.896287+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 217,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T22:10:28.406769+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 217,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T22:11:13.399902+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "F1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Neofit",
        "newRating": 1149,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Ritor",
        "type": 1,
        "points": 937,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 15,
        "rating": 1131,
        "seed": 18.984587114927415,
        "delta": 18,
        "bonus": 0,
        "perfomance": 1259,
        "updated": "2023-06-01T10:23:16.350900+05:00"
    },
    {
        "team": null,
        "username": "ErgashevBehruzjon",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 87,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T20:38:26.155228+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 219,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T21:14:46.209726+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 232,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:15:00.413568+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 389,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T22:02:43.879782+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1292,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Ritor",
        "type": 1,
        "points": 927,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 16,
        "rating": 1333,
        "seed": 12.636255542355755,
        "delta": -41,
        "bonus": 0,
        "perfomance": 1227,
        "updated": "2023-06-01T10:23:16.352609+05:00"
    },
    {
        "team": null,
        "username": "KhusanboySobirjonov",
        "problemsInfo": [
            {
                "problemSymbol": "C1",
                "points": 246,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:23:08.618786+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 164,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T23:07:17.349642+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 409,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T22:57:30.657657+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 94,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:17:35.963307+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Neofit",
        "newRating": 1084,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 913,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 17,
        "rating": 1065,
        "seed": 20.768406571017866,
        "delta": 19,
        "bonus": 0,
        "perfomance": 1196,
        "updated": "2023-06-01T10:23:16.354306+05:00"
    },
    {
        "team": null,
        "username": "dusenbaev",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 87,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T21:26:10.499820+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 225,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:41:28.670477+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "E",
                "points": 437,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T22:06:37.403355+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "G1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1279,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 749,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 18,
        "rating": 1333,
        "seed": 12.636255542355755,
        "delta": -54,
        "bonus": 0,
        "perfomance": 1163,
        "updated": "2023-06-01T10:23:16.355942+05:00"
    },
    {
        "team": null,
        "username": "Eldorbek02",
        "problemsInfo": [
            {
                "problemSymbol": "E",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 222,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:54:04.050462+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 99,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:17:29.253031+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 247,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:19:44.027437+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1205,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 568,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 19,
        "rating": 1248,
        "seed": 15.36528459309033,
        "delta": -43,
        "bonus": 0,
        "perfomance": 1130,
        "updated": "2023-06-01T10:23:16.357580+05:00"
    },
    {
        "team": null,
        "username": "umedjonnnn439",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 95,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T20:54:05.505527+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "C1",
                "points": 231,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:21:34.844603+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "C2",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "D",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1163,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 326,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 20,
        "rating": 1204,
        "seed": 16.77135331646761,
        "delta": -41,
        "bonus": 0,
        "perfomance": 1094,
        "updated": "2023-06-01T10:23:16.359205+05:00"
    },
    {
        "team": null,
        "username": "vikash46719",
        "problemsInfo": [
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 95,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": "2023-05-30T20:11:59.090297+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Neofit",
        "newRating": 1110,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 95,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 21,
        "rating": 1147,
        "seed": 18.51761378570374,
        "delta": -37,
        "bonus": 0,
        "perfomance": 1055,
        "updated": "2023-06-01T10:23:16.360916+05:00"
    },
    {
        "team": null,
        "username": "saidbekdjurabaev",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 94,
                "penalties": 0,
                "attemptsCount": 0,
                "firstAcceptedTime": "2023-05-30T21:07:37.988926+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1144,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 94,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 22,
        "rating": 1200,
        "seed": 16.897293636177025,
        "delta": -56,
        "bonus": 0,
        "perfomance": 1011,
        "updated": "2023-06-01T10:23:16.362528+05:00"
    },
    {
        "team": null,
        "username": "unknown_player",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 88,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T20:30:15.815908+05:00",
                "theBest": false
            },
            {
                "problemSymbol": "I",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Neofit",
        "newRating": 1134,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 88,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 23,
        "rating": 1197,
        "seed": 16.991474906537572,
        "delta": -63,
        "bonus": 0,
        "perfomance": 962,
        "updated": "2023-06-01T10:23:16.364197+05:00"
    },
    {
        "team": null,
        "username": "Coder",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 88,
                "penalties": 0,
                "attemptsCount": 2,
                "firstAcceptedTime": "2023-05-30T20:30:10.182305+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1136,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 88,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 23,
        "rating": 1200,
        "seed": 16.897293636177025,
        "delta": -64,
        "bonus": 0,
        "perfomance": 962,
        "updated": "2023-06-01T10:23:16.365883+05:00"
    },
    {
        "team": null,
        "username": "shuhratovelbekferps",
        "problemsInfo": [
            {
                "problemSymbol": "A",
                "points": 78,
                "penalties": 0,
                "attemptsCount": 3,
                "firstAcceptedTime": "2023-05-30T21:14:01.145480+05:00",
                "theBest": false
            }
        ],
        "ratingTitle": "Neofit",
        "newRating": 1067,
        "newRatingTitle": "Neofit",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 78,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 25,
        "rating": 1139,
        "seed": 18.752588297119335,
        "delta": -72,
        "bonus": 0,
        "perfomance": 821,
        "updated": "2023-06-01T10:23:16.367579+05:00"
    },
    {
        "team": null,
        "username": "mukh_ibra",
        "problemsInfo": [
            {
                "problemSymbol": "C1",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "B",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 1,
                "firstAcceptedTime": null,
                "theBest": false
            },
            {
                "problemSymbol": "A",
                "points": 0,
                "penalties": 0,
                "attemptsCount": 4,
                "firstAcceptedTime": null,
                "theBest": false
            }
        ],
        "ratingTitle": "Ritor",
        "newRating": 1236,
        "newRatingTitle": "Ritor",
        "perfomanceTitle": "Neofit",
        "type": 1,
        "points": 0,
        "penalties": 0,
        "lastAdoptedProblemDatetime": null,
        "rank": 26,
        "rating": 1236,
        "seed": 15.751635508412523,
        "delta": 0,
        "bonus": 0,
        "perfomance": 690,
        "updated": "2023-06-01T10:23:16.369232+05:00"
    }
]

const symbols = problems.map(({symbol}) => symbol)

const problemInfos = (user: any) => {
  const res = new Array(problems.length)
  for (let info of user.problemsInfo) {
    res[symbols.indexOf(info.problemSymbol)] = info
  }
  return res
}

</script>