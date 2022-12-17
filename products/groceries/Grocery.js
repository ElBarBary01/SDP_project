import Product from "../Product.js"

class Grocery extends Product
{

    constructor(name, price, groceryType)
    {
        super(name, price);
        this.groceryType = groceryType;
    }

    get groceryType()
    {
        return this.groceryType;
    }
    
}

export default Grocery;