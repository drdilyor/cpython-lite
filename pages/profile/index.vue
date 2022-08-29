<template>
  <div class="columns">
    <div class="column">
      <div class="box">
        <div v-if="auth.token">
          {{ auth.user.username }}
        </div>
        <div v-else="">
          Not logged in
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuth, login} from '~/api/auth'
const auth = useAuth();
</script>
