import { v4 as uuidv4 } from 'uuid';
const ssid = uuidv4()
class Saw {
    constructor()
    {
        this.ssid = ssid;
        this.name = "Saw";
        this.price = 50;
    }
}

export default Saw;