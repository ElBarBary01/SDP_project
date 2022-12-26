import react from "react";
import { Modal } from "react-bootstrap";

function NavbarSeller(){
  return(
    <nav className="nav">
      <a href="/" className="site-title">sbace</a>
    <ul>
      <li>
        <a href="/seller">Add product</a>
      </li>
      <li>
        <a href="/seller-products">Check Products</a>
      </li>
    </ul>
    </nav>
  )
}

export default NavbarSeller;
