// setTimeout é assíncrono, ou seja, continua executando o restante do código.
// Serve para executar alguma função, após quantidade de tempo

function dizerOla(){
    console.log("Olá")
}

setTimeout(dizerOla, 2000);

function dizerBomdia(nome) {
    console.log("Bom dia " + nome);
}

// Para executar um depois o outro encadiar o setTimeout
setTimeout(() => {
    dizerBomdia("Maria");
    setTimeout(() => {
        dizerBomdia("João");
        setTimeout(() => {
            dizerBomdia("Ana");
        }, 2000);
    },2000);
}, 2000);

console.log("A");
console.log("B");