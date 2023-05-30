const products = [
    {name: "phone", brands: "Iphone", price: 12333},
    {name: "shirt", brands: "easy", price: 1200},
    {name: "laptop", brands: "Lenevo", price: 50000},
    {name: "pant", brands: "denim", price: 1300},
    {name: "watch", brands: "casio", price: 600},

]

const name = products.map(product => product.name);
const brands = products.map(product => product.brands);
const price = products.map(product => product.price);

// console.log(name);
// console.log(brands);
// console.log(price);

products.forEach(product => console.log(product.name,'and the price is ', product.price));
