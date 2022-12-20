import Customer from "./Customer.js";
import CustomerService from "./CustomerService.js";
import ProductSeller from "./ProductSeller.js";

const userTypes = {CUSTOMER : "CUSTOMER", CUSTOMER_SERVICE : "CUSTOMER_SERVICE", PRODUCT_SELLER : "PRODUCT_SELLER"};

class UsersFactory {

    createUser(type)
    {
        if(type === userTypes.CUSTOMER)
            return new Customer();
        if(type === userTypes.CUSTOMER_SERVICE)
            return new CustomerService();
        if(type === userTypes.PRODUCT_SELLER)
            return new ProductSeller();        
    }

}

export default UsersFactory;


/*const usersFactory = new UsersFactory();

const u = usersFactory.createUser("CUSTOMER");

u.name = "Momen";

console.log(u.name);*/