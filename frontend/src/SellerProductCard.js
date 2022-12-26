import react, {useState, useEffect} from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ProductSeller from "./users/ProductSeller";


function SellerProductCard(props){
  const [showUpdate, setShowUpdate] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

    async function removeProduct(){
      var seller = new ProductSeller("omar","Seller@gmail");
      await seller.removeProduct(props.id);
    }
    function handleUpdate(){
      setShowUpdate(!showUpdate);
    }
    function newN(e){
      var input = e.target.value;
      setProductName(input);
    }
    function newP(e){
      var input = e.target.value;
      setProductPrice(input);
    }
    async function updateProduct(){
      var product = {
        name: productName,
        price: productPrice,
        ssid: props.id
      }
      var seller = new ProductSeller("omar","Seller@gmail");
      var result = await seller.updateProduct(product);
    }

    return(
        <div className="card">
            <h1>{props.title}</h1><p>Price: {props.price}</p>
            <div>
                <button onClick={removeProduct} className="btn btn-dark">remove</button>
                <button onClick={handleUpdate} className="btn btn-dark">update</button>
                {showUpdate?
                  <div>
                    <label>New Product Name</label>
                    <input onChange={newN} placeholder="new name"></input>
                    <label>New Product Price</label>
                    <input onChange={newP} placeholder="new price"></input>
                    <button onClick={updateProduct} className="btn btn-outline-dark">Update Product</button>
                </div>
                :
                <></>
                }
            </div>
        </div>
    )
}
export default SellerProductCard;