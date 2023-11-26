export function deduplicate<T>(...arrays: T[][]) {
  return [...new Set(arrays.flat())]
}
