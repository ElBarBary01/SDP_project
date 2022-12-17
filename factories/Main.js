import FactoryOrchestrator from "./FactoryOrchestrator.js";
import GroceriesFactory from "./GroceriesFactory.js";


const groceriesFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const egg = groceriesFactory.createProduct("EGG");
console.log(egg.price);

