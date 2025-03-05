let nomeAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let erro = document.getElementById("erro");
let arrayAmigos = [];
let li = "";
let ul = "<ul>";
let indice = 0;
indice = parseInt(indice);
nomeAmigo.focus();

nomeAmigo.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

function adicionarAmigo() {
  if (nomeAmigo.value) {
    arrayAmigos.push(nomeAmigo.value);
    li = `<li>${arrayAmigos[indice]}</li>`;
    ul += li;
    listaAmigos.innerHTML = ul;
    nomeAmigo.value = "";
    indice += 1;
    nomeAmigo.focus();
    resultado.innerHTML = "";
    erro.innerHTML = "";
  } else {
    alert("Você precisa inserir um amigo!");
    nomeAmigo.focus();
    listaAmigos.innerHTML = ul;
    resultado.innerHTML = "";
    erro.innerHTML = "Precisa inserir um amigo...";
  }
}

function sortearAmigo() {
  if (arrayAmigos.length >= 1) {
    nomeAmigo.focus();
    let amigoSorteado =
      arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    li = "";
    ul = "<ul></ul>";
    listaAmigos.innerHTML = ul;
    erro.innerHTML = "";
    arrayAmigos.length = 0;
    indice = 0;
  } else {
    alert("Não há amigos na lista para o sorteio!"); // Exibe um alerta se a lista estiver vazia
    nomeAmigo.focus();
    li = "";
    ul = "<ul></ul>";
    indice = 0;
    listaAmigos.innerHTML = "";
    resultado.innerHTML = ul;
    erro.innerHTML = "Não há pessoas para o sorteio...";
  }
}
