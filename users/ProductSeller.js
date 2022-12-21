import User from "./User.js";
import axios from "axios"
import FactoryOrchestrator from "../factories/FactoryOrchestrator.js";



class ProductSeller extends User {
    constructor(name, email)
    {
        super(name, email);
    }

    /**
     * takes product category(winter outfit, summer outfit ..etc) and type (t shirt , coat ...etc)
     * creates a new product using facory methods and puts it in database 
     * @param {product category , product type,price ,name , image} product
     * @param category should be one of the following {"OUTFITS", "GROCERIES", "TOOLS"} 
     */
    async addProduct(product)
    {
        var { category , type,price ,name , image} = product;
        var productFactory = new FactoryOrchestrator().createFactory(category)
        var product = productFactory.createProduct(type);
        if(name){
            product.setName(name);
        }
        if(price){
            product.setPrice(price);
        }
        if(image){
            product.setImage(image);
        }

        var products = JSON.stringify(product)
        /*try{
            console.log(products)
        await axios.post("http://localhost:5001/api/product",products)
        }
        catch(e){
       console.log(e.message)
        }*/
        return products

    }


    updateProduct(product)
    {
        var {price ,name , image,ssid} = product;
        //axios patch using ssid 

    }

    removeProduct(ssid)
    {
            //axios call to delete
    }

    checkProductPerformance(product)
    {
       // results = axios.get to a product with ssid then return the qunatity sold
        
    }

}

export default ProductSeller;