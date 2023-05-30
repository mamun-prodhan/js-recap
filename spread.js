const number = [10, 20, 30, 40, 50, 60];

const newNumber = number;

const anotherNumber = [...number];

number.push(70);
number.push(80);

console.log(number);
console.log(newNumber);
console.log(anotherNumber);