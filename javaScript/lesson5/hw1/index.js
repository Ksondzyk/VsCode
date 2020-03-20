function getSum(arg1, arg2) {
  let result = 0;
  if (arg1 % 2 === 0 && arg2 % 2 === 0) {
    result += arg1 + arg2;
    return result;
  }
}
getSum(4, 8);
