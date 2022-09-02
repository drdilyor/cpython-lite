<template>
  <div>
    <!-- TODO: separate components for short version -->
    <ui-pagination
      v-if="!short"
      :cur-page="page"
      :total-pages="submissions ? submissions.pagesCount : 1"
      @set-page="v => page = v"></ui-pagination>
    <submission-list v-if="submissions !== null" :list="submissions.data"></submission-list>
    <api-view-pending v-else-if="pending"></api-view-pending>
    <api-view-error v-else></api-view-error>
  </div>
</template>

<script setup lang="ts">
import {prefix, Paginated} from "~/api"

const props = defineProps({
  query: {type: Object, default: {}},
  short: {type: Boolean, default: false},
})
const page = ref(1);

const getUrlQuery = (opts: object) => Object.entries(opts)
  .filter(kv => kv[1] !== null || kv[1] !== undefined)
  .map(kv => kv.join('='))
  .join('&')

const {data: submissions, error, pending, refresh} = useLazyFetch<Paginated>(
  () => `${prefix}attempts/?${getUrlQuery({...props.query, page: page.value})}`,
  {initialCache: false},
);

</script>
