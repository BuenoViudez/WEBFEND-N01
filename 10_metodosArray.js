// push
let frutas = ["Maçã", "Abacaxi", "Banana"]
console.log(frutas);

frutas.push("Melancia")
console.log(frutas);

//pop
let carros = ["Classic", "Celt", "Celta", "Fiesta", "Palio"]
console.log(carros);

carros.pop()
console.log(carros);

//splice
let jogos = ["Bomba patch", "Bicho", "Truco", "Dominó", "Cabra cega", "Bom de Guerra"]
console.log(jogos);

jogos.splice(4, 1); // O primeiro valor indica a posição e o seguno a quantidade
console.log(jogos);

jogos.splice(2, 2, "Ben 10")
console.log(jogos);

//slice
let cantores = ["Kasinão", "Manel", "Fagner", "Belchior", "Belo", "Marrone"]
console.log(cantores);

let cantoresLendas = cantores.slice(1, 3)
console.log(cantoresLendas);
console.log(cantores);

//concat
let compras1 = ["Arrôiz", "Fejão", "Macarrão"];
let compras2 = ["Ceverja", "Dezimfetante", "Pinêu"];
let compras = compras2.concat(compras1);
console.log(compras);

//join
let cores = ["Preto", "Verde", "Azul"];
let stringCores = cores.join(", ")
console.log(stringCores);

//sort
let animais = ["Pombo", "Caramelo", "Jaguatirica", "Tilápia", "Capivara"]
console.log(animais.sort());

//IndexOf
let paises = ["Brasil", "Angola", "Venezuela", "Chile", "Ucrânia", "Palestina"]

if (paises.indexOf("Venezuela") != -1) {
    console.log(`O País está na lista na posição ${paises.indexOf("Venezuela")}`);
}else {
    console.log("O País não está na lista");
}

console.log(paises.indexOf("Venezuela"));