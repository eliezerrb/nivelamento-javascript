
// Export default - está dizendo que seu modulo exporta somente o elemento especificado
// Se tiver outras funções auxiliares não exporta
export default class Product {

    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total(){
        return this.price * this.quantity;
    }

    add(amount){
        this.quantity += amount;
    }

    remove(amount){
        if(this.quantity >= amount){
            this.quantity -= amount;
        } 
    }

    label() {
        return "Dados: " + this.name + ", " + this.price.toFixed(2);
      }
}