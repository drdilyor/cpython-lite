<template>
  <form @submit.prevent="login" class="max-w-screen-sm mt-12 px-4 mx-auto">
    <!-- TODO: move into ui-input component -->
    <div class="flex flex-col sm:grid gap-y-2" style="grid-template-columns: auto 1fr">
      <ui-input id="username" is="input" breakpoint="sm" v-model="username" required :disabled="pending">
        <template #label>Username</template>
        <template #bottom v-if="formError.username">{{ formError.username.join(' ') }}</template>
      </ui-input>
      <ui-input id="password" is="input" breakpoint="sm" type="password" v-model="password" required :disabled="pending">
        <template #label>Password</template>
        <template #bottom v-if="formError.password">{{ formError.password.join(' ') }}</template>
      </ui-input>
      <div class="hidden lg:block"></div>
      <div><ui-button type="submit" :disabled="pending">Submit</ui-button></div>
      <div class="hidden lg:block"></div>
      <div v-if="formError.non_field_errors">{{ formError.non_field_errors.join(' ') }}</div>
    </div>
    <ui-error v-if="error && !isFormError" :error="error"></ui-error>
  </form>
</template>

<script setup lang="ts">
const router = useRouter()

const username = ref('')
const password = ref('')
const pending = ref(false)
const error = ref(null as { data?: any } & Error | null)

const fieldNames = ["username", "password"]

const formError = computed(() => {
  if (!error.value) return {}
  if (!error.value.data) return {}
  for (const fieldName of fieldNames) {
    if (error.value.data[fieldName]) return error.value.data
  }
  if (error.value.data.non_field_errors) return error.value.data
  return {}
})
const isFormError = computed(() => Object.keys(formError.value).length > 0)

const login = () => {
  pending.value = true
  error.value = null
  loginUser(username.value, password.value)
  .then(() => router.go(-1))
  .catch((e) => {
    error.value = e
  })
  .finally(() => pending.value = false)
}
</script>