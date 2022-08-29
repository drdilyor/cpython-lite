<template>
  <form @submit.prevent="submit">
    <ui-field label="Problem ID">
      <span class="is-flex is-align-items-center">
        <input class="input mr-2" type="number" v-model="problemId" min="1" :disabled="!!props.problemId">

        <span>
          <api-view
            v-if="problemId"
            :url="`/problems/${problemId}`"
            :key="problemId"
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
      <textarea class="textarea is-family-monospace" v-model="code"></textarea>
    </ui-field>
    <button class="button is-primary" type="submit" :disabled="!valid">Submit</button>
  </form>
</template>

<script setup lang="ts">
const props = defineProps({
  problemId: {type: Number, default: 0}
})
const code = ref('');
const problemId = ref(props.problemId ? props.problemId : '');
const problemExists = ref(false)
watch(problemId, () => problemExists.value = false)
const valid = computed(() => problemExists.value && code.value)
const submit = () => {
  // TODO: requires auth
}
</script>

<style scoped>
.input {
  max-width: 12em;
}
.textarea {
  min-height: 24em;
}
</style>