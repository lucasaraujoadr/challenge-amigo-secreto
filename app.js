let amigo = [];
function adicionarAmigo() {
    let nome = document.getElementById("nome").value;
    if (nome.trim() === "") {
        alert("Por favor, insira um nome");
        return;
    }
    amigo.push(nome); 
    document.getElementById("nome").value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigo.forEach(function(nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigo.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear");
        return;
    }
    let indice = Math.floor(Math.random() * amigo.length);
    let nomeSorteado = amigo[indice];
    alert("O amigo sorteado foi: " + nomeSorteado);
}