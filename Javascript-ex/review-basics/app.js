// Ejercicio 1
const finalCategories = [];
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
for (const movie of movies) {
    for (const category of movie.categories) {
        if(!finalCategories.includes(category))
        finalCategories.push(category)
    }
}
console.log(finalCategories);

// Ejercicio 2
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let finalVolume = [];
    for (const user of users) {
    const {favoritesSounds} = user
    const finalFavoritesSounds = Object.entries(favoritesSounds)
     for (const favoriteSound of finalFavoritesSounds) {
        finalVolume.push(favoriteSound[1].volume)
    }
}
let total = 0;
finalVolume.forEach(element => {
    total += element
});
console.log(total/finalVolume.length)
    

// Ejercicio 4
let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
function findArrayIndex(array, text) {
   for (let i = 0; i < array.length; i++) {
    if(array[i] == text) 
    return i
    else {
    return "No se ha encontrado la palabra."
    }
   }
}
 const k = findArrayIndex(animals, " # ");
console.log(k);

// Ejercicio 5
function rollDice(param) {
    return Math.floor(Math.random() * param) +1
}
const j = rollDice(6);
console.log(j);

// Ejercicio 6
const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
function swap(param, i, j) {
    if(!(i >= 0 && i < players.length) || !(j >= 0 && j < players.length))
    return "Los indices deben estar dentro del array" 
    else {
        let x = param[i] 
        param[i] = param[j]
        param[j] = x
        return param
    }
}
const s = swap(players, 2, 4);
console.log(s);
