<template>
  <div class="p-4">
    <h1 class="text-4xl mb-4">Problems</h1>
    <ui-pagination v-if="problems" :cur-page="curPage" :total-pages="problems ? problems.pagesCount : 1"
      @set-page="page => curPage = page"></ui-pagination>
    <div v-if="problems" > <!-- class=""> -->
      <ui-expand-panel v-if="problems" class="bg-gray-100" header="Filters" hide-header>
        <div class="flex flex-col md:flex-row items-left md:items-center md:space-y-0 md:space-x-2">
          <ui-input id="title" breakpoint="md" v-model="filterTitle" lazy :control-attrs="{class: 'mb-2 mt-1 md:my-0'}">
            <template #label>Title</template>
          </ui-input>
          <ui-input id="title" is="select" breakpoint="-" v-model="filterDifficulty" :control-attrs="{class: 'mb-2 mt-1 md:my-0'}">
            <template #label>Difficulty</template>
            <template #control-inner>
              <option value="">All</option>
              <option v-for="difficulty in difficulties" :value="difficulty.value">{{ difficulty.name }}</option>
            </template>
          </ui-input>
          <ui-input id="status" is="select" breakpoint="-" v-model="filterSolvedStatus" :control-attrs="{class: 'mb-2 mt-1 md:my-0'}">
            <template #label>Status</template>
            <template #control-inner>
              <option value="">All</option>
              <option value="solved" class="text-green-700">Solved</option>
              <option value="unsolved" class="text-red-700">Unsolved</option>
              <option value="unattempted" class="">Unattempted</option>
            </template>
          </ui-input>
        </div>
        <div class="flex items-center">
          <ui-checkbox id="show-tags" class="mr-2" v-model="showAllTags"></ui-checkbox>
          <label for="show-tags">Show all tags</label>
        </div>
      </ui-expand-panel>
    </div>
    <error-loading-view v-bind="{ pending, error, refresh }">
      <ui-table v-if="problems.total" v-slot="{table, thead, th, tr, td}">
        <table :class="table">
          <thead :class="thead">
            <tr>
              <th :class="th" class="w-16">ID</th>
              <th :class="th">Name</th>
              <th :class="th" class="hidden lg:table-cell">Tags</th>
              <th :class="th" class="w-28">Difficulty</th>
              <th :class="th" class="w-24 hidden sm:table-cell">Rating</th>
              <th :class="th" class="w-24 hidden sm:table-cell">Attempts</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="problem in problems.data"
              :class="[tr, problem.hasSolved ? 'bg-green-100' : problem.hasAttempted ? 'bg-red-100' : '']">
              <td :class="td">{{ problem.id }}</td>
              <td :class="td">
                <nuxt-link :to="`/problems/${problem.id}`" class="link">{{ problem.title }}</nuxt-link>
              </td>
              <td :class="td" class="hidden lg:table-cell">
                <problem-tags v-if="showAllTags" :problem="problem"></problem-tags>
                <ui-expandable v-else-if="problem.tags.length">
                  <template #activator="{toggle, expanded}">
                    <span v-if="!expanded" class="link" @click="toggle">Show tags</span>
                  </template>
                  <template #default="{show}">
                    <problem-tags v-if="show" :problem="problem"></problem-tags>
                  </template>
                </ui-expandable>
              </td>
              <td :class="td"><problem-difficulty :problem="problem"></problem-difficulty></td>
              <td :class="td" class="hidden sm:table-cell">
                <div class="flex items-center space-x-1">
                  <span>{{ problem.likesCount }}</span>
                  <ui-icon name="thumbsUpDown" small></ui-icon>
                  <span>{{ problem.dislikesCount }}</span>
                </div>
              </td>
              <td :class="td" class="hidden sm:table-cell">{{ problem.attemptsCount }}/{{ problem.solved }}</td>
            </tr>
          </tbody>
        </table>
      </ui-table>
      <p v-else class="p-2">No problems found.</p>
    </error-loading-view>
  </div>
</template>

<script setup lang="ts">
import { difficulties } from '~/components/problem-difficulty.vue';

const curPage = useQueryParam('page', 1)
const filterTitle = useQueryParam('title', '')
const filterDifficulty = useQueryParam('difficulty', '')
const filterSolvedStatus = useQueryParam('status', '' as '' | 'solved' | 'unsolved' | 'unattempted')
const showAllTags = ref(false)

const { data: problems, error, pending, refresh } = useAsyncData(
  `/problems`,
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

</script>
