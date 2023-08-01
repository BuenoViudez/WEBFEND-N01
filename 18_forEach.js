const numeros = [1, 2, 3, 4, 5];

///////////////////////////////////////////
const quadrados = [];

numeros.forEach(function(numero, i, array){
    const quadrado = numero * numero;
    quadrados.push(quadrado)
    
    console.log(`Índice: ${i}`);
    console.log(`Elemento: ${numero}`);
    console.log(`Array Original: ${array}`);
    console.log(`Quadrado: ${quadrado}`);
    console.log('---');
})

console.log('Array Original:', numeros);
console.log('Array com Quadrados:', quadrados);

///////////////////////////////////////////

const filmes = ["Schindler's List", "O menino do pijama listrado", "Código de conduta", "Interestelar", "Lagoa Azul"];

filmes.forEach(function(filme, indice) {
    console.log(`Ordem dos melhores filmes: \n\n${indice}: ${filme}`);
})
