const isEven = (num) => {
  if (num < 0) {
    return null
  } else if (num > 1) {
    return isEven(num - 2)
  } else if (num == 0) {
    return true
  } else {
    return false
  }
}
console.log(isEven(8))
