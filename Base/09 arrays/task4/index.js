const coffees = ['Latte', 'Cappuccino', 'Americano'];

const prices = [1.5, 1, 2];

const updatedPrices = prices.map(e => e * 1.5);

updatedPrices.forEach((price, i,) => alert(`Кофе ${coffees[i]} сейчас стоит ${price}`));