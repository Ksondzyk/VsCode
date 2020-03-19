let number = 1000;
let sum = 5;

for (let i = 0; i <= 1000; i++) {
  if (i % 2 === 1) {
    sum *= i;
    console.log("Found: ", i);
    if (sum > 5000) {
      console.log("Bigger");
    } else {
      console.log("Smaller or equal");
    }
  }
}
