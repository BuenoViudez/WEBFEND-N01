// let nomes = []
// let nome
// let i = 0 

// while (i < 3) {
//     nome = prompt("Digite um nome")
//     nomes.push(nome)
//     console.log(nomes[i]);
//     i++
// }

// console.log(nomes);

// let numeros = [];
// let numero;
// let somaNumeros = 0
// let i = 0

// while (i < 5) {
//     numero = Number(prompt("Digite um Número da Sorte"));
//     numeros.push(numero);
//     somaNumeros += numeros[i];
//     console.log(numeros[i]);
//     i++
// }

// alert(somaNumeros);

let nomes = [];
let nome;
let qtdNomes = Number(prompt("Digite a quantidade de nomes que deseja"))
let valorNome = document.querySelector("#nomes");

let i = 0;

while (i < qtdNomes) {
    nome = prompt(`Digite o ${i+1}° nome`)
    nomes.push(nome)
    valorNome.innerHTML += nome + "<br>"
    i++
}
