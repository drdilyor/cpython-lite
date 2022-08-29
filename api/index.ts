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
export const get = (url: string, ...opts) =>
  fetch(prefix + sanitize(url), ...opts)

export default {
  prefix,
  get,
}
