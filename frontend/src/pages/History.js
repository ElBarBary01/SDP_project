import react from "react";
import { Row,Col } from "react-bootstrap";
import HistoryCard from "../HistoryCard";
import NavbarComponent from "../NavbarComponent";
import { useState } from "react";
import axios from "axios";

function History(){
  const [email,setEmail] = useState("");
  const [history,setHistory] = useState([]);
  function handleChange(e){
    var input = e.target.value
    setEmail(input)
  }
  async function getHistory(){

     await axios.post("http://localhost:5001/api/history",{"email":email}).then(res => {
              setHistory(res.data);
            })
  }
  console.log(history)
  return(
    <div>
        <NavbarComponent />
        <h1>history</h1>
        <label>Email</label><br />
        <input type="email" onChange={handleChange} placeholder="email"></input><br />
        <button onClick={getHistory} className="btn btn-dark">See history</button>
        <Row xs={1} md={4} className="g-4 row">
        {history.map((h,idx) =>(<Col key={idx}><HistoryCard title={h.items} total={h.total} /></Col>))}
        </Row>
    </div>
    
  )
}

export default History;
