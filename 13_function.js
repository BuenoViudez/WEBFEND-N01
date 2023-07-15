//Exemplo 1 Função que retorna a soma de dois números:

function somar(a, b) {
    const resultado = a + b;
    return resultado;
  }
  
  const resultadoSoma = somar(3, 4);
  console.log(resultadoSoma); // Saída: 7

  

  //Exemplo 2 Função que verifica se um número é par:

  function verificarPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const numero1 = 6;
  const numero2 = 9;
  
  console.log(verificarPar(numero1)); // Saída: true
  console.log(verificarPar(numero2)); // Saída: false



  //Exemplo 3 Função que retorna o maior valor de um array:

  function encontrarMaiorValor(array) {
    let maiorValor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maiorValor) {
        maiorValor = array[i];
      }
    }
    return maiorValor;
  }
  
  const numeros = [5, 9, 2, 11, 3, 8];
  const maiorNumero = encontrarMaiorValor(numeros);
  console.log(maiorNumero); // Saída: 11



  //Exemplo 4 Função que exibe uma mensagem na tela:

  function exibirMensagem() {
    console.log("Olá, seja bem-vindo!");
  }
  
  exibirMensagem(); // Saída: Olá, seja bem-vindo!



  //Exemplo 5  Função que gera um número aleatório:

  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  const numeroAleatorio = gerarNumeroAleatorio();
  console.log(numeroAleatorio); // Saída: um número aleatório entre 1 e 10


  