<template>
  <div class="columns">
    <div class="column is-offset-2-tablet is-8-tablet is-offset-4-widescreen is-4-widescreen">
      <form  class="box" @submit.prevent="submit">
        <ui-field label="Username" :message="getError('username')">
          <input class="input" type="text" v-model="username">
        </ui-field>
        <ui-field label="Password" :message="getError('password')">
          <input class="input" type="password" v-model="password">
        </ui-field>
        <button
          class="button is-primary is-fullwidth"
          :class="pending ? 'is-loading' : ''"
          :disabled="pending || !valid"
          type="submit"
          >
          Login
        </button>
        <p class="has-text-danger" v-if="getUnconsumedError()">
          {{ getUnconsumedError() }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuth, login} from '~/api/auth'

const auth = useAuth();
const username = ref('');
const password = ref('');
const error = ref(null as any);
const pending = ref(false);

const consumedErrors = new Set;
const getError = (field: string): string | undefined => {
  consumedErrors.add(field)
  if (error.value && error.value.field == field)
    return error.value.message;
}

const getUnconsumedError = () => {
  if (error.value && !consumedErrors.has(error.field))
    return error.message;
  return null;
}

const valid = computed(() => {
  return !!username.value;
})

const submit = () => {
  pending.value = true;
  login({username: username.value, password: password.value})
  .then(err => {
    error.value = err;
    if (!err) {
      useRouter().push('/profile')
    }
  })
  .finally(() => pending.value = false)
}
</script>
