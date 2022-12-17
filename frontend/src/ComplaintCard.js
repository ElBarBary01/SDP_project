import React from "react";

function ComplaintCard(props){
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default ComplaintCard;