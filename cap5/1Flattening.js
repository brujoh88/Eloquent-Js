let arrays = [[1, 2, 3], [4, 5], [6]]
const unirArr = (a, b) => {
  return a.concat(b)
}
console.log(
  arrays.reduce((a, b) => {
    return a.concat(b)
  })
)
