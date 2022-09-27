let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

const character = {name: 'Jack Sparrow', age:10};
character.age = 25;
console.log(character.age);

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log('Soy '+ firstName + lastName + ', tengo ' + age + ' años y me gustan los lobos' );

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
console.log(globalBasePrice);
car1.finalPrice = car1.basePrice + globalBasePrice;
console.log(car1.finalPrice);
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2.finalPrice);

let mult = 10*5;
console.log(mult);

let div = 10/2;
console.log(div);

let div2 = 15%9;
console.log(div2);

let p = 10;
let j = 5;
let o = p + j;
console.log(o);

let c = 10;
let m = 5;
let i = c * m;
console.log(i);

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1[0] = "IRONMAN";
console.log(avengers1[0])
;
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers3.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[4]);

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0] + " " + rickAndMortyCharacters2[4]);

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const array = rickAndMortyCharacters3.slice(1, 2);
console.log(rickAndMortyCharacters3);

const number1 = 10;
const number2 = 20;
const number3 = 2;
if('number2 / number1 = number3'){
    console.log("number2 dividido entre number1 es igual a 2");
}

if('number1 !=== number2'){
    console.log("number1 es estrictamente distinto a number2");
}

if('number3 != number1'){
    console.log("number3 es distinto number1");
}

if('number3 * 5 = number1'){
    console.log("number3 por 5 es igual a number1");
}

if('number3 * 5 = number1' && 'number1 * 2 = number2' ){
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if('number2 / 2 = number1' && 'number1 / 5 = number3'){
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

for(let n = 0; n <= 9; n++) {
    console.log(n)
}

for(let b = 0; b <= 9; b++)  {
    if ((b % 2) === 0) console.log(b)
}

for(let w = 0; w <= 10; w++){
    if (w === 10) console.log("Dormido")
    else console.log("Intentando dormir")
}
