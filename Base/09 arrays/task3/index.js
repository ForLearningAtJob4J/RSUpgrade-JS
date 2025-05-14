const coffees = ['Latte', 'Cappuccino', 'Americano'];

let userInput = prompt('Поиск кофе по названию:').trim();
userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

const pos = coffees.findIndex((s) => s === userInput);
if (pos < 0) {
  alert('К сожалению, такого вида кофе нет в наличии');
} else {
  alert(`Держите ваш любимый кофе ${coffees[pos]}. Он ${pos + 1}-й по популярности в нашей кофейне.`);
}
