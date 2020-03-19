let m = 10;
let n = 12;
let result = 0;
let res = 0;
for (let i = m; i < n && n <= 50; i++) {
  result += res;
  if (i % 2 === 0 || !(i % 4 === 0)) {
    res += i + m + n;
  } else if (i % 3 === 0) {
    res -= i;
  } else if (i % 4 === 0) {
    res *= i;
  }
  if (i % 5 === 0) {
    console.log(i);
  }
}
