import react, {useState} from "react";
import { CartContext } from "./cartContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";

function Outfits(props){
  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false);
  const handleShow = ()=> setShow(true);

  const cart2 = useContext(CartContext);
  const productQuantity = cart2.getProductQuantity(props.title);
  const item = {title: props.title, content: props.content}
  const [cart, setCart] = useState([])
  function addToCart(){
    // console.log(`added: ${props.title}, ${props.content}`);
    setCart([...cart, item])
    console.log(cart);
    
  }
  console.log(cart2.items)
  return(
    <>
  <div className="card">
    <h1>{props.title}</h1><p>{props.content}</p>
    <div>
    <button onClick={() => cart2.addOneToCart(props.title)} value="hi" className="btn btn-outline-warning my-btn">Add to cart</button>
    <a href="/checkout"><button className="btn btn-outline-danger my-btn">Buy now</button></a>
    <button onClick={handleShow} className="btn btn-secondary my-btn">View</button>
    </div>
  </div>
  <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>{props.content}</h1>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default Outfits;
