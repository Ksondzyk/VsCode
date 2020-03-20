function getPrimes(arg) {
  let result = 1;
  for (let i = 1; i < arg; i++) {
    result = i;
    // console.log(result);
    if (result / result === 1 && result % 2 === 0) {
      console.log(result);
    }
  }
}

getPrimes(18);
