// Dentro do js pode ser com aspas ou sem aspas no nome do atributo
// Se tem caractere especial é obrigatório as aspas ex. "due-date"
const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);


// Parse / stringify
// Pode ser que na requisição o obj venha como txt e precisamos converter
const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

const obj = JSON.parse(txt);

// É String vai retornar undefined porque não tem como acessar o obj
console.log(txt.name);

console.log(obj.nome);

const text = JSON.stringify(obj);