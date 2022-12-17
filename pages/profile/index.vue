<template>
  <div></div>
</template>

<script setup lang="ts">
import {useAuth} from '~/api/auth'
const auth = useAuth();
if (auth.value.user == null) {
  useRouter().push('/profile/login')
} else {
  useRouter().push('/profile/' + auth.value.user.username)
}
</script>
