import Short from "../products/outfits/Short.js";
import Tshirt from "../products/outfits/Tshirt.js";


class SummerFactory {
    createProduct(productType) {
        if (productType === outfitTypes.TSHIRT)
            return new Tshirt();
        if (productType === outfitTypes.SHORT)
            return new Short();
    }

}

export default SummerFactory