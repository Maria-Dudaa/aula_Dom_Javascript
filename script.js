const botao = document.getElementById("botaoClique");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => { // Correção aqui
    let fundacao = prompt("Em que ano o São Paulo FC foi fundado?");
    let resposta = "Em 25 de janeiro de 1930";

    if (fundacao.toLowerCase() !== resposta.toLowerCase()) { // Ignora maiúsculas e minúsculas
        mensagem.innerText = "Resposta incorreta! A resposta correta é " + resposta;
        mensagem.style.color = "red";
        return;
    }

    let libertadores = prompt("Quantas vezes o São Paulo ganhou a Copa Libertadores da América?");
    let resposta2 = "O São Paulo conquistou a Copa Libertadores três vezes";

    if (libertadores.toLowerCase() !== resposta2.toLowerCase()) { // Ignora maiúsculas e minúsculas
        mensagem.innerText = "Resposta incorreta! A resposta correta é " + resposta2;
        mensagem.style.color = "red";
        return;
    }

    let jogador = prompt("Qual jogador do São Paulo é conhecido como o “Mito” e é o maior goleiro artilheiro da história do futebol?");
    let resposta3 = "O Rogério Ceni";

    if (jogador.toLowerCase() !== resposta3.toLowerCase()) { // Ignora maiúsculas e minúsculas
        mensagem.innerText = "Resposta incorreta! A resposta correta é " + resposta3;
        mensagem.style.color = "red";
        return;
    } else {
        mensagem.innerText = "Parabéns! Suas respostas estão todas corretas! \n Aqui estão as respostas corretas: \n" +
            '1. fundacao: ${resposta}\n' + 
            '2. libertadores: ${resposta2}\n' +
            '3. jogador "Mito": ${resposta3}\n'
        mensagem.style.color = "green"; 
    }
});