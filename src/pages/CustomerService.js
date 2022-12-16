import react from "react";
import axios from "axios";

function CustomerService(){

  const handleSubmit = function(req){
    axios.post("http://localhost:5001")
    req.preventDefault()
    // console.log(req.nativeEvent.srcElement.input.value);
  }

  return(
    <div>
      <h1>Customer Service</h1>
      <form action="http://localhost:5001" method="POST" className="myForm">
        <label>Your email</label>
        <input type="email" name="email"></input>
        <label>Complaint</label>
        <textarea name="complaint"></textarea>
        <button className="btn btn-primary" type="submit">submit</button>
      </form>
    </div>
  )
}

export default CustomerService;
