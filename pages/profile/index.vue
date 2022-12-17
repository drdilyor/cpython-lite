<template>
  <div></div>
</template>

<script setup lang="ts">
import {useAuth} from '~/api/auth'
const auth = useAuth();
if (auth.value.user == null) {
  useRouter().replace('/profile/login')
} else {
  useRouter().replace('/profile/' + auth.value.user.username)
}
</script>
