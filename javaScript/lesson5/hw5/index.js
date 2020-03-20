function compareSums(a, b, c, d) {
  let from = 0;
  let to = 0;
  for (let i = a; i <= b; i++) {
    from += i;
  }
  for (let i = c; i <= d; i++) {
    to += i;
  }
  return function sum(from, to) {
    if (from > to) {
      return !!from;
    } else {
      return !!to;
    }
  };
}

const result = compareSums(5, 8, 9, 12);
console.log(result);
