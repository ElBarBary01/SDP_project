import Coat from "../products/outfits/Coat.js";
import Scarf from "../products/outfits/Scarf.js";
import Short from "../products/outfits/Short.js";
import SummerOutfit from "../products/outfits/SummerOutfit.js";
import Tshirt from "../products/outfits/Tshirt.js";
import WinterOutfit from "../products/outfits/WinterOutfit.js";

const outfitTypes = { COAT: "COAT", SCARF: "SCARF", TSHIRT: "TSHIRT", SHORT: "SHORT" };
class OutfitsFactory {

    createProduct(productType) {
        if (productType === outfitTypes.COAT)
            return new Coat();
        if (productType === outfitTypes.SCARF)
            return new Scarf();
        if (productType === outfitTypes.TSHIRT)
            return new Tshirt();
        if (productType === outfitTypes.SHORT)
            return new Short();
    }
}

export default OutfitsFactory;