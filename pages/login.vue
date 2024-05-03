<template>
  <form @submit.prevent="login" class="max-w-screen-sm mt-12 px-4 mx-auto space-y-2">
    <div class="flex flex-col sm:grid gap-y-2" style="grid-template-columns: auto 1fr">

      <ui-input id="username" is="input" breakpoint="sm" v-model="username" required :disabled="pending"
        :errors="formError.username.value">
        <template #label>Username</template>
      </ui-input>
      
      <ui-input id="password" is="input" breakpoint="sm" type="password" v-model="password" required :disabled="pending"
        :errors="formError.password.value">
        <template #label>Password</template>
      </ui-input>

      <ui-input-label></ui-input-label>
      <div>
        <ui-button type="submit" :disabled="pending">Submit</ui-button>
        <div v-for="error in formError.nonFieldErrors.value" class="text-red-700">
          {{ error }}
        </div>
        <ui-error v-if="error && !formError.found" :error="error"></ui-error>
      </div>
    </div>
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