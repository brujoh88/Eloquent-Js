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

console.log(range(10, 20, 5)) // [1,2,3,4,5,6,7,8,9,10]
console.log(sum(range(1, 10)))
