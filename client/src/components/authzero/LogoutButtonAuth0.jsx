import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { BiLogOut } from "react-icons/bi";

export default function LogoutButtonAuth0() {

    const { logout } = useAuth0()

    return (
        <a
            href='#'
            onClick={() => logout()}
        >
            <BiLogOut style={{ color: "#f87d2d" }}></BiLogOut>
        </a>
    )
}
