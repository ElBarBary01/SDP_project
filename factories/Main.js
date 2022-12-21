import FactoryOrchestrator from "./FactoryOrchestrator.js";


const groceriesFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const egg = groceriesFactory.createProduct("EGG");
//egg.setPrice(800);
console.log(egg)

