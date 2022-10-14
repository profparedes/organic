import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";


const Routes = () => {
    return(
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/checkout" element={<Checkout/>}/>

                <Route path="/*" element={<Home/>}/>
            </Router>
        </BrowserRouter>
    )};

export default Routes;