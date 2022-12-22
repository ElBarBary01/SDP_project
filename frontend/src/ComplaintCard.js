import React from "react";
import { useState } from "react";
import CustomerService from "./users/CustomerService";

function ComplaintCard(props){
    const [showReply, setShowReply] = useState(false);
    const [reply, setReply] = useState("");

    function handleReply(){
       setShowReply(!showReply);
    }
    function handleChange(e){
        var input = e.target.value;
        setReply(input);
    }
    async function sendReply(){
        var service = new CustomerService("service","service@gmail");
        var resp = {
            email: props.email,
            response: reply
        }
        var records = await service.respondToComplain(resp);
        console.log(records);
    }

    return(
        <div className="card">
            <h1>{props.email}</h1>
            <p>{props.body}</p>
            <button onClick={handleReply} className="btn btn-dark">Reply</button>
            {showReply === true?
                <div>
                    <textarea onChange={handleChange} name="reply" className="txt-area-reply" placeholder="reply"></textarea>
                    <button onClick={sendReply} className="btn btn-outline-dark">Send reply</button>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default ComplaintCard;