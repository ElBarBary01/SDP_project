import react from "react";
import ComplaintCard from "../ComplaintCard";
import CustomerService from "../users/CustomerService";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function CustomerServ(){

    const [complaints, setComplaints] = useState([]);

    async function checkComplaints(){
        var service = new CustomerService("service","service@gmail");
        var records = await service.reviewComplain();
        setComplaints(records.data);
        console.log(records.data)
    }
    return(
        <div>
            <h1>Customer complaints</h1>
            <Row xs={1} md={4} className="g-4 row">
                {complaints.map((p,idx) =>(<Col key={idx}><ComplaintCard email={p.email} body={p.complaint} /></Col>))}
            </Row>
            <button onClick={checkComplaints} className="btn btn-dark">Check complaints</button>
        </div>
    )
}

export default CustomerServ;