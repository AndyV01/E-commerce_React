import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
        <ul>
            <Link  className="nav-button" to="/home"> 
                 INICIO
            </Link>
            <Link  className="nav-button" to="/Catalogo" > 
                 CATALOGO
            </Link>
            <Link  className="nav-button" to="/Blog" > 
                 BLOG
            </Link>
        </ul>
        </nav>
    )
}

export default Nav