import User from "./User.js";

class Customer extends User {

    cart = []

    constructor(name, email) {
        super(name, email);
    }

    addToCart(product) {
        this.cart.push(product);
    }

    removeFromCart(product) {
        let index = 0;

        for (i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === product) {
                index = i;
                break;
            }
        }

        this.cart.splice(index, 1);
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (i = 0; i < this.cart.length; i++)
            totalPrice = totalPrice + this.cart[i].price;
        return totalPrice;
    }

    async buy() {
        var purchase = [...this.cart,this.calculateTotalPrice]
        try {
            for (i = 0; i < this.cart.length; i++) {
                await axios.patch("http://localhost:5001/api/products", { "ssid": cart[i].ssid });
            }
            await axios.patch("http://localhost:5001/api/customers",{"email":this.email,"purchase":purchase})
        }
        catch (e) {
            console.log(e.message)
        }
    }
    async review(ssid,score){


        await axios.patch("http://localhost:5001/api/review", { "ssid":ssid,"score":score });

    }
    async customersevice(complaint){
        await axios.patch("http://localhost:5001/api/complaint", { "email":this.email,"complaint":complaint });
    }

}

export default Customer;