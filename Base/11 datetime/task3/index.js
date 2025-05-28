function addDays(date, daysToAdd) {
    date.setTime(date.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    return date;
}

// В задаче сказано: "Функция addDays() должна возвращать обновленную дату".
// Значит нужно не далать новый объект, а изменить тот, что передан в параметрах
// ниже представлены элементы доказательной медицины )))

let date1 = new Date();
let date2 = addDays(date1, 3);

console.log(date2);
console.log(date1 === date2);