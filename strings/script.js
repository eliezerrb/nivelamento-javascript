console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);

// Interpolação
console.log(`O valor do produto é ${num}`);

console.log("Conversão entre number e string");
const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);

// Com 2 casas decimais
const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);

// Convertendo String para número
const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

// Convertendo String para número inteiro decimal (10)
const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${typeof num2}`);

// Convertendo String para número inteiro hexadecimal (16)
const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

// Convertendo String de número quebrado para base (10)
const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);

// Funções de string
console.log("Funções de string");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);
// Converter para minúscula
console.log(`toLowerCase: ${str.toLowerCase()}`);
// Converter para MAIÚSCULA
console.log(`toUpperCase: ${str.toUpperCase()}`);
// Trazer conteúdo da posição do vetor
console.log(`charAt: ${str.charAt(3)}`);
// Substituir
console.log(`replace (primeiro): ${str.replace("i", "$", )}`);
console.log(`replace (todos): ${str.replace(/i/g, "$", )}`);
// Quantidade de caracteres
console.log(`length: ${str.length}`);
// Pegar a primeira posição
console.log(`indexOf: ${str.indexOf("i")}`);
// Pegar a última posição
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);
// Cortar String posição inicial e posição final
console.log(`subtring: ${str.substring(3, 8)}`);
// Remover espaço em branco
console.log(`trim: ${str.trim()}`);

