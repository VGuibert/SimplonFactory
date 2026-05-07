import type Customer from "./Customer.js";
import type Product from "./Product.js";

class Order {

    orderId : number;
    customer : Customer;
    productsList : Product[];
    orderDate : Date;

    constructor( orderId : number,customer : Customer,productsList : Product[],orderDate : Date){
        this.orderId = orderId;
        this.customer = customer;
        this.productsList = productsList;
        this.orderDate = orderDate;
    }

    addProduct(product : Product){
        this.productsList.push(product);
    }

    removerProduct(productId : number){
        this.productsList = this.productsList.filter((product) => product.productId !== productId);
    }

    calculateWeight(): number{
        return this.productsList.reduce((totalWeight,product) => totalWeight + product.weight, 0);
    }

    calculateTotal(): number{
        return this.productsList.reduce((totalOrder,product) => totalOrder + product.price, 0);
    }   

    displayOrder(): string{
        return `Nom client : ${this.customer.name} , Email client : ${this.customer.email} , Commande : ${this.productsList.toString()}, Total de la commande : ${this.calculateTotal()}, Date : ${this.orderDate}`
    }

}

export default Order