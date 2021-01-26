function range(start, end, step = 1) {
  let resultado = []
  if (start < end && step > 0) {
    for (i = start; i <= end; i = i + step) {
      resultado.push(i)
    }
  } else if (start > end && step < 0) {
    for (i = start; i >= end; i = i + step) {
      resultado.push(i)
    }
  } else {
    resultado = ['Error de parametros']
  }
  return resultado
}
function sum(arr) {
  let sumador = 0
  for (num of arr) {
    sumador += num
  }
  return sumador
}
console.log(range(1, 20))
console.log(range(100, 20, -5))
console.log(range(10, 30, 3))
console.log(range(-120, 20, 5))
console.log(sum(range(1, 10)))
