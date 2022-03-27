import React from 'react'
import './blog.css'
import logo1 from './assets/medical-recreational-cover.jpg'
import logo2 from './assets/baner.jpg'
import logo3 from './assets/baner 2.jpg'
import Carrousel from './COMPONENTES/Carrousel'
import Noticias from './COMPONENTES/Noticias'

const Blog = () => {
    return (
        <>
         <div className="section">
             <img className="img" src={logo1} alt=""/>
             <img className="img" src={logo2} alt=""/>
             <img className="img" src={logo3} alt=""/>
             <h1>100 MANERAS DE COLOCARSE</h1>
             <p className="pp">Una mujer se lanzó a la búsqueda de explorar formas alucinantes de consumir marihuana y las fue
             alcanzando, hasta que demostró 100 de ellas.
             </p>
             <iframe src="https://www.youtube.com/embed/SAgrhc9CFno"
             title="YouTube video player" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>
         </div>
         <Noticias/>
         <Carrousel/>
     </>
     )
}

export default Blog