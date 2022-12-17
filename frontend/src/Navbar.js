import react from "react";

function Navbar(){
  return(
    <nav className="nav">
      <a href="/" className="site-title">sbace</a>
    <ul>
      <li>
        <a href="/cart">Cart</a>
      </li>
      <li>
        <a href="/customer-service">Customer Service</a>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar;
