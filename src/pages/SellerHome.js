import react, { useState } from "react";

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
        <div>
            <form>
                <input name="product-name" placeholder="product name" />
                <textarea name="content" value={note.content} placeholder="product description" rows="3" />
                <button onClick={handleChange}>add</button>
            </form>
        </div>
    )
}
export default SellerHome;