export const useToken = () => useState('token', () => {
  return localStorage.getItem('authToken') || null
})

export const setToken = (token: string) => {
  useToken().value = token
  localStorage.setItem('authToken', token)
}

const user = reactive({
  pending: false as boolean,
  error: null as any,
  user: JSON.parse(localStorage.getItem('authUser') || 'null'),
})

export const fetchUser = async () => {
  user.pending = true
  user.error = null
  const token = useToken()
  try {
    if (!token.value) {
      user.user = null
      localStorage.setItem('authUser', JSON.stringify(user.user))
      return
    }
    const data: any = await $get('/me')
    user.error = null
    user.user = data
    localStorage.setItem('authUser', JSON.stringify(user.user))
  } catch (e: any) {
    if (e.statusCode && 400 <= e.statusCode && e.statusCode < 500) {
      token.value = null
      // logged out, todo: notify
    }
    user.error = e
    user.user = null
    localStorage.setItem('authUser', JSON.stringify(null))
  } finally {
    user.pending = false
  }
}

export const useUser = () => user

export const loginUser = async (username: string, password: string) => {
  const res: {token?: string} = await $post('#api-token-auth/', { // last slash in url is important!
    body: {username, password}
  })
  if (res.token) {
    setToken(res.token)
    await fetchUser()
  }
  else throw createError({ statusCode: 400, data: res })
}

export const logoutUser = async () => {
  setToken('')
  await fetchUser()
}
