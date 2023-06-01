<template>
  <div class="p-4">
    <h1 class="text-4xl pb-4">Problems</h1>
    <table class="w-full">
      <thead class="bg-primary-600 text-white">
        <td class="p-2">ID</td>
        <td class="p-2">Name</td>
        <td class="p-2 hidden lg:table-cell">Tags</td>
        <td class="p-2">Difficulty</td>
        <td class="p-2 hidden sm:table-cell">Rating</td>
        <td class="p-2 hidden sm:table-cell">Attempts</td>
      </thead>
      <tbody>
        <tr v-for="problem in problems.data" :class="[problem.hasSolved ? 'bg-green-100' : problem.hasAttempted ? 'bg-red-100' : '']">
          <td class="p-2">{{ problem.id }}</td>
          <td class="p-2">
            <nuxt-link :to="`/problems/${problem.id}`">{{ problem.title }}</nuxt-link>
          </td>
          <td class="p-2 hidden lg:table-cell">
            <span v-for="tag in problem.tags" :key="tag.id" class="border-2 rounded border-slate-500 py-1 px-2 mr-1 bg-slate-100">
              {{ tag.name }}
            </span>
          </td>
          <td class="p-2">
            <span class="py-1 px-2 rounded border-2 inline-block" :class="difficultyClass[problem.difficulty]">
              {{ difficultyTitle[problem.difficulty] }}
            </span>
          </td>
          <td class="p-2 hidden sm:flex items-center space-x-1">
            <span>{{ problem.likesCount }}</span>
            <ui-icon name="thumbsUpDown" small></ui-icon>
            <span>{{ problem.dislikesCount }}</span>
          </td>
          <td class="p-2 hidden sm:table-cell">{{ problem.attemptsCount }}/{{ problem.solved }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">


const problems = {
    "count": 20,
    "total": 1556,
    "pagesCount": 78,
    "data": [
        {
            "id": 1747,
            "title": "JS | sumEvenSquares | One Line",
            "difficulty": 5,
            "difficultyTitle": "ADVANCED",
            "solved": 13,
            "notSolved": 4,
            "attemptsCount": 43,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 33,
                    "name": "Bir qatorli"
                },
                {
                    "id": 70,
                    "name": "Javascript"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1746,
            "title": "JS | tripleSort",
            "difficulty": 5,
            "difficultyTitle": "ADVANCED",
            "solved": 14,
            "notSolved": 1,
            "attemptsCount": 21,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 70,
                    "name": "Javascript"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1745,
            "title": "JS | sleepFiveSeconds",
            "difficulty": 4,
            "difficultyTitle": "MEDIUM",
            "solved": 15,
            "notSolved": 7,
            "attemptsCount": 48,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1744,
            "title": "HTML | Button",
            "difficulty": 5,
            "difficultyTitle": "ADVANCED",
            "solved": 6,
            "notSolved": 1,
            "attemptsCount": 19,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1743,
            "title": "HTML | Horizon",
            "difficulty": 3,
            "difficultyTitle": "NORMAL",
            "solved": 14,
            "notSolved": 2,
            "attemptsCount": 19,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1742,
            "title": "HTML | 4 Squares",
            "difficulty": 4,
            "difficultyTitle": "MEDIUM",
            "solved": 15,
            "notSolved": 1,
            "attemptsCount": 32,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1741,
            "title": "HTML | Table",
            "difficulty": 2,
            "difficultyTitle": "BASIC",
            "solved": 16,
            "notSolved": 7,
            "attemptsCount": 38,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1740,
            "title": "HTML | KEP | Badge",
            "difficulty": 4,
            "difficultyTitle": "MEDIUM",
            "solved": 12,
            "notSolved": 5,
            "attemptsCount": 42,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1739,
            "title": "HTML | KEP",
            "difficulty": 2,
            "difficultyTitle": "BASIC",
            "solved": 21,
            "notSolved": 9,
            "attemptsCount": 101,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 1,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1738,
            "title": "JS | randInt",
            "difficulty": 3,
            "difficultyTitle": "NORMAL",
            "solved": 9,
            "notSolved": 1,
            "attemptsCount": 14,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 70,
                    "name": "Javascript"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1737,
            "title": "JS | Click",
            "difficulty": 2,
            "difficultyTitle": "BASIC",
            "solved": 10,
            "notSolved": 1,
            "attemptsCount": 29,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": false,
            "tags": [
                {
                    "id": 70,
                    "name": "Javascript"
                },
                {
                    "id": 25,
                    "name": "Veb dasturlash"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 1,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1736,
            "title": "HTML | Square",
            "difficulty": 3,
            "difficultyTitle": "NORMAL",
            "solved": 13,
            "notSolved": 3,
            "attemptsCount": 50,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1735,
            "title": "HTML | Languages | Badge",
            "difficulty": 4,
            "difficultyTitle": "MEDIUM",
            "solved": 7,
            "notSolved": 4,
            "attemptsCount": 141,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1734,
            "title": "HTML | Languages",
            "difficulty": 3,
            "difficultyTitle": "NORMAL",
            "solved": 16,
            "notSolved": 1,
            "attemptsCount": 37,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1733,
            "title": "HTML | CPython",
            "difficulty": 6,
            "difficultyTitle": "BASIC",
            "solved": 17,
            "notSolved": 2,
            "attemptsCount": 50,
            "hasChecker": true,
            "hasSolved": true,
            "hasAttempted": true,
            "tags": [
                {
                    "id": 40,
                    "name": "HTML"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 1,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1729,
            "title": "Random game #2",
            "difficulty": 5,
            "difficultyTitle": "ADVANCED",
            "solved": 3,
            "notSolved": 0,
            "attemptsCount": 3,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": false,
            "tags": [
                {
                    "id": 12,
                    "name": "Matematika"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "MDSPro"
        },
        {
            "id": 1728,
            "title": "is_rated=True",
            "difficulty": 7,
            "difficultyTitle": "NORMAL",
            "solved": 18,
            "notSolved": 7,
            "attemptsCount": 145,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": false,
            "tags": [
                {
                    "id": 66,
                    "name": "CPython"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1727,
            "title": "8 ga bo'lish",
            "difficulty": 4,
            "difficultyTitle": "MEDIUM",
            "solved": 20,
            "notSolved": 2,
            "attemptsCount": 60,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": false,
            "tags": [
                {
                    "id": 12,
                    "name": "Matematika"
                },
                {
                    "id": 2,
                    "name": "Sikllar"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1726,
            "title": "Panraqamli sonlar",
            "difficulty": 3,
            "difficultyTitle": "NORMAL",
            "solved": 17,
            "notSolved": 4,
            "attemptsCount": 78,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": false,
            "tags": [
                {
                    "id": 4,
                    "name": "Ma`lumotlar tuzilmasi"
                },
                {
                    "id": 2,
                    "name": "Sikllar"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 0,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "admin"
        },
        {
            "id": 1725,
            "title": "Random game #1",
            "difficulty": 4,
            "difficultyTitle": "MEDIUM",
            "solved": 4,
            "notSolved": 2,
            "attemptsCount": 14,
            "hasChecker": true,
            "hasSolved": false,
            "hasAttempted": false,
            "tags": [
                {
                    "id": 12,
                    "name": "Matematika"
                }
            ],
            "solutionKepcoinValue": 0,
            "likesCount": 1,
            "dislikesCount": 0,
            "hasSolution": false,
            "authorUsername": "MDSPro"
        }
    ]
}

const difficulties = [
    {
        "value": 1,
        "name": "Boshlangich"
    },
    {
        "value": 2,
        "name": "Asoslar"
    },
    {
        "value": 3,
        "name": "Normal"
    },
    {
        "value": 4,
        "name": "O'rtacha"
    },
    {
        "value": 5,
        "name": "Ilg'or"
    },
    {
        "value": 6,
        "name": "Qiyin"
    },
    {
        "value": 7,
        "name": "Juda qiyin"
    }
]

const difficultyTitle = computed(() =>
  Object.fromEntries(difficulties.map(({value, name}) => [value, name]))
)

const difficultyClass: {[k: string] : string} = {
  1: 'bg-green-100 border-green-600',
  2: 'bg-cyan-100 border-cyan-600',
  3: 'bg-blue-100 border-blue-600',
  4: 'bg-violet-200 border-violet-600',
  5: 'bg-yellow-100 border-yellow-600',
  6: 'bg-red-100 border-red-600',
  7: 'bg-red-600 text-white border-black',
}
</script>