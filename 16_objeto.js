const aluno = {
    nome: "Tony",
    sobrenome: "Musk",
    idade: 23
};

console.log(aluno.idade);
console.log(aluno.nome, aluno.sobrenome);

const pessoa = {
    nome: "Thaís",
    idade: 30,
    profissao: "Influencer",
    saudacao: function () {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

pessoa.saudacao();
console.log(pessoa.nome);

function carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligar = function () {
        console.log(`O ${this.modelo} está ligado.`);
    };
}

const meuCarro = new carro("Ford", "Del Rey", 1986)

console.log(meuCarro.marca);
meuCarro.ligar()

const humano = {
    nome: "Severino",
    idade: 58
}

humano.profissao = "Advogado"

console.log(humano.profissao);
console.log(humano.idade);

delete humano.idade

console.log(humano.idade);

const contas = [
    {
        nome: "Odete",
        sobrenome: "Dias",
        idade: 69,
        banco: "Caixa",
        agencia: "0001",
        conta: "XXX-X",
        saldo: "R$7.000,00"
    },
    {
        nome: "Enzo",
        sobrenome: "Albuquerque",
        idade: 20,
        banco: "BTG Pactual",
        agencia: "1234",
        conta: "XXXX-X",
        saldo: "R$80.000,00"
    },
    {
        nome: "Johnas",
        sobrenome: "Brothers",
        idade: 25,
        banco: "C6 Bank",
        agencia: "0001",
        conta: "XXX-X",
        saldo: "R$15.000,00"
    }
]

console.log(contas[1].saldo);