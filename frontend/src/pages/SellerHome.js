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
            <form className="myForm" action="http://localhost:5001/"method="POST">
                <label>Product Name</label>
                <input name="name" placeholder="product name" />
                <label>Price</label>
                <input name="price" placeholder="product Prcie" />
                <label>Product Type</label>
                <select name="type">
                    <option value="SUMMER_OUTFIT">Summer Outfit</option>
                    <option value="WINTER_OUTFIT">Winter Outfit</option>
                    <option value="GROCERIES">Groceries</option>
                    <option value="HAND_TOOLS">Hand Tools</option>
                    <option value="POWER_TOOLS">Power Tools</option>
                </select>
                <button className="btn btn-primary" type="submit">add</button>
            </form>
        </div>
        </>
    )
}
export default SellerHome;