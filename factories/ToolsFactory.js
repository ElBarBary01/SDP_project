import PowerTool from "../products/tools/PowerTool.js";
import HandTool from "../products/tools/HandTool.js";
import Hammer from "../products/tools/Hammer.js";
import ScrewDriver from "../products/tools/ScrewDriver.js";
import Drill from "../products/tools/Drill.js";
import Saw from "../products/tools/Saw.js";


const toolTypes = { HAMMER: "HAMMER", SCREW_DRIVER: "SCREW_DRIVER", DRILL: "DRILL", SAW: "SAW" };

class ToolsFactory {

    createProduct(productType) {
        if (productType === toolTypes.HAMMER)
            return new Hammer();
        if (productType === toolTypes.SCREW_DRIVER)
            return new ScrewDriver();
        if (productType === toolTypes.DRILL)
            return new Drill();
        if (productType === toolTypes.SAW)
            return new Saw();
    }
}

export default ToolsFactory;