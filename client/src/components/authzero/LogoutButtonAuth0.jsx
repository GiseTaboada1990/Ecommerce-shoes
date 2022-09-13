import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { BiLogOut } from "react-icons/bi";
export const DEPLOY_URL = process.env.REACT_APP_DEPLOY_URL

export default function LogoutButtonAuth0() {
    const { logout } = useAuth0()

    const handleLogout = () => {
        localStorage.setItem("products", JSON.stringify([]));
        localStorage.setItem("favProducts", JSON.stringify([]));
        localStorage.setItem("user", JSON.stringify([]));
        logout()
      };
    
    
    return (
        <a
            href={`${DEPLOY_URL}/`}
            onClick={() =>handleLogout ()}
        >
            <BiLogOut style={{ color: "#f87d2d" }}></BiLogOut>
        </a>
    )
}
