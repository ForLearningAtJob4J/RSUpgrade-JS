const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return { ...this, isDomestic: isDomestic };
}

const domesticDog = makeDomestic.bind(dog, true)();
// Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// И выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

const wildBird = makeDomestic.call(bird, false);
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"

const domesticBird = makeDomestic.apply(bird, [true]);

console.log(domesticDog, wildBird, domesticBird);