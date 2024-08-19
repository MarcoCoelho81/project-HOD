const { botoesCarrossel, informacoes, imagens } = PegarElementoHTMLdosBotoes();
botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener("click", () => {
    DesativarBotaoSelecionado();
    MarcarBotaoComoSelecionado(botao);
    EsconderImagemAtiva();
    MostrarImagemdeFundo(indice);
    EsconderInformacoesAtivas();
    MostrarInformacoes(indice);
   });
});

function PegarElementoHTMLdosBotoes() {
    const botoesCarrossel = document.querySelectorAll(".botao");
    const imagens = document.querySelectorAll(".imagem");
    const informacoes = document.querySelectorAll(".informacoes");
    return { botoesCarrossel, informacoes, imagens };
}

function MarcarBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function MostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function EsconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function MostrarImagemdeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function DesativarBotaoSelecionado() {
    const botaoselecionado = document.querySelector(".selecionado");
    botaoselecionado.classList.remove("selecionado");
}

