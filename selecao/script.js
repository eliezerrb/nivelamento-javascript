// Selecionar elemento da página(igual utilizamos no CSS), mas recomendado
// pega uma ocorrencia
const item1 = document.querySelector("li");

console.log(item1);

// pegar o conteúdo que está dentro do HTML sem tag
console.log(item1.innerHTML);

// pegar todo conteúdo que está dentro do HTML inclusive a tag
console.log(item1.outerHTML);

// pegar todas as ocorrencias, ou seja, todos os li
const items = document.querySelectorAll("li");

console.log(items);

const card1 = document.querySelector(".card");

console.log(card1);

// Criei a tag P e dentro dela coloquei o "Descrição" e acrescentei no Card1
const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descrição";
card1.appendChild(paragrafo);

// Incluido parte do CSS no Card1 (.classList - retorna as classes)
// .add - adiciona
// .remove - exclui
// .toggle - altera se existir ou cria se não existir 
card1.classList.add("super-border");

const cards = document.querySelectorAll(".card");

// Outra forma de selecionar(antiga)
// const cards = document.getElementsByClassName("card");

console.log(cards);
console.log(cards[0]);

// Como converter nodeList para Array duas formas
Array.from(cards);
[...cards];

// Rodando uma função encima dela
Array.from(cards).map(item => {
    console.log(item.innerHTML);
})