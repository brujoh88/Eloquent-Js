const sizeY = 8
const sizeX = 8
let base = ''
for (let i = 0; i < sizeY; i++) {
  for (let j = 0; j < sizeX; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        base += '#'
      } else {
        base += ' '
      }
    } else {
      if (j % 2 == 0) {
        base += ' '
      } else {
        base += '#'
      }
    }
  }
  base += '\n'
}
console.log(base)
