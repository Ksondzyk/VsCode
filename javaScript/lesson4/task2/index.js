// let m = 10;
// let n = 20;
// let result;
// let sum = 1;

// do {
//   if (m % 2 === 1) {
//     sum *= m;
//   }
//   m++;
// } while (m <= n);

// result += sum;

// console.log("Result: ", result);

let m = 10;
let n = 20;
let result = 1;

for (let m = 10; m <= n; m++) {
  if (m % 2 === 1) continue;
  result *= m;
}
console.log("Result: ", result);
