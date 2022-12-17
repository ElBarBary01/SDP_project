import react from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";

function NavbarComponent(){
  const [show, setShow] = useState(false);
  const handleClose = ()=> setShow(false);
  const handleShow = ()=> setShow(true);
  return(
    <div>
    <Navbar className="nav2" expand="sm">
      <Navbar.Brand href="/">sbace</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button onClick={handleShow}>Cart 0 items</Button>
        <ul>
          <li>
          <a href="/complaint">Customer Service</a>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>products</h1>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default NavbarComponent;
