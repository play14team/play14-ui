export function capitalizeFirstLetter(value: string | undefined) {
  if (value) return value.charAt(0).toUpperCase() + value.slice(1)
  return ""
}
