<template>
  <slot v-if="d.error !== null" name="error">
    <api-view-error :error="d.error" :fetchData="fetchData" />
  </slot>

  <slot v-else-if="d.response !== null && !d.response.ok" name="error">
    <api-view-error :response="d.response" :data="d.data" :fetchData="fetchData" />
  </slot>

  <slot v-else-if="d.pending" name="pending">
    <api-view-pending />
  </slot>

  <slot v-else :data="d.data"></slot>
</template>

<script setup lang="ts">
import api from '~/api'

interface ApiState<T> {
  pending: boolean;
  response: Response | null;
  error: Error | null;
  data: T | {};
}

const emit = defineEmits(['done'])

const props = defineProps({
  url: {type: String, required: true},
  autoload: {type: Boolean, default: true},
})

const d : ApiState<any> = reactive({
  pending: false,
  response: null,
  error: null,
  data: {},
})

const fetchData = () => {
  if (d.pending) {
    console.warn("Attempt to fetch before previous finishes");
    return;
  }
  d.pending = true
  d.response = null
  d.error = null
  d.data = {}
  api.get(props.url)
  .then(res => {
    d.response = res;
    return res.json();
  })
  .then(data => d.data = data)
  .catch(err => d.error = err)
  .finally(() => {
    d.pending = false
    emit('done', d)
  })
}

onBeforeMount(() => {
  if (props.autoload)
    fetchData()
})

watch(props, () => {
  fetchData()
})

</script>
