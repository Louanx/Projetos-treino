function comprar() {

    let ingresso = document.getElementById('tipo-ingresso');
    let quantidade = document.querySelector('input').value;

    if (ingresso.value ==  'pista'){
    let pistaElement = parseInt(document.getElementById('qtd-pista').textContent); 
    let pista = Number(pistaElement.textContent); // Converte o valor atual para número
    pista -= quantidade; // Subtrai a quantidade
    if (pista < 0) {
        alert('Ingresso indisponivel');
        return;
    }else {    
    pistaElement.textContent = pista; // Atualiza o valor no DOM
    console.log(`Quantidade restante na pista: ${pista}`);}
}
  if (ingresso.value == 'superior') {
    let superiorElement = document.getElementById('qtd-superior'); // Pega o elemento do DOM
    let superior = Number(superiorElement.textContent); // Converte o valor atual para número
    superior -= quantidade; // Subtrai a quantidade
    if (superior < 0) {
        alert('Ingresso indisponivel');
        return;
    }else {
    superiorElement.textContent = superior; // Atualiza o valor no DOM
    console.log(`Quantidade restante na cadeira superior: ${superior}`);}
}
 if (ingresso.value == 'inferior') {
    let inferiorElement = document.getElementById('qtd-inferior'); // Pega o elemento do DOM
    let inferior = Number(inferiorElement.textContent); // Converte o valor atual para número
    inferior -= quantidade;
    if (inferior < 0) {
        alert('Ingresso indisponivel');
        return;
    }else {
    inferiorElement.textContent = inferior; // Atualiza o valor no DOM
    console.log(`Quantidade restante na cadeira inferior: ${inferior}`);}
}}
    