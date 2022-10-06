// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const p = document.createElement("p");
div2.appendChild(p);
document.body.appendChild(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement("div");
const p2 = {
    p1: document.createElement("p"),
    p2: document.createElement("p"),
    p3: document.createElement("p"),
    p4: document.createElement("p"),
    p5: document.createElement("p"),
    p6: document.createElement("p"),
}
for (let i = 0; i < p2.length; i++) {
    const p3 = p2[i];
}
document.body.appendChild("div3");

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const x = document.createElement("p");
x.innerHTML = "Soy dinámico!"
document.body.appendChild("textP");

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const z = document.querySelector('.fn-insert-here');
z.innerHTML = 'Wubba Lubba dub dub'


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (const app of apps) {
    let li = document.createElement('li')
    ul.appendChild('li')
}
document.body.appendChild('ul');

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminateFnRemoveMe = document.querySelectorAll('.fn-remove-me');
for (const w of eliminateFnRemoveMe) {
    w.remove()
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const p7 = document.querySelector('.middle');
const p10 = document.createElement('p');
p10 = "Voy en medio!";
p7.insertAdjacentText(p10);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const p8 = document.querySelectorAll('div["class=fn-insert-here"]');
for (const p7 of p8) {
    let p6 = document.createElement('p');
    p7.textContent = 'Voy dentro'
    p7.appendChild(p6)
}
