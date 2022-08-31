import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar/Navbar";

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
  
  useEffect(() => {
    if(user) {
      axios.post(`${process.env.REACT_APP_URL}/auth`, userToBackend)
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
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
