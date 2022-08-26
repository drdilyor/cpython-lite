<template>
  <div>
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
</template>

<script setup lang="ts">
import {Ref} from 'vue'
import {prefix} from '~/api';

interface Paginated {
  count: number
  total: number
  pagesCount: number
  data: any
}

const page = ref(1)
const totalPages = ref(-1)

const {data, error, pending} = useFetch<Paginated>(
  () => `${prefix}problems/?page=${page.value}`,
)

watch(data, () => {
  if (data.value) {
    totalPages.value = data.value.pagesCount
  }
})

const setPage = (newPage: number) => {
  page.value = newPage
}

</script>