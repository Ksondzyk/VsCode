for (let i = 0; i <= 1000; i++) {
  let sum = 0;
  if (i % 2 === 1) {
    console.log("Found");
    sum += i;
    let res = sum * 5;
    if (res * 5 > 5000) {
      console.log("Bigger");
      break;
    } else {
      console.log("Smaller or equal");
    }
  }
  //   console.log(sum);
}
