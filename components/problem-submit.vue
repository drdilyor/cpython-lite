<template>
  <form v-if="user.user" class="grid gap-y-2" style="grid-template-columns: auto 1fr" @submit.prevent="submit">
    <ui-input is="select" id="language" v-model="language" required>
      <template #label>Language</template>
      <template #control-inner>
        <option v-for="lang in problem.availableLanguages" :value="lang.lang">{{ langName[lang.lang] }}</option>
      </template>
    </ui-input>
    <ui-input is="textarea" id="source" v-model="source" :control-attrs="{rows: 10, class: 'font-mono'}">
      <template #label>Source</template>
    </ui-input>
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