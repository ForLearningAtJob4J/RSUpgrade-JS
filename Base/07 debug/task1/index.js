let health = prompt('Введите число параметра "здоровье" для персонажа')
if (health < 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  //console.log(Health)
  alert(`Параметр "здоровье" равен ${health}`);
}