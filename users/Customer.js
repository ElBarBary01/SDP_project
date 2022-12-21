import User from "./User.js";

class Customer extends User {

    cart = []

    constructor(name, email)
    {
        super(name, email);
    }

    addToCart(product)
    {
        this.cart.push(product);
    }

    removeFromCart(product)
    {
        let index = 0;

        for(i = 0; i < this.cart.length; i++)
        {
            if(this.cart[i] === product) 
            {
                index = i;
                break;
            }
        }

        this.cart.splice(index, 1);
    }

    calculateTotalPrice()
    {
        let totalPrice = 0;
        for(i = 0; i < this.cart.length; i++)
            totalPrice = totalPrice + this.cart[i].price;
        return totalPrice;    
    }
    
}

export default Customer;