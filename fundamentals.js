const numbers = [89, 35, 98, 12];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    console.log(element);
}

const superStar = {
    name: "Sakib Khan",
    age: 32,
    movies: ['dhakar king', 'password', 'nawab', 'goloi'],
    tag: "Super star"
}

const myVariable = 'movies';


console.log(superStar.name);
console.log(superStar['age']);
console.log(superStar[myVariable]);

const isEven = x => x % 2 ==0;
// console.log(isEven(3));
const addThree = (x, y, z) => x + y + z;
console.log(addThree(10, 20, 30));