import React from "react"
import { useParams } from 'react-router'
import Carrousel from './Carrousel'
import Noticias from './Noticias'
import baner from './assets/baner 2.jpg'
import { todasLasNoticias } from './servicios/noticias'


const NoticiasInfo = ()  => {
    const {id} = useParams()
    const laNoticia = todasLasNoticias ()
    
    return (
        <>
        <div>
        <h1>
            {laNoticia.name_n}
        </h1>
        <img class="baner" src={laNoticia.route} alt="product"/>
        <p>
            {laNoticia.description}
        </p>
        <img src={baner} alt=""/>
       </div>
       <Noticias/>
       <Carrousel/>
       </>
)}
export default NoticiasInfo