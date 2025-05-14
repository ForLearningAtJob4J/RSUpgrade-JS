const numbers = [10, 4, 100, -5, 54, 2];

let cubedNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
    cubedNumbers += numbers[i] ** 3;
}
console.log(cubedNumbers);

cubedNumbers = 0;
for (const number of numbers) {
    cubedNumbers += number ** 3;
}
console.log(cubedNumbers);

cubedNumbers = 0;
numbers.forEach((n) => cubedNumbers += n ** 3);
console.log(cubedNumbers);

console.log(numbers.reduce((acc, n) => acc += n ** 3, 0));