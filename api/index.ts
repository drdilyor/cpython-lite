export const prefix = 'http://193.164.17.14:8008/angular/'

export const get = (url:string, ...opts) =>
  fetch(prefix + url)

export default {
  prefix,
  get,
}
