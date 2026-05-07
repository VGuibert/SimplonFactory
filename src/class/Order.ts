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
        this.productsList = this.productsList.filter((products) => products.productId !== productId);
    }

    calculateWeight(): number{
        let totalWeight = 0;
        this.productsList.filter((orders) => totalWeight+=orders.weight);
        return totalWeight;
    }

    calculateTotal(): number{
        let totalOrder = 0;
        this.productsList.filter((orders) => totalOrder+=orders.price);
        return totalOrder;
    }   

    displayOrder(): string{
        return `Nom client : ${this.customer.name} , Email client : ${this.customer.email} , Commande : ${this.productsList.toString()}, Total de la commande : ${this.calculateTotal()}, Date : ${this.orderDate}`
    }

}

export default Order