let userString = prompt('Введите текст для обрезки').trim();

let startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки').trim());

let endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки').trim());

alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`);
