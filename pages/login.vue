<template>
  <form @submit.prevent="login" class="max-w-md mt-12 mx-auto" :disabled="pending">
    <!-- TODO: move into ui-input component -->
    <div class="grid gap-2 py-2" style="grid-template-columns: auto 1fr">
      <label class="flex items-center" for="username">Username</label>
      <input class="py-1 px-2 border-2 border-gray-200 rounded hover:border-gray-300 focus:border-primary-600 outline-none" id="username" type="text" v-model="username" required>
      <label class="flex items-center" for="password">Password</label>
      <input class="py-1 px-2 border-2 border-gray-200 rounded hover:border-gray-300 focus:border-primary-600 outline-none" id="password" type="password" v-model="password" required>
    </div>
    <ui-button type="submit">Submit</ui-button>
    <ui-error v-if="error" :error="error"></ui-error>
  </form>
</template>

<script setup lang="ts">
const router = useRouter()

const username = ref('')
const password = ref('')
const pending = ref(false)
const error = ref(null as Error | null)

const login = () => {
  pending.value = true
  error.value = null
  loginUser(username.value, password.value)
  .then(() => router.go(-1))
  .catch((e) => error.value = e)
  .finally(() => pending.value = false)
}
</script>