<template>
  <form @submit.prevent="login" class="max-w-md mt-12 mx-auto">
    <!-- TODO: move into ui-input component -->
    <div class="grid gap-y-2" style="grid-template-columns: auto 1fr">
      <ui-input id="username" is="input" v-model="username" required :disabled="pending">
        <template #label>Username</template>
      </ui-input>
      <ui-input id="password" is="input" type="password" v-model="password" required :disabled="pending">
        <template #label>Password</template>
      </ui-input>
      <div></div>
      <div><ui-button type="submit" :disabled="pending">Submit</ui-button></div>
    </div>
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