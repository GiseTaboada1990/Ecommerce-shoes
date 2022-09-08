import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useMemo } from "react";
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
import Admin from "./components/Admin/Admin";

function App() {

  const { user } = useAuth0()

  const userToBackend = {
    name: user && user.given_name,
    surname: user && user.family_name,
    email: user && user.email,
    username: user && user.nickname,
    image: user && user.picture,
    password: user && user.password ? user.password : null,
    address: user && user.address ? user.address : null,
    date_of_Birth: user && user.date_of_Birth ? user.date_of_Birth : null,
    phone_number: user && user.phone_number ? user.phone_number : null,
  }
  const userBackend = useMemo(()=>userToBackend,[user])
  useEffect(() => {
    if(user) {
      axios.post(`${process.env.REACT_APP_URL}/auth`, userBackend)
      .then( res => {
        localStorage.setItem("user", JSON.stringify(res.data));
      })
    } 

    if (localStorage.length === 0) {
      localStorage.setItem("products", JSON.stringify([]));
      localStorage.setItem("favProducts", JSON.stringify([]));
      localStorage.setItem("user", JSON.stringify([]));
    }
  }, [userBackend, user]);

  return (
    <Router>
      <NavBar />
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
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
