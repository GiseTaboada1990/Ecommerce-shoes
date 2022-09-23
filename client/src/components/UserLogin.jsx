import React from 'react';
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const UserLogin = () => {
    const { user } = useAuth0()

    useEffect(() => {
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
      if(user) {
        axios.post(`${process.env.REACT_APP_URL}/auth`, userToBackend)
        .then( res => {
          localStorage.setItem("user", JSON.stringify(res.data));
        })
      } 
  
      if (localStorage.length === 0) {
        localStorage.setItem("products", JSON.stringify([]));
        localStorage.setItem("favProducts", JSON.stringify([]));
        localStorage.setItem("user", JSON.stringify([]));
      }
    }, [ user]);
  return (
    <div></div>
  )
}
