
function getSumOfNumbers(number, type = 'odd') {
  if (Number(number) === NaN) {
    return NaN;
  }

  let sum = 0;

  for (let i = 0; i <= number; i++) {
    let isOdd = i % 2 === 1;
    if (type === '' || isOdd && type === 'odd' || !isOdd && type === 'even') {
      sum += i;
    }
  }

  return sum;
}

console.log(getSumOfNumbers(10, "odd"));  // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, ""));     // 55