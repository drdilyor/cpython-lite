import {post} from '~/api/index'

export const useAuth = () => useState('auth', () => ({
  token: null as string|null,
  user: null as any,
}))

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
}

export const login = async (credentials: Credentials) => {
  try {
    const res = await post('/token-auth/', {
      body: credentials,
    })
    const json: LoginResponse  = await res.json();
    if (!json.success)
      return true;
    const auth = useAuth();
    auth.value.token = json.user.token;
    auth.value.user = json.user;
    return false;
  } catch (e) {
    return e;
  }
}
