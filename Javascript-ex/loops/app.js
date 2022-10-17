// Ejercicio 1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for(let product of products ) {
    if(product.includes('Camiseta'))
	console.log(product);
}

// Ejercicio 2
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
alumns.forEach(i => {
	if(i.T1 && i.T2 || i.T1 && i.T3 || i.T2 && i.T3)
	i.isApproved = true 
	else i.isApproved = false
});
console.log(alumns);

// Ejercicio 3
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (const placeToTravel of placesToTravel) {
	console.log(placeToTravel);
}

// Ejercicio 4
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const key in alien) {
	if (Object.hasOwnProperty.call(alien, key)) {
		const finalAlien = alien[key];
	console.log(finalAlien);
	}
}

// Ejercicio 5
const placesToTravel1 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
for (let i = 0; i < placesToTravel1.length; i++) {
	if(placesToTravel1[i].id === 11 || placesToTravel1[i].id === 40)
	placesToTravel1.splice(i, 1)
}
console.log(placesToTravel1);

// Ejercicio 6
const toys1 = [
	{id: 5, name: 'Buzz MyYear'}, 
	{id: 11, name: 'Action Woman'}, 
	{id: 23, name: 'Barbie Man'}, 
	{id: 40, name: 'El gato con Guantes'},
	{id: 40, name: 'El gato felix'},
	]
for (let i = toys1.length-1 ; i >= 0; i--) {
	const toy = toys1[i];
	if(toy.name.includes('gato'))
	toys1.splice(toys1.indexOf(toy), 1)
}
console.log('Hola:' )
console.log(toys1)

// for (const toy of toys1) {
// 	if(toy.name.includes('gato')) {
// 		toys1.splice(toys1.indexOf(toy), 1)
// 	}
// }
// console.log(toys1)
	
// Ejercicio 7
const popularToys = [];
const bestToys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (const bestToy of bestToys) {
	if(bestToy.sellCount > 15)
	popularToys.push(bestToy)
}
console.log(popularToys);