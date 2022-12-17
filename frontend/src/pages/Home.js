import react, {useState, useEffect} from "react";
import Outfits from "../Outfits";
import Search from "../Search";
import axios from "axios";

function Home(){
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setProducts(res.data.results.map(p => p.name))
    })
  }, [])

  function filter(e){
    const search = e.target.value;
    const filteredProducts = products.filter(p => p.includes(search))
    console.log(filteredProducts)
    setProducts(filteredProducts)
  }

  return(
    <div>
        <h1 className="home-title">Products</h1>
        <div className="searchBar">
          <input onChange={filter} placeholder="Search for an item" />
        </div>
        {/* <Search products={products} setProducts={setProducts} /> */}
        <h1>Outfits</h1>
        <h5>Winter Outfits</h5>
        <div className="products">{products.map(p =>(<Outfits title={p} content="black t-shirt"/>))}</div>
        <h5>Summer Outfits</h5>
        <h1>Groceries</h1>
        <h1>Tools</h1>
        <h5>Hand Tools</h5>
        <h5>Power Tools</h5>
    </div>
  )
}

export default Home;
