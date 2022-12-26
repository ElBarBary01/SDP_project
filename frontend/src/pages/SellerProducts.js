import react, {useState, useEffect} from "react";
import axios from "axios";
import Outfits from "../Outfits";
import { Row, Col } from "react-bootstrap";
import SellerProductCard from "../SellerProductCard";
import ProductSeller from "../users/ProductSeller";


function SellerProducts(){
    const [products, setProducts] = useState([])

      async function checkProduct(){
        var seller = new ProductSeller("omar","Seller@gmail");
        var result = await seller.checkProductPerformance();
        console.log(result.data);
        setProducts(result.data)
      }
      console.log(products);
    return(
        <div>
        <h1 className="home-title">Seller Products</h1>
        <div className="products">
        <Row xs={1} md={4} className="g-4 row">
        {products.map((p,idx) =>(<Col key={idx}><SellerProductCard title={p.name} price={p.price} id={p.ssid} quantitysold={p.quantitysold} /></Col>))}
        </Row>
        <button onClick={checkProduct} className="btn btn-dark">Check Product Performance</button>
        </div>
    </div>
    )
}
export default SellerProducts;