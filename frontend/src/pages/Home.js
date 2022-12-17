import react, {useState, useEffect} from "react";
import Outfits from "../Outfits";
import Search from "../Search";
import { Row, Col } from "react-bootstrap";
import CartProvider from "../cartContext";
import NavbarComponent from "../NavbarComponent";
import axios from "axios";

function Home(){
  const [cart, setCart] = useState([])
  const [initialProducts, setInitialProducts] = useState([])
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setProducts(res.data.results.map(p => p.name))
      setInitialProducts(res.data.results.map(p => p.name))
    })
  }, [])

  function filter(e){
    const search = e.target.value;
    if(search !== ''){
      var filteredProducts = initialProducts.filter(p => p.includes(search))
      setProducts(filteredProducts)
    }else{
      setProducts(initialProducts)
    }
  }

  return(
    <CartProvider>
    <NavbarComponent />
    <div>
        <h1 className="home-title">Products</h1>
        <div className="searchBar">
          <input onChange={filter} placeholder="Search for an item" />
        </div>
        {/* <Search products={products} setProducts={setProducts} /> */}
        <h1>Outfits</h1>
        <h5>Winter Outfits</h5>
        <Row xs={1} md={4} className="g-4 row">
        {products.map((p,idx) =>(<Col key={idx}><Outfits title={p} content="black t-shirt"/></Col>))}
        </Row>
        {/* <div className="products">{products.map(p =>(<Outfits title={p} content="black t-shirt"/>))}</div> */}
        <h5>Summer Outfits</h5>
        <Row xs={1} md={4} className="g-4">
        <Col><Outfits title="t-shirt" content="black t-shirt"/></Col>
        <Col><Outfits title="t-shirt" content="black t-shirt"/></Col>
        <Col><Outfits title="t-shirt" content="black t-shirt"/></Col>
        <Col><Outfits title="t-shirt" content="black t-shirt"/></Col>
        <Col><Outfits title="t-shirt" content="black t-shirt"/></Col>
        
        </Row>
        <h1>Groceries</h1>
        <h1>Tools</h1>
        <h5>Hand Tools</h5>
        <h5>Power Tools</h5>
    </div>
    </CartProvider>
  )
}

export default Home;
