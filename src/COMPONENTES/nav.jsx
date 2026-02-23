import React from 'react'
import { Link } from "react-router-dom"

const Nav = ({ theme, onToggleTheme }) => {
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
            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
            </button>
        </ul>
        </nav>
    )
}

export default Nav
