import User from "./User.js";
import axios from "axios"

class CustomerService extends User {
    constructor(name, email)
    {
        super(name, email);
    }

    async reviewComplain()
    {
        try{
        await axios.get("http://localhost:5001/api/complaint")
        }
        catch(e){

        }
    }

    async respondToComplain(res)
    {
        try{
        var {email,response} =res
        await axios.post("http://localhost:5001/api/complaint",{"emal":email,"response":response})
        }
        catch (e) {
            console.log(e.message)
        }
    }

}

export default CustomerService;