import Product from "../Product.js";

class HandTool extends Product {

    constructor(name, price, toolType)
    {
        super(name, price);
        this.toolType = toolType;
    }

    get toolType()
    {
        return this.toolType;
    }
    
}

export default HandTool;