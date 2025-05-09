let userText = prompt('Введите текст').trim();

const fragmentOfText = prompt('Введите слово из текста').trim();

const indexOfFragment = userText.indexOf(fragmentOfText);

alert(`Результат: ${userText.slice(0, indexOfFragment)}`);
