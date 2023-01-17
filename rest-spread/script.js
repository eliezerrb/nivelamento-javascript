// REST: valores passados com virgula => array

// ... Indica que vai ser um vetor
function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(2, 3, 10, 5);

console.log(result1);

// Função nativa Math utiliza REST
const result2 = Math.max(2, 3, 10, 5);

console.log(result2);

// SPREAD: array => valores separados por virgula

const result3 = Math.max(4, 7, 2);

console.log(result3);

const myNumbers = [2, 3, 10, 5];

//const result4 = Math.max(myNumbers); // Nao funciona

const result4 = Math.max(...myNumbers);

console.log(result4);

// SPREAD: objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };
console.log(cloneItem);

const cloneItemPlus = { ...item, weigth: 10 };
console.log(cloneItemPlus);