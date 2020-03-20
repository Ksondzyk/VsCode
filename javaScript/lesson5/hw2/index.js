function getPrimes(arg) {
  let result = 1;
  for (let i = 1; i <= arg; i++) {
    result = i;
    if (result / result === 1 && result != 1) {
      console.log(result);
    }
  }
}

getPrimes(18);
