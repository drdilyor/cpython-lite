import {post} from '~/api/index'

interface User {
  id: number
  username: string
  firstName: string
  lastName: string
  isSuperUser: boolean
  avatar: string
  token: string
}

interface AuthState {
  token: string | null,
  user: User | null,
}

const localStorageKey = 'auth'

export const useAuth = () => useState<AuthState>('auth', () => {
  const val = localStorage.getItem(localStorageKey)
  if (val) return JSON.parse(val)
  return {token: null, user: null}
})

export interface Credentials {
  username: string
  password: string
}

interface LoginResponse {
  user: User
  success: boolean
  error: {
    field: string
    message: string
  }
}

const save = () => {
  localStorage.setItem(localStorageKey, JSON.stringify(useAuth().value))
}

export const login = async (credentials: Credentials) => {
  try {
    const res = await post('/token-auth/', {
      body: credentials,
    })
    const json: LoginResponse  = await res.json()
    if (!json.success)
      return json.error
    const auth = useAuth()
    auth.value = {
      token: json.user.token,
      user: json.user,
    }
    save()
    return false
  } catch (e) {
    return e
  }
}

export const logout = () => {
  const auth = useAuth()
  auth.value = {
    token: null,
    user: null,
  }
  save()
}
