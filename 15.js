/* Order array by size */
const arrayWords = [
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]

function orderBySize(entry) {
    return entry.sort( (a, b) => a.length - b.length )
}

console.log( orderBySize( arrayWords ) )