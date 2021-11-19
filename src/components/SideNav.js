import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
    return (
        <div className="sidebar">
            <nav className="navbar">
                <h3><Link className="link" to="/">Crypto</Link></h3>
                <div className="nav">
                    <li><Link className="link" to="/">Dashboard</Link></li>
                    <li><Link className="link" to="/">Wallet</Link></li>
                    <li><Link className="link" to="/">Analytics</Link></li>
                    <li><Link className="link" to="/">History</Link></li>
                    <li><Link className="link" to="/">News</Link></li>
                    <li><Link className="link" to="/">Settings</Link></li>
                    <li><Link className="link" to="/">Logout</Link></li>
                </div>
            </nav>
        </div>
    )
}

export default SideNav
