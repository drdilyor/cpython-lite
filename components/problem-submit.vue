<template>
  <form v-if="user.user" class="grid gap-2" style="grid-template-columns: auto 1fr" @submit.prevent="submit">
    <label class="py-1 text-right" for="submit-lang">Language</label>
    <select v-model="language" class="py-1 px-2 max-w-2xl bg-transparent border-2 rounded border-gray-200 hover:border-gray-300 focus:border-primary-600 outline-none" name="submit-lang" required :disabled="pending">
      <option v-for="lang in problem.availableLanguages" :value="lang.lang">{{ langName[lang.lang] }}</option>
    </select>
    <label class="py-1 text-right" for="submit-source">Source code</label>
    <textarea v-model="source" class="py-1 px-2 font-mono border-2 border-gray-200 rounded hover:border-gray-300 focus:border-primary-600 outline-none" name="submit-source" rows="10" required :disabled="pending"></textarea>
    <div></div>
    <div>
      <ui-button type="submit" :disabled="pending">Submit</ui-button>
      <ui-error v-if="error" :error="error"></ui-error>
    </div>
  </form>
  <p v-else>
    Login to be able to submit.
  </p>
</template>

<script setup lang="ts">
import { langName } from './ui-language.vue';

const props = defineProps({
  problem: { type: Object, required: true },
  submitUrl: { type: String, required: true },
})
const emit = defineEmits({
  submit: Object,
})

const user = useUser()

const language = ref('')
const source = ref('')

const pending = ref(false)
const error = ref(null as Error | null)
const submit = async () => {
  pending.value = true
  error.value = null
  try {
    await $post<{attemptId: number}>(props.submitUrl as any, {
      body: {
        lang: language.value,
        sourceCode: source.value,
      }
    })
    emit('submit', {language: language.value, source: source.value})
  } catch (e: any) {
    error.value = e
  } finally {
    pending.value = false
  }
}

</script>