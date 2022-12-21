import Customer from "./Customer.js";
import ProductSeller from "./ProductSeller.js";
import FactoryOrchestrator from "../factories/FactoryOrchestrator.js";

var omar = new ProductSeller("omar","omar@gmail");
var omar2 = new Customer("omar","omar@gmail");

omar.addProduct({category:"GROCERIES",type:"EGG",name:"test",})

const groceriesFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const egg = groceriesFactory.createProduct("EGG");
const meat = groceriesFactory.createProduct("MEAT");
//omar2.addToCart(egg)
//omar2.addToCart(meat)
//console.log(omar2.cart)

