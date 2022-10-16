// Ejercicio 1
const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

let menorEdad = "Usuarios menores de edad: ";
let mayorEdad = "Usuarios mayores de edad: ";
for(i = 0; i < users.length; i++) {
    if(users[i].years < 18)
    menorEdad = menorEdad.concat(users[i].name, ' ');
    else if(users[i].years >= 18)
    mayorEdad = mayorEdad.concat(users[i].name, ' ');
}
console.log(menorEdad);
console.log(mayorEdad);

// Ejercicio 2
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
console.log(foodSchedule);
let j = 0;
for(i = 0; i < foodSchedule.length; i++) {
  if(foodSchedule[i].isVegan != true) {
  foodSchedule[i].name = fruits[j]; j++;
  }
}
console.log(foodSchedule);

// Ejercicio 3
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let array1 = [];
let array2 = [];
let array3 = [];
for(i = 0; i < movies.length; i++) {
  if(movies[i].durationInMinutes < 100)
  array1.push(movies[i].name);
  else if(movies[i].durationInMinutes > 100 && movies[i].durationInMinutes < 200)
  array2.push(movies[i].name);
  else 
  array3.push(movies[i].name);
}
console.log(`${array1} \n ${array2} \n ${array3}`);

// Ejercicio 4
const products1 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
let sellCount1 = 0;
for(i = 0; i < products1.length; i++) {
  sellCount1 = products1[i].sellCount + sellCount1;
}
console.log(sellCount1);

// Ejercicio 5
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
let total = 0;
for(i = 0; i < products.length; i++) {
  total = products[i].sellCount + total;
}
console.log(total/products.length);

// Ejercicio 6
const goodProducts = [];
const badProducts = [];
const products2 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
for(i = 0; i < products2.length; i++) {
  if(products2[i].sellCount > 20)
  goodProducts.push(products2[i].name);
  else
  badProducts.push(products2[i].name);
}
console.log(goodProducts);
console.log(badProducts);