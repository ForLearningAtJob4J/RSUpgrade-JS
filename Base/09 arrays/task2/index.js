//странная задача - создать массив, а вернуть сумму первого и последнего элемента %)
function getSumOfSequence(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr[0] + arr[n - 1];
}

console.log(getSumOfSequence(5));