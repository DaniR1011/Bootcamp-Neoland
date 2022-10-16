// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io';
const consButton = document.querySelector('button');
const button = document.createElement('button')
const input = document.querySelector('input')
const div = document.createElement('div')
button.addEventListener('click', () => {
    fetch(`${baseUrl}${input.value}`)
    .then(response => response.json())
    .then(({country: countries, name}) => {
        let p = `<p> The ${name} has a ${countries[0].probability} percent change of being from ${countries[0].country_id} and a 
        ${countries[1].probability} percent chance of being from ${countries[1].country_id}</p>`
        button.className = 'delete-p'
        button.innerHTML = 'X'
        document.body.appendChild(div)
        div.innerHTML = p
        div.appendChild(button)
        input.value = ''
    })
})
button.addEventListener('click', (ev) => {
    div.remove()
})

