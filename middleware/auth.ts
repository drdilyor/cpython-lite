import {useAuth} from '~/api/auth'

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth();
  if (!auth.value.token)
    return navigateTo('/profile/login')
})
