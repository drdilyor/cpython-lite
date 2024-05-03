<template>
  <form @submit.prevent="login" class="max-w-screen-sm mt-12 px-4 mx-auto space-y-2">
    <!-- TODO: move into ui-input component -->
    <div class="flex flex-col sm:flex-row">
      <ui-input id="username" is="input" breakpoint="sm" v-model="username" required :disabled="pending"
        :errors="formError.username.value">
        <template #label>Username</template>
      </ui-input>
    </div>
    <div class="flex flex-col sm:flex-row">
      <ui-input id="password" is="input" breakpoint="sm" type="password" v-model="password" required :disabled="pending"
        :errors="formError.password.value">
        <template #label>Password</template>
      </ui-input>
    </div>
    <div class="flex flex-col sm:flex-row">
      <ui-input-label></ui-input-label>
      <div>
        <ui-button type="submit" :disabled="pending">Submit</ui-button>
        <div v-for="error in formError.nonFieldErrors.value" class="text-red-700">
          {{ error }}
        </div>
      </div>
    </div>
    <ui-error v-if="error && !formError.found" :error="error"></ui-error>
  </form>
</template>

<script setup lang="ts">
const router = useRouter()

const username = ref('')
const password = ref('')
const pending = ref(false)
const error = ref(null as { data?: any } & Error | null)

const formError = useFormError(error, ['username', 'password'])

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