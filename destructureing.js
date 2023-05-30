const numbers = [10, 20, 30];

const [x, y, z] = numbers;

// console.log(z, x, y);

const toArray = (num1, num2, num3) => [num1, num2, num3];

const [num1, num2, num3] = toArray(100, 200, 300);
// console.log(num1);
// console.log(num2);
// console.log(num3);

const superStar = {
    name: "Sakib Khan",
    age: 32,
    movies: ['dhakar king', 'password', 'nawab', 'goloi'],
    tag: "Super star"
}

const [first, second] = superStar.movies;
console.log(second);