import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FaRegUser } from "react-icons/fa";

export default function LoginButtonAuth0() {

    const { loginWithRedirect } = useAuth0()

    return (
        <div className="nav-item d-flex align-items-center">
            <a href='#' onClick={() => loginWithRedirect()} className="nav-link text-body font-weight-bold px-0">
                <FaRegUser className="me-sm-2 text-secondary fs-5" aria-hidden="true" />
                <span className="d-sm-inline d-none">Sign In</span>
            </a>
        </div>
    )
}
