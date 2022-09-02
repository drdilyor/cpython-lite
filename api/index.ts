import {useAuth} from '~/api/auth'

export interface Paginated<T = any> {
  count: number
  total: number
  pagesCount: number
  data: T[]
}

export const prefix = 'https://cpython.uz/angular/'

const sanitize = (url: string) => {
  if (url[0] == '/') url = url.slice(1)
  return url
}

export const getHeaders = (): HeadersInit => {
  const token = useAuth().value.token
  if (token) return {'Authorization': 'Token ' + token}
  return {}
}
export const headersRef = computed(getHeaders)

export const get = (url: string, {headers, ...opts}: RequestInit = {}) =>
  fetch(prefix + sanitize(url), {
    headers: {
      ...getHeaders(),
      ...headers,
    },
    ...opts,
  })

interface ApiRequestInit extends RequestInit {
  body: any
}

export const post = (url: string, {body, headers = {}, ...opts}: ApiRequestInit) =>
  fetch(prefix + sanitize(url), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...getHeaders(),
      ...headers,
    },
    ...opts,
  })


export default {
  prefix,
  get,
  post,
}
