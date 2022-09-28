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