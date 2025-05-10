
function getName1(name) {
  return `Имя равно ${name}`
}

const getNameExpression = function (name) {
  return `Имя равно ${name}`
}

const getNameArrowFunction = (name) => `Имя равно ${name}`;

console.log(getName1('Карл'));
console.log(getNameExpression('Клара'));
console.log(getNameArrowFunction('Дуся'));