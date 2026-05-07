import Clothing from "./class/Clothing.js";
import Customer from "./class/Customer.js";
import Order from "./class/Order.js";
import Shoes from "./class/Shoes.js";
import { ClothingSize } from "./enums/ClothingSizeEnum.js";
import { ShoeSize } from "./enums/ShoeSizeEnum.js";

// Creation customer
const newCustomer = new Customer(1,"Martine","martine@alaplage.fr");

//Creation d'un produit de type vêtement
const produitUn = new Clothing(1,"Tee-shirt NF",1,50,ClothingSize.M);

//Creation d'un produit de type chaussure
const produitDeux = new Shoes(2, "Nike", 0.5,75,ShoeSize.p38);

//Creation d'une liste de produit
let listProduct = [produitUn,produitDeux];

//Création d'une commande
let newOrder = new Order(1,newCustomer, listProduct ,new Date);


// Information du customer
console.log(newCustomer.displayInfo());

// Information du produit vêtement
console.log(produitUn.displayDetails());

// Information du produit chaussure
console.log(produitDeux.displayDetails());

// Affichage de la commande non modifier
console.log(newOrder.displayOrder());

// Ajout d'un produit a la commande
newOrder.addProduct(new Clothing(3,"Pantalon nike",0.3,80,ClothingSize.Xl));

// Affichage de la commande avec l'ajout du pantalon
console.log(newOrder.displayOrder());

// Suppression d'un produit dans la commande
newOrder.removerProduct(1);

// Affichage de la commande après la suppression
console.log(newOrder.displayOrder());