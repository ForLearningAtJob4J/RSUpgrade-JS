
function getDivisorsCount(n) {
  if (n === undefined || isNaN(n)) {
    return NaN;
  }

  if (!Number.isInteger(n) || n <= 0) {
    alert('number должен быть целым положительным числом!')
    return NaN;
  }

  let divisorsCount = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorsCount++;
    }
  }

  return divisorsCount;
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
