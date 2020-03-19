// let m = 10;
// let n = 20;
// let result = 1;

// do {
//   if (m % 2 === 1) {
//     result *= m;
//   }
//   m++;
// } while (m <= n);

// console.log("Result: ", result);


let m = 3;
let n = 9;
const m = 3;
const n = 9;
let result = 1;

do {
  if (m % 2 === 1) {
    result *= m;
for (let i = m; i <= n; i++) {
  if (i % 2 === 1) {
    result *= i;
  }
  m++;
} while (m <= n);

}
console.log("Result: ", result);

