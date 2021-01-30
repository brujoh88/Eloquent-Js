function filter(array, test) {
  let passed = []
  for (let element of array) {
    if (test(element)) {
      passed.push(element)
    }
  }
  return passed
}

console.log(filter(SCRIPTS, (script) => script.living))
// → [{name: "Adlam", …}, …]

//===========================================================

console.log(SCRIPTS.filter((s) => s.direction == 'ttb'))
// → [{name: "Mongolian", …}, …]

//===========================================================

function map(array, transform) {
  let mapped = []
  for (let element of array) {
    mapped.push(transform(element))
  }
  return mapped
}
let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl')
console.log(map(rtlScripts, (s) => s.name))
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

//===========================================================

function reduce(array, combine, start) {
  let current = start
  for (let element of array) {
    current = combine(current, element)
  }
  return current
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))
// → 10

console.log([1, 2, 3, 4].reduce((a, b) => a + b))
// → 10

//===========================================================

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from)
  }, 0)
}

console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a
  })
)

// → {name: "Han", …}

//===========================================================

let biggest = null
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script
  }
}
console.log(biggest)
// → {name: "Han", …}

//===========================================================

function average(array) {
  return array.reduce((a, b) => a + b) / array.length
}

console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
)
// → 1165
console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
)
// → 204

//===========================================================

/* 
  {
   name: "Coptic",
   ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
   direction: "ltr",
   year: -200,
   living: false,
   link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  }
  */
