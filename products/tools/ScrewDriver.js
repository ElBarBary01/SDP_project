import { v4 as uuidv4 } from 'uuid';
const ssid = uuidv4()
class ScrewDriver {
    constructor()
    {
        this.ssid = ssid;
        this.name = "Screw driver";
        this.price = 15;
    }
}

export default ScrewDriver;