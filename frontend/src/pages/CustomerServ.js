import React from "react";
import ComplaintCard from "../ComplaintCard";
import CustomerService from "../users/CustomerService";

function customerServ(){
    async function checkComplaints(){
        var service = new CustomerService("service","service@gmail");
        var records = await service.reviewComplain();
        console.log(records)
    }
    return(
        <div>
            <h1>Customer complaints</h1>
            <button onClick={checkComplaints} className="btn btn-dark">Check complaints</button>
        </div>
    )
}

export default customerServ;