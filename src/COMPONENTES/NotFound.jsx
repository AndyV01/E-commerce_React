import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1>Página no encontrada</h1>
      <p className="not-found__text">
        La ruta que intentaste visitar no existe o fue movida.
      </p>
      <Link to="/home" className="not-found__button">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
