function every(array, test) {
  for (const iterator of array) {
    if (!test(iterator)) return false
  }
  return true
}

console.log(every([1, 3, 5], (n) => n < 10))
// → true
console.log(every([180, 3, 16], (n) => n < 10))
// → false
console.log(every([], (n) => n < 10))
// → true

function every(array, test) {
  return !array.some((element) => !test(element))
}

console.log(every([1, 3, 5], (n) => n < 10))
// → true
console.log(every([180, 3, 16], (n) => n < 10))
// → false
console.log(every([], (n) => n < 10))
// → true
