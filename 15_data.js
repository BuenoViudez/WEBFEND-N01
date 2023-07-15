const dataAtual = new Date()
console.log(dataAtual);

const diaSemana = dataAtual.getDay()
console.log(diaSemana);

const diaMes = dataAtual.getDate()
console.log(diaMes);

const mes = dataAtual.getMonth()
console.log(mes);

const ano = dataAtual.getFullYear()
console.log(ano);

const dataEspecifica = new Date(2000, 9, 13)
console.log(dataEspecifica);

const timestamp = dataAtual.getTime();
console.log(timestamp);

const dataFormatada = dataAtual.toLocaleString();
console.log(dataFormatada);

const dataISO = dataAtual.toISOString();
console.log(dataISO);

dataEspecifica.setDate(11)
console.log(dataEspecifica);

dataEspecifica.setMonth(8)
console.log(dataEspecifica);

dataEspecifica.setFullYear(2001)
console.log(dataEspecifica);

dataEspecifica.setHours(8)
console.log(dataEspecifica);