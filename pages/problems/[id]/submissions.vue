<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>
    <h1 class="text-4xl my-4">{{ problem.id }}. {{ problem.title }}</h1>
    <table class="w-full">
      <thead class="bg-primary-600 text-white">
        <td class="p-2">ID</td>
        <td class="p-2">When</td>
        <td class="p-2">Who</td>
        <td class="p-2">Lang</td>
        <td class="p-2">Verdict</td>
        <td class="p-2">Time</td>
        <td class="p-2">Memory</td>
      </thead>
      <tbody>
        <tr v-for="submission in submissions.data">
          <td class="p-2">
            <nuxt-link :to="`/submissions/${submission.id}`">{{ submission.id }}</nuxt-link>
          </td>
          <td class="p-2"><ui-time :value="submission.created" date time seconds></ui-time></td>
          <td class="p-2"><ui-user :user="submission.user"></ui-user></td>
          <td class="p-2"><ui-language :lang="submission.lang"></ui-language></td>
          <td class="p-2"><submission-verdict :submission="submission"></submission-verdict></td>
          <td class="p-2 text-right">{{ submission.time }}ms</td>
          <td class="p-2 text-right">{{ submission.memory }}KB</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const problem = {
    "id": 1,
    "difficultyTitle": "Beginner",
    "notSolved": 38,
    "solved": 593,
    "hasChecker": true,
    "attemptsCount": 2087,
    "hasSolved": true,
    "hasAttempted": true,
    "tags": [
        {
            "id": 1,
            "name": "Simple"
        }
    ],
    "solutionKepcoinValue": 2,
    "hasSolution": true,
    "authorUsername": "admin",
    "likesCount": 14,
    "dislikesCount": 2,
    "sampleTests": [
        {
            "input": "2 \r\n2",
            "output": "4",
            "problem": 1
        },
        {
            "input": "5 \r\n10",
            "output": "15",
            "problem": 1
        }
    ],
    "availableLanguages": [
        {
            "lang": "py",
            "timeLimit": 1000,
            "memoryLimit": 250,
            "codeTemplate": ""
        },
        {
            "lang": "cpp",
            "timeLimit": 500,
            "memoryLimit": 64,
            "codeTemplate": ""
        },
        {
            "lang": "r",
            "timeLimit": 1500,
            "memoryLimit": 256,
            "codeTemplate": ""
        },
        {
            "lang": "c",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": ""
        },
        {
            "lang": "kt",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": ""
        },
        {
            "lang": "hs",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": ""
        },
        {
            "lang": "php",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "cs",
            "timeLimit": 5000,
            "memoryLimit": null,
            "codeTemplate": ""
        },
        {
            "lang": "js",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": ""
        }
    ],
    "canViewSolution": false,
    "voteType": 1,
    "translateDone": false,
    "timeLimit": 2000,
    "memoryLimit": 512,
    "title": "The sum of two numbers",
    "body": "<p><strong>&nbsp;</strong><span class=\"mathjax-latex\">\\(a\\)</span>&nbsp;and <strong><strong><span class=\"mathjax-latex\"> \\(b\\)</span></strong></strong> numbers are given. Calculate the sum of these numbers.</p>",
    "inputData": "<p>The first line contains an integer,&nbsp;<span class=\"mathjax-latex\">\\(a (1 \\le a \\le 1000).\\)</span></p>\r\n\r\n<p>The second line contains an integer,&nbsp;<span class=\"mathjax-latex\">\\(b (1 \\le b \\le 1000).\\)</span></p>\r\n\r\n<p>&nbsp;</p>",
    "outputData": "<p>Output the answer to the problem.</p>",
    "comment": null,
    "codeTemplate": "",
    "difficulty": 1,
    "partialSolvable": false,
    "ogImage": "https://cpython.s3.amazonaws.com/media/images/problem-preview/1_o4VUj0e.webp",
    "image": null,
    "translateAuthor": null,
    "author": 207
}

const submissions = {
    "count": 10,
    "total": 11,
    "pagesCount": 2,
    "data": [
        {
            "id": 120101,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Running",
            "sourceCodeSize": 34,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": -1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6472,
            "balls": null,
            "created": "2023-05-28T14:26:10.992723+05:00"
        },
        {
            "id": 91143,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 36,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 1,
            "time": 1,
            "memory": 6168,
            "balls": null,
            "created": "2023-02-16T01:47:04.145414+05:00"
        },
        {
            "id": 77582,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 40,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6672,
            "balls": null,
            "created": "2022-10-08T22:28:27.089566+05:00"
        },
        {
            "id": 77581,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Output format error",
            "sourceCodeSize": 41,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 5,
            "lang": "py",
            "testCaseNumber": 1,
            "time": 10,
            "memory": 6580,
            "balls": null,
            "created": "2022-10-08T22:27:56.894153+05:00"
        },
        {
            "id": 74660,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 34,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6216,
            "balls": null,
            "created": "2022-09-02T09:16:06.524342+05:00"
        },
        {
            "id": 74580,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 34,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6348,
            "balls": null,
            "created": "2022-09-01T14:41:04.636693+05:00"
        },
        {
            "id": 74456,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 34,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6292,
            "balls": null,
            "created": "2022-08-29T15:24:55.332289+05:00"
        },
        {
            "id": 74455,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Wrong answer",
            "sourceCodeSize": 33,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 2,
            "lang": "py",
            "testCaseNumber": 1,
            "time": 1,
            "memory": 6224,
            "balls": null,
            "created": "2022-08-29T15:24:01.976182+05:00"
        },
        {
            "id": 74447,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 32,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 20,
            "memory": 6300,
            "balls": null,
            "created": "2022-08-29T13:34:10.734987+05:00"
        },
        {
            "id": 74221,
            "user": {
                "username": "drdilyor",
                "ratingTitle": "Legat"
            },
            "team": null,
            "contestProblem": null,
            "problemId": 1,
            "problemTitle": "The sum of two numbers",
            "verdictTitle": "Accepted",
            "sourceCodeSize": 34,
            "canView": true,
            "canTestView": false,
            "kepcoinValue": 2,
            "verdict": 1,
            "lang": "py",
            "testCaseNumber": 20,
            "time": 10,
            "memory": 6260,
            "balls": null,
            "created": "2022-08-26T19:33:16.432909+05:00"
        }
    ]
}
</script>