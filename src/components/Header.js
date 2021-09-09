import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div>
              <header>
                <nav>
                    <div className="container">
                    <div className="logo">
                            <h3 > <Link to={'/home'}>  Talent Board</Link></h3>
                            </div>
                        <div className="items">
                            
                            <div className="links">
                                <Link to={'/home'}>Home</Link>
                                <Link to={'/home'}>Job Seekers</Link>
                                <Link to={'/graphs'}>Graphs</Link>
                                <Link to={'/about'}>About</Link>
                            </div>
                        </div>
                    </div>
                </nav>
        
    </header>
        </div>
    )
}

export default Header
