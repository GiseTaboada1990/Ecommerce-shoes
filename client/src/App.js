import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Favorites from "./components/Favorites/Favorites";
import UserProfile from "./components/UserProfile/UserProfile";
import EditUser from "./components/EditUser/EditUser";
import AboutUs from "./components/About/AboutUs"
import SocialFollow from "./components/About/SocialFollow";
import Community from "./components/About/Community";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import MercadoPago from "./components/MercadoPago/MercadoPago";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/Navbar";
import Dashboard from "./components/Admin/Dashboard";
import UserLogin  from "./components/UserLogin";

function App() {

  return (
    <Router>
      <UserLogin/>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/shoes/:id" element={<ProductDetail/>} />
        <Route exact path="/favorites" element={<Favorites/>} />
        <Route exact path="/datauser" element={<UserProfile/>}/>
        <Route exact path="/edituser" element={<EditUser/>}/>
        <Route exact path="/aboutUs" element={<AboutUs/>}/>
        <Route exact path="/contact" element={<SocialFollow/>}/>
        <Route exact path="/community" element={<Community/>}/>
        <Route exact path="/post" element={<CreateProduct/>}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/mercadopago" element={<MercadoPago />} />
        <Route exact path="/admin/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default React.memo(App);
