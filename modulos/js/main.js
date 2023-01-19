// Importar todo mundo do arquivo numbers.js dando o apelido de nb
// ./ mesma pasta
import * as nb from './numbers.js';

// Posso importar fazendo a desestruturação
import { sum, round } from './numbers.js';

// Pode mudar o nome Product
import Product from './product.js';

console.log(nb.sum(3, 4));
console.log(nb.round(3.2345, 2));

console.log(sum(3, 4));
console.log(round(3.2345, 2));

const obj = new Product("Computador", 800.0, 10)

console.log(obj);