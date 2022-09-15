import React from 'react'
import Aside from './Aside'
import NavDashboard from './NavDashboard'
import './assets/css/material-dashboard.css'
// import './assets/js/material-dashboard.js'
import { Route, Routes } from 'react-router-dom'
import HomeDashboard from './HomeDashboard'
import ProductsDashboard from './ProductsDashboard'
import UsersDashboard from './UsersDashboard'
import SoldsDashboard from './SoldsDashboard'
import StockDashboard from './StockDashboard'

export default function Dashboard() {
    return (
        <div className="g-sidenav-show " style={{ marginTop: '45px' }}>
            <Aside />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavDashboard />
                <Routes>
                    <Route exact path='/home' element={<HomeDashboard />} />
                    <Route path='/products' element={<ProductsDashboard />} />
                    <Route path='/users' element={<UsersDashboard />} />
                    <Route path='/sold' element={<SoldsDashboard />} />
                    <Route path='/stock' element={<StockDashboard />} />
                </Routes>
            </main>
        </div>
    )
}
