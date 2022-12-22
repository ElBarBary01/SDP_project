import Customer from "./Customer.js";
import ProductSeller from "./ProductSeller.js";
import FactoryOrchestrator from "../factories/FactoryOrchestrator.js";

var omar = new ProductSeller("omar","omar@gmail");
//var omar2 = new Customer("omar","omar@gmail");

var product = await omar.addProduct({category:"GROCERIES",type:"EGG",name:"sbace test3",})
console.log(product);
//omar.checkProductPerformance(product.ssid);
//omar.updateProduct({ssid:product.ssid,name:"sabce test2"});


/*
const groceriesFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const egg = groceriesFactory.createProduct("EGG");
const meat = groceriesFactory.createProduct("MEAT");
omar2.addToCart(egg)
omar2.addToCart(meat)
console.log(omar2.cart)

*/