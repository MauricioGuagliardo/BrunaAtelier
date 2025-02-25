// scripts.js

function acessarOrcamento() {
    const senha = prompt("Digite a senha para acessar a área de orçamento:");

    const senhaCorreta = "atelier123"; // Altere aqui a senha desejada

    if (senha === senhaCorreta) {
        window.location.href = "orcamento.html";
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
}
