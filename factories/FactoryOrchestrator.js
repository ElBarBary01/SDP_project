import GroceriesFactory from "./GroceriesFactory.js";
import OutfitsFactory from "./OutfitsFactory.js";
import ToolsFactory from "./ToolsFactory.js";

const factoryTypes = {OUTFITS : "OUTFITS", GROCERIES : "GROCERIES", TOOLS : "TOOLS"};
class FactoryOrchestrator {
    

     createFactory = (type)=> {
    {
        
        if(type === factoryTypes.OUTFITS)
            return new OutfitsFactory();
        else if(type === factoryTypes.GROCERIES)
            return new GroceriesFactory();
        else if(type === factoryTypes.TOOLS)
            return new ToolsFactory();       
    }
}
}

export default FactoryOrchestrator;