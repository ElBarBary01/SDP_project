import react from "react";

function Outfits(props){
  return(
  <div className="card">
    <h1>{props.title}</h1><p>{props.content}</p>
    <div>
        <button className="btn btn-outline-warning my-btn">Add to cart</button>
        <button className="btn btn-outline-danger my-btn">Buy now</button>
    </div>
  </div>
  )
}

export default Outfits;
