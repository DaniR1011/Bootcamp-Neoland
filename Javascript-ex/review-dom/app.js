// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');

for (const country of countries) {
    let li = document.createElement('li');  
    li.innerHTML = 'Country';
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const x = document.querySelector('.fn-remove-me');
x.remove ();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const y = document.querySelector('div[data-function="printHere"]');
const ul3 = document.createElement('ul3');
for (const car of cars) {
    let li = document.createElement('li');
    li.innerHTML = 'Car';
    ul3.appendChild(li);
}
y.appendChild(ul3);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];
const countries3 = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
 ];
for (const country2 of countries3) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let img = document.createElement('img');
    h4.innerHTML = country2.title;
    img.src = country2.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const button = document.createElement('button');
button.innerHTML = 'Delete last element';
document.body.appendChild(button);

button.addEventListener('click', ev => {
    const finalDiv = document.querySelectorAll('div')
    const lastDiv = finalDiv[finalDiv.length-1]
    document.body.removeChild(lastDiv)    
    }   
)
    
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.
 const button1 = document.querySelectorAll('li')
 for (const singleButton of button1) {
     const finalbutton = document.createElement('button')
     finalbutton.innerHTML = 'Remove li'
     singleButton.appendChild(finalbutton)
 }

 const newButton = document.querySelectorAll('li')
 newButton.forEach(btn => { 
 btn.addEventListener('click', ev => {
     const element = ev.path[1]
     element.remove()
 })
})