const valor1Input = document.getElementById("valor1"),
    valor2Input = document.getElementById("valor2"),
    calcula = document.getElementById("btnSomar"),
    resetar = document.getElementById("btnReset"),
    resultado = document.getElementById("resultado"),
    operacoes = document.getElementById("operacoes");

function calcular() {
    const valor1 = Number(valor1Input.value),
        valor2 = Number(valor2Input.value)
    // resultado.innerHTML = valor1 + valor2
    if (operacoes.value === `somar`) {
        resultado.innerHTML = valor1 + valor2

    } else if (operacoes.value === `subtrair`) {
        resultado.innerHTML = valor1 - valor2

    } else if (operacoes.value === `multiplicar`) {
        resultado.innerHTML = valor1 * valor2

    } else if (operacoes.value === `dividir`) {
        resultado.innerHTML = valor1 / valor2
    }

}

resetar.addEventListener("click", () => {
    valor1Input.value = ""
    valor2Input.value = ""
    resultado.innerHTML = "0"

}
)
// calcula.addEventListener("click", () => {
//     const valor1 = Number(valor1Input.value)
//     const valor2 = Number(valor2Input.value)
//     resultado.innerHTML = valor1 + valor2
// })