import React from 'react'
import './assets/css/material-dashboard.css'
import { NavLink } from 'react-router-dom'

export default function Aside() {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
            <hr className="horizontal light mt-0 mb-2" />
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/admin/home">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/admin/products">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Productos</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white " to="/admin/users">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Usuarios</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white " to="/admin/sold">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Ventas</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white " to="/admin/stock">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Stock</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </aside>
    )
}
