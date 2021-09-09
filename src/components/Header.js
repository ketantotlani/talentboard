import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div>
             <nav className="navbar navbar-expand-md navbar-light">
            <div className="container ">
                    <Link to={'/'} className="navbar-brand">Talent Board</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/home'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/home'} className="nav-link">Job Seekers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/graphs'} className="nav-link">Graphs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header
