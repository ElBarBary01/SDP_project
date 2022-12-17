import FactoryOrchestrator from "./FactoryOrchestrator.js";
import GroceriesFactory from "./GroceriesFactory.js";


const groceriesFactory = new FactoryOrchestrator().createFactory("OUTFITS")
const egg = groceriesFactory.createProduct("COAT");
console.log(egg.price);

