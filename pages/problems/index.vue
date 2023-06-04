<template>
  <div class="p-4">
    <h1 class="text-4xl mb-4">Problems</h1>
    <ui-pagination v-if="problems" :cur-page="curPage" :total-pages="problems ? problems.pagesCount : 1"
      @set-page="page => curPage = page"></ui-pagination>
    <div v-if="problems" class="flex items-center w-full px-4 py-2 bg-gray-100">
      <div class="flex items-center space-x-2 mr-4">
        <ui-input id="title" breakpoint="-" v-model="filterTitle" lazy>
          <template #label>Title</template>
        </ui-input>
      </div>
      <div class="flex items-center space-x-2 mr-4">
        <ui-input id="title" is="select" breakpoint="-" v-model="filterDifficulty">
          <template #label>Difficulty</template>
          <template #control-inner>
            <option value="">All</option>
            <option v-for="difficulty in difficulties" :value="difficulty.value">{{ difficulty.name }}</option>
          </template>
        </ui-input>
      </div>
      <div class="flex items-center space-x-2 mr-4" v-if="user.user">
        <ui-input id="status" is="select" breakpoint="-" v-model="filterSolvedStatus">
          <template #label>Status</template>
          <template #control-inner>
            <option value="">All</option>
            <option value="solved" class="text-green-700">Solved</option>
            <option value="unsolved" class="text-red-700">Unsolved</option>
            <option value="unattempted" class="">Unattempted</option>
          </template>
        </ui-input>
      </div>
    </div>
    <error-loading-view v-bind="{ pending, error, refresh }">
      <table class="w-full" v-if="problems.total">
        <thead class="bg-primary-600 text-white">
          <td class="p-2">ID</td>
          <td class="p-2">Name</td>
          <td class="p-2 hidden lg:table-cell">Tags</td>
          <td class="p-2">Difficulty</td>
          <td class="p-2 hidden sm:table-cell">Rating</td>
          <td class="p-2 hidden sm:table-cell">Attempts</td>
        </thead>
        <tbody>
          <tr v-for="problem in problems.data" class="hover:bg-gray-100"
            :class="[problem.hasSolved ? 'bg-green-100' : problem.hasAttempted ? 'bg-red-100' : '']">
            <td class="p-2">{{ problem.id }}</td>
            <td class="p-2">
              <nuxt-link :to="`/problems/${problem.id}`">{{ problem.title }}</nuxt-link>
            </td>
            <td class="p-2 hidden lg:table-cell">
              <span v-for="tag in problem.tags" :key="tag.id"
                class="border-2 rounded border-slate-500 py-1 px-2 mr-1 bg-slate-100">
                {{ tag.name }}
              </span>
            </td>
            <td class="p-2">
              <span class="py-1 px-2 rounded border-2 inline-block" :class="difficultyClass[problem.difficulty]">
                {{ difficultyTitle[problem.difficulty] }}
              </span>
            </td>
            <td class="p-2 hidden sm:table-cell">
              <div class="flex space-x-1">
                <span>{{ problem.likesCount }}</span>
                <ui-icon name="thumbsUpDown" small></ui-icon>
                <span>{{ problem.dislikesCount }}</span>
              </div>
            </td>
            <td class="p-2 hidden sm:table-cell">{{ problem.attemptsCount }}/{{ problem.solved }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else class="p-2">No problems found.</p>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
const user = useUser()

const curPage = ref(1)
const filterTitle = ref('')
const filterDifficulty = ref('')
const filterSolvedStatus = ref('' as '' | 'solved' | 'unsolved' | 'unattempted')

const { data: problems, error, pending, refresh } = useAsyncData(
  () => $get<any>('/problems', {
    query: {
      ordering: 'id',
      page_size: 50,
      page: curPage.value,
      title: filterTitle.value || null,
      difficulty: filterDifficulty.value || null,
      ...(
        filterSolvedStatus.value == 'solved' ? { has_solved: 1 } :
        filterSolvedStatus.value == 'unsolved' ? { has_solved: 0, has_attempted: 1 } :
        filterSolvedStatus.value == 'unattempted' ? { has_solved: 0, has_attempted: 0 } : {}
      )
    }
  }),
  {
    lazy: true,
    watch: [curPage, filterTitle, filterDifficulty, filterSolvedStatus],
  }
)

watch([filterTitle, filterDifficulty, filterSolvedStatus], () => curPage.value = 1)

const difficulties = [
  { "value": 1, "name": "Beginner" },
  { "value": 2, "name": "Basic" },
  { "value": 3, "name": "Normal" },
  { "value": 4, "name": "Medium" },
  { "value": 5, "name": "Advanced" },
  { "value": 6, "name": "Hard" },
  { "value": 7, "name": "Extremal" },
]

const difficultyTitle = Object.fromEntries(difficulties.map(({ value, name }) => [value, name]))

const difficultyClass: { [k: string]: string } = {
  1: 'bg-green-100 border-green-600',
  2: 'bg-cyan-100 border-cyan-600',
  3: 'bg-blue-100 border-blue-600',
  4: 'bg-violet-200 border-violet-600',
  5: 'bg-yellow-100 border-yellow-600',
  6: 'bg-red-100 border-red-600',
  7: 'bg-red-600 text-white border-black',
}
</script>