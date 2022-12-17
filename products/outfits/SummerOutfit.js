import Product from "../Product.js";

class SummerOutfit extends Product
{
    constructor(name, price, outfitType)
    {
        super(name, price);
        this.outfitType = outfitType;
    }

    get outfitType()
    {
        return this.outfitType;
    }
}

export default SummerOutfit;