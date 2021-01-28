function deepEqual(valueOne, valueTwo) {
  let resp
  if (
    typeof valueOne == 'object' &&
    typeof valueTwo == 'object' &&
    valueOne != null &&
    valueTwo != null
  ) {
    keysOneObj = Object.keys(valueOne)
    keysTwoObj = Object.keys(valueTwo)
    valueOneObj = Object.values(valueOne)
    valueTwoObj = Object.values(valueTwo)
    const SIZE_ARRAY = keysOneObj.length
    const SIZE_ARRAY2 = keysTwoObj.length
    if (SIZE_ARRAY != SIZE_ARRAY2) return false
    for (let i = 0; i < SIZE_ARRAY; i++) {
      if (keysOneObj[i] != keysTwoObj[i]) {
        return false
      }
      resp = deepEqual(valueOneObj[i], valueTwoObj[i])
      if (!resp) return false
    }
    return resp
  } else if (valueOne == valueTwo) {
    return true
  } else {
    return false
  }
}
let obj = { here: { is: 'an' }, object: 2 }
let obj2 = { name: 1, newObj: { num: { other: 2 } } }
let obj3 = { name: 1, newObj: { num: { other: 200 } } }
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj2, obj3))
console.log(deepEqual({}, null))
console.log(deepEqual(null, {}))
console.log(deepEqual('{}', '{}'))
console.log(deepEqual('{}', 'a'))
