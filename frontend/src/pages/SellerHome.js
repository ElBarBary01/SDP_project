import react, { useState } from "react";
import NavbarSeller from "../NavbarSeller";

function SellerHome(){
    const [outfitType, setOutfitType] = useState(false);
    const [groceriesType, setGroceriesType] = useState(false);
    const [toolType, setToolType] = useState(false);
    
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productType, setProductType] = useState("");

    function handleName(e){
        var input = e.target.value;
        setProductName(input);
    }
    function handlePrice(e){
        var input = e.target.value;
        setProductPrice(input);
    }
    function handleCategory(e){
        var input = e.target.value;
        setProductCategory(input);
    }
    function handleType(e){
        var input = e.target.value;
        setProductType(input);
    }
    function createProduct(){
        
    }
    return(
        <>
        <NavbarSeller />
        <div>
            <div className="myForm">
                <label>Product Name</label>
                <input onChange={handleName} name="name" placeholder="product name" />
                <label>Price</label>
                <input onChange={handlePrice} name="price" placeholder="product Prcie" />
                <label>Product Category</label>
                <input onChange={handleCategory} name="name" placeholder="product category" />
                <label>Product Category</label>
                <input onChange={handleType} name="name" placeholder="product type" />
                <button onClick={createProduct} className="btn btn-primary">add</button>
            </div>
        </div>
        </>
    )
}
export default SellerHome;