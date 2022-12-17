import react from "react";
import Navbar from "./Navbar";
import "./styles.css";
import Cart from "./pages/Cart";
import CustomerService from "./pages/CustomerService";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SellerHome from "./pages/SellerHome";

function App() { 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/seller" element={<SellerHome />} />
      </Routes>
    </>
  );
}

export default App;
