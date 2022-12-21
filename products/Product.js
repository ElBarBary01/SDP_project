import { v4 as uuidv4 } from 'uuid';
const ssid = uuidv4()
class Product {
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
        this.ssid = ssid;
    }
    setPrice(price){
        this.price=price;
    }
    setName(name){
        this.name=name;
    }
    setImage(image){
        this.image=image
    }

}

export default Product;