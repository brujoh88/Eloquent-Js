function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to
      })
    ) {
      return script
    }
  }
  return null
}
function countBy(items, groupName) {
  let counts = []
  for (let item of items) {
    let name = groupName(item)
    let known = counts.findIndex((c) => c.name == name)
    if (known == -1) {
      counts.push({ name, count: 1 })
    } else {
      counts[known].count++
    }
  }
  return counts
}

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.direction : 'none'
  }).filter(({ name }) => name != 'none')
  console.log(scripts)

  let total = scripts.reduce((n, { count }) => n + count, 0)
  if (total == 0) return 'No scripts found'

  return scripts.reduce((a, b) => {
    return a.count > b.count ? a : b
  }).name
}

console.log(dominantDirection('Hello!'))
// → ltr
console.log(dominantDirection('Hey, مساء الخير'))
// → rtl
