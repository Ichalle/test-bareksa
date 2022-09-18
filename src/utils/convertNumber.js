export function sumArray (data) {
  return data?.length > 0 ? data.reduce((a, b) => a + b, 0) : 0
}