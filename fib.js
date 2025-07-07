function fib(n) {
  let a = -1,
    b = 1,
    c;
  for (let i = 1; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))