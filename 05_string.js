let timeFutebol = "São Paulo"

console.log(timeFutebol.length);

let cidade = "sãO bERnaRDo dO CaMPo"

console.log(cidade.toLocaleUpperCase ());
console.log(cidade.toLocaleLowerCase ());

let pais = "Angola";

console.log(pais.charAt (2));
console.log(pais.indexOf ("n"));

let frase1 = "Olha se você ama";

console.log(frase1.slice(1, 4));
console.log(frase1.substring(1, 8));

let frase2 = "Eu nasci há 10000 anos atrás"

console.log(frase2.replace("anos", "dias"));
console.log(frase2.replaceAll("a", "@"));

let CPF = "145.785.632-82"

CPF = CPF.replaceAll(".", "")
CPF = CPF.replace("-", "")
console.log(CPF);

let frase3 = "Armei uma arapuca na beira da estrada"

frase3 = frase3.split (" ")
console.log(frase3);

let nome = "      Gabriel Bueno           "

console.log(nome);

nome = nome.trim()

console.log(nome);
