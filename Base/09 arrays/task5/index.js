// так как не указано, что оценки д.б. целочисленные, то не проверяем на это )
function askClientToGiveEstimation() {
    const answer = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10 ?').trim());
    if (typeof answer === 'number' && answer >= 1 && answer <= 10)
        return answer;
    else
        return undefined;
}

const clientsEstimations = [];

for (let i = 0; i < 5; i++) {
    const estimate = askClientToGiveEstimation();
    if (estimate != undefined) {
        clientsEstimations.push(estimate);
    }
}

const goodEstimations = clientsEstimations.filter((v) => v > 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${clientsEstimations.length - goodEstimations}`);
