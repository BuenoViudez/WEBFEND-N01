let diaSemana = 4;
let mensagem = "";

switch (diaSemana) {
    case 1:
        mensagem = "Domingo";
        break;
    case 2:
        mensagem = "Segunda-feira";
        break;
    case 3:
        mensagem = "Terça-feira";
        break;
    case 4:
        mensagem = "Quarta-feira";
        break;
    case 5:
        mensagem = "Quinta-feira";
        break;
    case 6:
        mensagem = "Sexta-feira";
        break;
    case 7:
        mensagem = "Sábado";
        break;
    default:
        mensagem = "Não é um dia da semana";
        break;
}

console.log(mensagem);


let operacao = "soa";
let calculo;
let n1 = 10;
let n2 = 20;

operacao = operacao.toLocaleLowerCase().trim()

switch (operacao) {
    case "soma":
        calculo = n1 + n2
        console.log(`${n1} + ${n2} = ${calculo}`);
        break;

    case "subtracao":
    case "subtração":
        calculo = n1 - n2
        console.log(`${n1} - ${n2} = ${calculo}`);
        break;

    case "multiplicacao":
    case "multiplicação":
        calculo = n1 * n2
        console.log(`${n1} x ${n2} = ${calculo}`);
        break;

    case "divisao":
    case "divisão":
        calculo = n1 / n2
        console.log(`${n1} ÷ ${n1} = ${calculo}`);
        break;

    default:
        console.log("Erro");
        break;
}