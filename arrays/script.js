// TAMANHO DO ARRAY
const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;

console.log("Teste length");
console.log(t1);

// REMOVER ELEMENTOS:
const nomes = ["Maria", "João", "Ana", "Marcos"];

// Remover o último elemento
const r1 = nomes.pop();

// Remover o primeiro elemento
const r2 = nomes.shift();

console.log("Teste pop e shift");
console.log(r1);
console.log(r2);
console.log(nomes);

// INSERIR ELEMENTOS:
const alturas = [1.65, 1.82, 1.7];

// Iserir no inicio
alturas.push(1.75);

// Inserir no final
alturas.unshift(1.58);

console.log("Teste push e unshift");
console.log(alturas);

// INSERIR E REMOVER GERAL(QUALQUER LUGAR)
const letras = ["A", "B", "C", "D", "E", "F"];

// Removendo a partir da posição 2, 3(quantidade de elementos) e inserindo X e Y após a posição 2
letras.splice(2, 3, "X", "Y");
console.log("Teste splice");
console.log(letras);

// CONCATENAR ARRAYS
const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];

const todos = meninas.concat(meninos);
console.log("Teste concat");
console.log(todos);


// ACESSO E ATRIBUIÇÃO
const idades = [20, 30, 40, 50];
idades[1] = 38;

console.log("Teste acesso e atribuição");
console.log(idades);

// PERCORRER ARRAY
const frutas = ["Banana", "Laranja", "Uva"];

console.log("Teste percorrer array");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// PERCORRER ARRAY COM FOREACH
console.log("Teste percorrer array com forEach");
frutas.forEach(item => {
    console.log(item);
});