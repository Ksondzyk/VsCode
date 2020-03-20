function compareSums(a, b, c, d) {
  let from = 0;
  let to = 0;
  let result = from > to ? true : false;
  for (let i = a; i <= b; i++) {
    from += i;
  }
  for (let i = c; i <= d; i++) {
    to += i;
  }
  return function(from, to) {
    return result;
  };
}

compareSums(5, 8, 9, 12);
