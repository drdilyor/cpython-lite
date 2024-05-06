import { computed } from 'vue'

const updatedParams: Record<string, string | null | undefined> = {}  // hack

export function useQueryParam<T>(name: string, def: T) {

  const router = useRouter()
  let value = ref<T>(def)

  const initFromRouter = () => {
    let deser: any

    const init = router.currentRoute.value.query[name]
    if (Array.isArray(init) && init.length != 0 && init[0] !== null) {
      // note: no support for multiple parameters of same name
      try {
        deser = JSON.parse(init[0])
      } catch (e) { }
    } else if (!Array.isArray(init) && init !== null && init !== undefined) {
      try {
        deser = JSON.parse(init)
      } catch (e) { }
    }

    if (deser !== undefined) {
      if (typeof def != typeof deser) {
        console.warn('query param has a different type than default:', name, deser)
      }
      if (value.value !== deser) {
        value.value = deser
      }
    } else {
      value.value = def
    }

  }

  initFromRouter()
  watch(router.currentRoute, () => {
    initFromRouter()  
  })

  return computed({
    get() { return value.value },
    async set(x) {
      value.value = x
      updatedParams[name] = x === def ? undefined : JSON.stringify(x)
      await router.replace({
        query: { ...router.currentRoute.value.query, ...updatedParams }
      })
      delete updatedParams[name]
    }
  })
}

