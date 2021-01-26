function reverseArray(array) {
  let reverseArray = []
  for (i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i])
  }
  return reverseArray
}
function reverseArrayInPlace(array) {
  let pasajeRam
  let validacionAllArray = 0
  do {
    for (i = 0; i < array.length; i++) {
      if (i == 0) {
        validacionAllArray = 0
      }
      if (array[i] < array[i + 1]) {
        pasajeRam = array[i]
        array[i] = array[i + 1]
        array[i + 1] = pasajeRam
        validacionAllArray = 0
      } else {
        validacionAllArray++
      }
    }
  } while (validacionAllArray != array.length)
  return array
}
console.log(reverseArray(['A', 'B', 'C']))
console.log(reverseArrayInPlace([-10, 5, 250, 1, 8, -2, 4, 100, 10]))
