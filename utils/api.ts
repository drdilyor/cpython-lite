
export const apiHostRoot = 'https://cpython.uz'
export const apiRoot = 'https://cpython.uz/api'

type Method = 'get' | 'post'
type Endpoint = `/${string}` | `#${string}`

export const $api = <T>(method: Method, endpoint: Endpoint, {body, query} : {body?: object, query?: object} = {}) => {
  if (method != 'get' && !body)
    console.error('$api: must provide body with this request method')
  const url = endpoint[0] == '/' ? `${apiRoot}${endpoint}` : `${apiHostRoot}/${endpoint.slice(1)}`
  const headers: {[k: string]: string} = {}
  const token = useToken()
  if (token.value)
    headers['Authorization'] = 'Token ' + token.value
  return $fetch<T>(url, {method, body, query, headers})
}

export const $get = <T>(endpoint: Endpoint, opts: {query?: object} = {}) => $api<T>('get', endpoint, opts)
export const $post = <T>(endpoint: Endpoint, opts: {body: object, query?: object}) => $api<T>('post', endpoint, opts)