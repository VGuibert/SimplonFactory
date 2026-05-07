import type { ClothingSize } from "../enums/ClothingSizeEnum.js";
import Product from "./Product.js";

class Clothing extends Product {

    size : ClothingSize;

    constructor(productId : number,name: string, weight: number , price : number, size : ClothingSize){
        super(productId, name,weight,price);
        this.size = size;
 }

  displayDetails() : string {
        return `Product ID : ${this.productId}, Name : ${this.name}, Weight : ${this.weight}, Price : ${this.price}, Size : ${this.size}`
    } 


}

export default Clothing;