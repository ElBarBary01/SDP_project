import { v4 as uuidv4 } from 'uuid';
const ssid = uuidv4()
class Drill
{
    constructor()
    {
        this.ssid = ssid;
        this.name = "Drill";
        this.price = 150;
    }
}

export default Drill;