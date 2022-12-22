import User from "./User.js";
import axios from "axios"
import FactoryOrchestrator from "../factories/FactoryOrchestrator.js";



class ProductSeller extends User {
    constructor(name, email) {
        super(name, email);
    }

    /**
     * takes product category(winter outfit, summer outfit ..etc) and type (t shirt , coat ...etc)
     * creates a new product using facory methods and puts it in database 
     * @param {product category , product type,price ,name , image} product
     * @param category should be one of the following {"OUTFITS", "GROCERIES", "TOOLS"} 
     */
    async addProduct(product) {
        var { category, type, price, name, image } = product;
        var productFactory = new FactoryOrchestrator().createFactory(category)
        var product = productFactory.createProduct(type);
        if (name) {
            product.setName(name);
        }
        if (price) {
            product.setPrice(price);
        }
        if (image) {
            product.setImage(image);
        }
        product.setSeller(this.email)

        try {
            console.log(product)
            await axios.post("http://localhost:5001/api/products", product)
        }
        catch (e) {
            console.log(e.message)
        }

    }


    async updateProduct(product) {
        try {
            var { price, name, image, ssid } = product;
            //await axios.post("http://localhost:5001/api/products",product) 
        }
        catch (e) {
            console.log(e.message)
        }

    }

    async removeProduct(ssid) {
        try {
             await axios.delete(`http://localhost:5001/api/products/${ssid}`)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    async checkProductPerformance(product) {
        try {
            //  var email = this.email
            //  var results = axios.get(`http://localhost:5001/api/products/seller/${email}`)
        }
        catch (e) {
            console.log(e.message)
        }
    }

}

export default ProductSeller;