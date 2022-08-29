import {useAuth} from '~/api/auth'

export interface Paginated<T = any> {
  count: number
  total: number
  pagesCount: number
  data: T[]
}

export const prefix = 'http://193.164.17.14:8008/angular/'

const sanitize = (url: string) => {
  if (url[0] == '/') url = url.slice(1)
  return url;
}

export const getHeaders = (): object => {
  const token = useAuth().value.token
  console.log({token})
  if (token) return {'Authorization': 'Token ' + token}
  return {};
}

export const get = (url: string, opts: RequestInit) =>
  fetch(prefix + sanitize(url), opts)

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
