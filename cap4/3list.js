function arrayToList(arr) {
  let list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i]
    list = { value: element, rest: list }
  }
  return list
}
console.log(arrayToList([1, 2, 3]))
/*
INPUT
[1,2,3]
======================
OUTPUT
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
*/
function listToArray(list) {
  let arr = []
  for (let node = list; node; node = node.rest) {
    arr.push(node.value)
  }
  return arr
}
console.log(listToArray(arrayToList([1, 2, 3])))
/*
INPUT
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
===================
OUTPUT
[1,2,3]
*/

function prepend(element, list) {
  let arrRes = []
  arrRes.push(element)
  let arrList = listToArray(list)
  for (let i = 0; i < arrList.length; i++) {
    const element = arrList[i]
    arrRes.push(element)
  }
  return arrayToList(arrRes)
}
//O le paso la funcion a si misma para formar una lista y anteponer el valor
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}

//O le paso el valor y la lista
console.log(
  prepend(10, {
    value: 1,
    rest: {
      value: 2,
      rest: null,
    },
  })
)
/*
INPUT
element = 9
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
===================
OUTPUT
let list = {
  value: 9,
  rest: {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
    }
  }
};
*/
