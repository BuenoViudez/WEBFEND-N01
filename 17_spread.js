let lista1 = [1, 2, 3];
let lista2 = [...lista1];

console.log(lista1);
console.log(lista2);

let numb1 = [1, 2, 3];
let numb2 = [4, 5, 6]
let concatenaNumbs = [...numb2, ...numb1]

console.log(concatenaNumbs);

const numbers = [1, 2, 3, 4, 5];
let maiorNumb = Math.max(...numbers)
let menorNumb = Math.min(...numbers)

console.log(maiorNumb);
console.log(menorNumb);

const person = {
    name: 'John',
    age: 30
};

const copiaObj = {...person};
console.log(copiaObj);

const alteraObj = {...person, name: "Gabriel"};
console.log(alteraObj);