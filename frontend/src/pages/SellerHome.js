import react, { useState } from "react";
import NavbarSeller from "../NavbarSeller";

function SellerHome(){
    const[note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event){
        const {name, value} = event.target;
        setNote({title: name, content: value})
    }
    return(
        <>
        <NavbarSeller />
        <div>
            <form className="myForm">
                <label>Product Name</label>
                <input name="product-name" placeholder="product name" />
                <label>Product Type</label>
                <select>
                    <option value="outfits">Outfit</option>
                    <option value="groceries">Groceries</option>
                    <option value="tools">Tools</option>
                </select>
                <button className="btn btn-primary" onClick={handleChange}>add</button>
            </form>
        </div>
        </>
    )
}
export default SellerHome;