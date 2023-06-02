<template>
  <table class="w-full">
    <thead class="bg-primary-600 text-white">
      <td class="p-2"></td>
      <td class="p-2">Problem</td>
      <td class="p-2"></td>
      <td v-if="!short" class="p-2"></td>
    </thead>
    <tbody>
      <tr v-for="problem in problems">
        <td class="p-2">{{ problem.symbol }}</td>
        <td class="p-2">
          <nuxt-link :to="url(problem)">{{ problem.problem.title }}</nuxt-link>
        </td>
        <td class="p-2">
          <span class="flex">
            <ui-icon name="accountCheck"></ui-icon>
            {{ problem.solved }}
          </span>
        </td>
        <td v-if="!short"><ui-button light :url="url(problem)">Open</ui-button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

const props = defineProps({
  contestId: { type: Number, required: true },
  short: { type: Boolean, default: false },
})
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

const url = (problem: any) => `/contests/${props.contestId}/problems/${problem.symbol}`

</script>