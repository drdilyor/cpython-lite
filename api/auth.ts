import {post} from '~/api/index'

const localStorageKey = 'auth'

export const useAuth  = () => useState<{
  token: null|string,
  user: any,
}>('auth', () => {
  const val = localStorage.getItem(localStorageKey)
  if (val) return JSON.parse(val)
  return {token: null, user: null}
})

export interface Credentials {
  username: string
  password: string
}

interface LoginResponse {
  user: {
    id: number
    username: string
    firstName: string
    lastName: string
    isSuperUser: boolean
    avatar: string
    token: string
  }
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
    const json: LoginResponse  = await res.json();
    if (!json.success)
      return json.error
    const auth = useAuth();
    auth.value.token = json.user.token;
    auth.value.user = json.user;
    save();
    return false;
  } catch (e) {
    return e;
  }
}
