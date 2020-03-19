let m = 10;
let n = 12;
result = 0;
for (let i = m; i < n && n <= 50; i++) {
  if (i % 2 === 0 || !(i % 4 === 0)) {
    result += i + m + n;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  } else if (i % 5 === 0) {
    console.log(i);
  }
}
