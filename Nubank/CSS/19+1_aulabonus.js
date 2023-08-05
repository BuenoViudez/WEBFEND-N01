const cpfInput = document.getElementById('cpfInput');
const cpfHidden = document.getElementById('cpfHidden');

// Adiciona um ouvinte de evento "input" ao input do CPF
cpfInput.addEventListener('input', formatCPF);

function formatCPF() {
    // Remove todos os caracteres não numéricos do valor do input
    const cleanedCPF = cpfInput.value.replace(/\D/g, '');

    // Formata o CPF (por exemplo, "123.456.789-10")
    const formattedCPF = formatCPFNumber(cleanedCPF);

    // Atualiza o input visível com o CPF formatado
    cpfInput.value = formattedCPF;

    // Armazena o CPF limpo (apenas números) no input hidden
    cpfHidden.value = cleanedCPF;
}

function formatCPFNumber(cpf) {
    // Adiciona a formatação ao número do CPF
    const formatted = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    return formatted;
}

function submitForm() {
    // Função de exemplo para exibir os valores ao enviar o formulário
    const formattedCPF = cpfInput.value;
    const cleanedCPF = cpfHidden.value;
    console.log("Formatted CPF:", formattedCPF);
    console.log("Cleaned CPF (numbers only):", cleanedCPF);
    // Adicione aqui o código para enviar os dados do formulário para o servidor ou realizar qualquer outra ação.
}