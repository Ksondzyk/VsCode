let sum = 0;
let res2;
let res;
let res1;
for (let i = 0; i < 1000; i++) {
  sum += i;
  res2 = sum % 1234;
  res1 = sum / 1234;
  res = res1 < res2;
}

console.log(!!res);
