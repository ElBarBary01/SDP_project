import react, {useState, useEffect} from "react";
import Outfits from "../Outfits";
import axios from "axios";

function Home(){
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setProducts(res.data.results.map(p => p.name))
    })
  }, [])
  return(
    <div>
        <h1 className="home-title">Products</h1>
        <h1>Outfits</h1>
        <h5>Winter Outfits</h5>
        {products.map(p =>(<Outfits title={p} content="black t-shirt"/>))}
        <h5>Summer Outfits</h5>
        <Outfits title="t-shirt" content="black t-shirt"/>
        <Outfits title="t-shirt" content="black t-shirt"/>
        <Outfits title="t-shirt" content="black t-shirt"/>
        <Outfits title="t-shirt" content="black t-shirt"/>
        <Outfits title="t-shirt" content="black t-shirt"/>
        <h1>Groceries</h1>
        <h1>Tools</h1>
        <h5>Hand Tools</h5>
        <h5>Power Tools</h5>
    </div>
  )
}

export default Home;
