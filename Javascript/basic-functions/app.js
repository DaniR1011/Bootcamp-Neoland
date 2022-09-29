// Iteración 1
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) 
    return 'numberOne'
    else if (numberTwo > numberOne) 
    return 'numberTwo'
    return "The numbers are the same"
}

const x = sum(5, 5)
console.log(x)

// Iteración 2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let LongestWord = 0;
    for(let i = 0; i<param.length; i++){
        if(param[i].length > param[LongestWord].length)
        LongestWord = i;
    }
    return param[LongestWord]
}
const LongestWord2 = findLongestWord(avengers);
console.log(LongestWord2);

// Iteración 3
const numbers = [1, 2, 3, 5, 45, 37, 58];
let sumNumbers = 0;
function sumAll(param) {
   for(let i = 0; i < param.length; i++) 
   sumNumbers += param[i];
}
sumAll(numbers);
console.log(sumNumbers);

// Iteración 4
const numbers3 = [12, 21, 38, 5, 45, 37, 6];
let finalNumbers = 0;
function average(param) {
   for(let i = 0; i < param.length; i++) {
    finalNumbers += param[i]
   }
   let promedio = (finalNumbers/param.length);
   return(promedio);
}
promedio = average(numbers3);
console.log(promedio);

// Iteración 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let finalElements = 0;
function averageWord(param) {
    for (let i = 0; i < param.length; i++) {
        if(typeof param[i] === "number") {
          finalElements += param[i];  
        }   else {
            finalElements += param[i].length;
        }
    }
}
averageWord(mixedElements);
console.log(finalElements);

// Iteración 6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let duplicates = param;
    for(let i = duplicates.length-1; i >= 0; i--) { 
      for(let j = i-1; j >= 0; j--) {
        if(duplicates[i] === duplicates[j]) {
            duplicates.splice(i, 1)
        }
      }
    }
  }
removeDuplicates(duplicates);
console.log(duplicates);

// Iteración 7
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, p) {
    let duplicates = param;
    for(let i = 0; i < duplicates.length; i++) { 
        if(duplicates[i] === p) {
            duplicates.splice(i, 1, "True")
        } else {
            duplicates.splice(i, 1, "False")
        }
      }
    }
finderName(nameFinder, "Jessica");
console.log(nameFinder);

// Ejercicio 8
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    
  }
