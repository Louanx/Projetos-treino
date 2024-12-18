let totalGeral = 0
document.getElementById('valor-total').textContent = '0'
document.getElementById('lista-produtos').innerHTML = '';

function adicionar () {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    if (!produto || produto.trim() === ""){
        alert("Selecione um produto válido.");
        return;
   
    } else if (quantidade < 1){
        alert ('Preencha a quantidade corretamente.');
        return;
    } else {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul"> R$${preco}</span></section>`;
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = ''
    }
}
function limpar () {
    totalGeral = 0
    document.getElementById('valor-total').textContent = '0'
    document.getElementById('lista-produtos').innerHTML = '';
}

