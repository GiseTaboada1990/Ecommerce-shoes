import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FaUserAlt } from "react-icons/fa";

export default function LoginButtonAuth0() {

    const { loginWithRedirect } = useAuth0()

    return (
        <button onClick={() => loginWithRedirect()}>
            <FaUserAlt style={{ color: "#f87d2d" }} />
        </button>
    )
}
