// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const newApi = fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(({name, age, count}) => {
        const object = `
            "age": 61,
            "count": 298219,
            "name": "michael"
        `
        document.body.innerHTML = object
    })
    .catch (error => new Error(error))

