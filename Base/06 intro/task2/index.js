let correctAnswers = 0, incorrectAnswers = 0;
let userAnswer;

userAnswer = Number(prompt("Сколько будет 2 + 2?").trim());
if (userAnswer === 4) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt("Сколько будет 2 * 2?").trim());
if (userAnswer === 4) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?").trim());
if (userAnswer === 1) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?").trim());
if (userAnswer === 12) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

userAnswer = Number(prompt("Сколько будет 2 + 2 * 2?").trim());
if (userAnswer === 6) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`)