import React from "react";


function HistoryCard(props) {

    return (
        <div className="card">

            <h1>{props.title.id}</h1><p>total: {props.total}</p>
        </div>
    )
}

export default HistoryCard;