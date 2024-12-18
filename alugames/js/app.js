let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (botao.textContent == 'Alugar'){
        botao.textContent = 'Devolver'
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;

    } else {
        if (confirm(`Tem certeza que quer devolver o jogo ${nomeJogo.textContent}?`)){
        botao.textContent = 'Alugar'
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        jogosAlugados--;
        }
    }   

  
    contarEExibirJogosAlugados();
}   


document.addEventListener('DOMContentLoaded', function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
