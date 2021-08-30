const fib = (n) => {
  let a = 0;
  let b = 1;
  let c;
  let i;
  if (n == 0) return a;
  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

module.exports = fib;
