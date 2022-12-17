import Product from "../Product.js"

class PowerTool extends Product
{
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

export default PowerTool;