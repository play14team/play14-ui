export function concatArrays<T>(players: T[][]) {
  return [...new Set(players.flat())]
}
