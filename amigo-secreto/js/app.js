let amigos = [];

function adicionar() {   
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert ('O campo está vazio');
        return;
    } 

    if (amigos.includes(nome)){
        alert('Nome já adicionado');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nome);
    if (listaAmigos.textContent == ''){
        listaAmigos.textContent = nome;
    } else {
    listaAmigos.textContent = listaAmigos.textContent +', ' + nome;
    }
    nome = document.querySelector('input').value = '';
}


function sortear() {
    if (amigos.length < 4){
    alert('Adicione pelo menos 4 amigos');
    return;
}


    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
        
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    nome = document.querySelector('input').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
    sorteio = document.getElementById('lista-sorteio').textContent = '';
    amigos = [];
}
