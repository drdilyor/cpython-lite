<template>
  <div class="columns">
    <div class="column is-two-thirds">
      <div class="box">
        <practice-tabs></practice-tabs>

        <h1 class="is-size-1 has-text-centered mb-4">Problemset</h1>
        <ui-pagination
          v-if="totalPages != -1"
          :cur-page="page"
          :total-pages="totalPages"
          @set-page="setPage"
          />
        <api-view-error v-if="error"></api-view-error>
        <api-view-pending v-else-if="pending && !data"></api-view-pending>
        <problem-list v-else :list="data.data"></problem-list>
      </div>
    </div>
    <div class="column is-one-thirds">
      <div class="box">
        <h2 class="is-size-3 has-text-centered mb-4">Filtering</h2>
        <form>
          <ui-field label="Title" control-class="has-icons-right">
            <input class="input" type="text" v-model.lazy="filter.title">
          </ui-field>
          <ui-field label="Author">
            <input type="text" class="input" v-model.lazy="filter.author">
          </ui-field>
          <ui-field label="Difficulty">
            <select class="input" v-model.number="filter.difficulty">
              <api-view url="/problems/difficulties/">
                <template v-slot="{data}">
                  <option value="-1">All</option>
                  <option v-for="obj in data" :value="obj.value">{{ obj.name }}</option>
                </template>
                <template #pending>
                  <option value="-1" disabled>Loading...</option>
                </template>
              </api-view>
            </select>
          </ui-field>
          <ui-field label="Status">
            <select class="input" v-model.number="filter.hasSolved">
              <option value="-1">All</option>
              <option value="0">Not solved</option>
              <option value="1">Solved</option>
            </select>
          </ui-field>
          <ui-field label="Rating">
            <select class="input" v-model.number="filter.rating.min">
              <option value="0">All</option>
              <option value="1">Rated</option>
              <option value="4">&gt; 4</option>
              <option value="4.5">&gt; 4.5</option>
            </select>
          </ui-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {prefix} from '~/api';

interface Paginated {
  count: number
  total: number
  pagesCount: number
  data: any
}

const page = ref(1)
const totalPagesCache = ref(-1)
const order = reactive({
  by: 'id',
  dec: false,
})

const filter = reactive({
  author: '',
  title: '',
  difficulty: -1,
  hasSolved: -1 as -1 | 0 | 1,
  rating: {
    min: 0,
    max: 5,
  }
})

const getUrl = () => {
  let opts: any = {
    page: page.value,
    ordering: order.dec ? '-' + order.by : order.by,
    title: filter.title,
    author: filter.author,
    rating_min: filter.rating.min,
    rating_max: filter.rating.max,
  }
  if (filter.difficulty != -1)
    opts.difficulty = filter.difficulty
  if (filter.hasSolved != -1)
    opts.has_solved = filter.hasSolved
  let url = prefix + 'problems/?'
  url += Object.entries(opts)
    .map(([key, value]) => key + '=' + value)
    .join('&')
  return url;
}

const {data, error, pending} = useFetch<Paginated>(getUrl)

watch(data, () => {
  if (data.value) {
    totalPagesCache.value = data.value.pagesCount
  }
})

const totalPages = computed(() => {
  if (totalPagesCache.value != -1) return totalPagesCache.value
  if (data.value) return data.value.pagesCount
  return -1
})

const setPage = (newPage: number) => {
  if (!pending.value)
    page.value = newPage
}

</script>