let m = 10;
let n = 12;
let sum = 0;
let result = 0;
for (let i = m; i < n && n <= 50; i++) {
  if (i % 2 === 0 || !(i % 4 === 0)) {
    sum += i + m + n;
  }
  if (i % 3 === 0) {
    sum -= i;
  }
  if (i % 4 === 0) {
    sum *= i;
  }
  if (i % 5 === 0) {
    console.log(i);
  }
  result += sum;
}
