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
        console.log(res)
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
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/shoes/:id" element={<ProductDetail/>} />
        <Route exact path="/favorites" element={<Favorites/>} />
        <Route exact path="/datauser" element={<UserProfile/>}/>
        <Route exact path="/edituser" element={<EditUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
