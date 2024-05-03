export function useFormError<T extends string>(error: Ref<any>, fieldNames: readonly T[]) {
  const res: Record<T, ComputedRef<string[]>> = {} as any
  const found = computed(() => {
    if (typeof error.value == 'object' && error.value != null && error.value.name == 'FetchError') {
      const keys = Object.keys(error.value.data)
      if (fieldNames.some(field => keys.includes(field)))
        return true
      if (keys.includes('non_field_errors')) return true
    }
    return false
  })
  const nonFieldErrors = computed(() => {
    if (!found.value) return []
    return error.value.data['non_field_errors'] || []
  })
  const rawData = computed(() => {
    if (!found.value) return null
    return error.value.data
  })
  for (const name of fieldNames) {
    res[name] = computed(() => {
      if (!found.value) return []
      return error.value.data[name] || []
    })
  }
  return {...res, found, nonFieldErrors, rawData}
}