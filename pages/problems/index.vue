<template>
  <div>
    <ui-pagination
      v-if="totalPages != -1"
      :cur-page="page"
      :total-pages="totalPages"
      @set-page="newPage => page = newPage"
      />
    <api-view :url="'/problems/?page=' + page" ref="view"
      @done="onApiChange">
      <template v-slot="{data}">
        <problem-list :list="data.data"></problem-list>
      </template>
    </api-view>
  </div>
</template>

<script setup lang="ts">
import {Ref} from 'vue'

const page = ref(1)
const totalPages = ref(-1)
const view: Ref<any> = ref(null)
const onApiChange = ({data}: any) => {
  console.log({...data})
  totalPages.value = data.pagesCount
}

</script>