
export const apiRoot = 'https://cpython.uz/api'

type Method = 'get' | 'post'
type Endpoint = `/${string}`

export const $api = <T>(method: Method, endpoint: Endpoint, {body, query} : {body?: object, query?: object} = {}) => {
  if (method != 'get' && !body)
    console.error('$api: must provide body with this request method')
  return $fetch<T>(apiRoot + endpoint, {method, body, query})
}

export const $get = <T>(endpoint: Endpoint, opts: {query?: object} = {}) => $api<T>('get', endpoint, opts)
export const $post = <T>(endpoint: Endpoint, opts: {body: object, query?: object}) => $api<T>('post', endpoint, opts)