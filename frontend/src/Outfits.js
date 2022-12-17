import react, {useState} from "react";

function Outfits(props){
  const item = {title: props.title, content: props.content}
  const [cart, setCart] = useState([])
  function addToCart(){
    // console.log(`added: ${props.title}, ${props.content}`);
    setCart([...cart, item])
    console.log(cart);
    
  }
  return(
  <div className="card">
    <h1>{props.title}</h1><p>{props.content}</p>
    <div>
    <button onClick={addToCart} value="hi" className="btn btn-outline-warning my-btn">Add to cart</button>
    <a href="/checkout"><button className="btn btn-outline-danger my-btn">Buy now</button></a>
    </div>
  </div>
  )
}

export default Outfits;
