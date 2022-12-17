import { v4 as uuidv4 } from 'uuid';
const ssid = uuidv4()
class Hammer {
    constructor()
    {
        this.ssid = ssid;
        this.name = "Hammer";
        this.price = 50;
    }
}

export default Hammer;