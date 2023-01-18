const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.label = function(){
        return "Dados (funcao interna): " +this.name;
    }
}

// Inserir os metodos na função prototype(todo obj tem a função prototype)
// Com isso a função é compartilhada em todas as instâncias do obj
Product.prototype.total = function(){
    return this.price * this.quantity;
}

Product.prototype.add = function(amount){
    this.quantity += amount;
}

Product.prototype.remove = function(amount){
    if (this.quantity >= amount){
        this.quantity -= amount;
    }
}

// toFixed - colocar casa decimal
Product.prototype.label = function(){
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
}

const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 50.0, 4);

// Para acessar a função do prototype que tem o mesmo nome da funcão que está no contrutor 
// Utilizar o comando no console: 
// Product.prototype.label.call(p2)