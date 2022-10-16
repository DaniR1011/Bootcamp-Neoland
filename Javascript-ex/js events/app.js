// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const x = Event;
console.log(Event);
let button = document.createElement('button');
button.innerHTML = 'Submit';
document.body.appendChild(button);
button.addEventListener('click', myFunction);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const y = Event;
console.log(Event);
let input = document.createElement('input[class="focus"]');
input.addEventListener('focus', myFunction2)

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const z = Event;
console.log(Event);
let input1 = document.createElement('input[class="input"]');
input.addEventListener('input', myfunction3);