<template>
  <form @submit.prevent="submit">
    <ui-field label="Problem ID">
      <span class="is-flex is-align-items-center">
        <input
          class="input mr-2"
          style="max-width: 12em"
          type="number"
          min="1"
          :disabled="!!props.problemId"
          v-model="problemId"
        >

        <span>
          <api-view
            v-if="problemId"
            :url="`/problems/${problemId}`"
            @done="d => problemExists = !d.error"
            >
            <template #pending>...</template>
            <template #error>Error fetching</template>
            <template v-slot="{data: prob}">
              {{ prob.title }}
            </template>
          </api-view>
        </span>
      </span>
    </ui-field>
    <ui-field label="Paste code">
      <textarea class="textarea is-family-monospace" style="min-height: 24em" v-model="code"></textarea>
    </ui-field>
    <button
      class="button is-primary"
      :class="pending ? 'is-loading' : ''"
      type="submit"
      :disabled="!valid || pending || !auth.token"
      >
      Submit
    </button>
    <p v-if="!auth.token" class="has-text-danger">Login before submitting</p>
    <p v-if="error">Something went wrong</p>
  </form>
</template>

<script setup lang="ts">
import {post} from '~/api'
import {useAuth} from '~/api/auth'

const props = defineProps({
  problemId: {type: Number, default: 0}
})

const auth = useAuth();

const code = ref('');
const problemId = ref(props.problemId || '');
const problemExists = ref(false)
const valid = computed(() => problemExists.value && code.value)
const pending = ref(false)
const error = ref(null as any)

const submit = () => {
  pending.value = true;
  error.value = null;
  post(`/problems/${problemId.value}/submit/`, {
    body: {
      source_code: code.value,
      lang: 'py',
    },
  })
  .then(() => {
    useRouter().replace(`/practice/problems/${problemId.value}/submissions`)
  })
  .catch(err => error.value = err)
  .finally(() => pending.value = false)
}

/* the following gives strange error
onMounted(() => {
  if (!auth.token)
    useRouter().push('/profile/login')
})*/
</script>
