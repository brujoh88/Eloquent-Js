function loop(value, funcTest, funcActua, funcBody) {
  for (let i = value; funcTest(i); i = funcActua(i)) {
    funcBody(i)
  }
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
)
