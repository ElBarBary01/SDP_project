import User from "./User.js";

class CustomerService extends User {
    constructor(name, email)
    {
        super(name, email);
    }

    reviewComplain()
    {
        //axios get to retrieve

    }

    respondToComplain(complain)
    {
        //axios post to update
    }

}

export default CustomerService;