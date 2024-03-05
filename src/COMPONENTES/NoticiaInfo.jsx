import React from "react"
import { useParams } from 'react-router'
import Carrousel from './Carrousel'
import Noticias from './Noticias'
import baner from '../assets/baner 2.jpg'
import useFetch from "use-http"
import spinner from "../assets/spinner.gif"
import { todasLasNoticias } from '../servicios/noticias'


const NoticiasInfo = ()  => {
    const {id} = useParams()
    const laNoticia = todasLasNoticias().find(noticia => noticia.id === parseInt(id));

   // const imgUrl = 'https://kushteenuy.fly.dev/'
   // const { loading, data } = useFetch(`https://kushteenuy.fly.dev/blog/${id}`, {}, [])
    
   // if (loading) {
   //     return <div className="spinner">
   //     <img src={spinner} alt=""/>
   // </div>
   // }
   if (!laNoticia) {
    return <div>No se encontró la noticia</div>;
  }
    return (
        <>
        <div className="section">
        <h1>{laNoticia.name_n}</h1>
        <img class="img2" src={laNoticia.route} alt="product"/>
        <p className="pp">
            {laNoticia.description}
        </p>
        <img className="img" src={baner} alt=""/>
       </div>
       <Noticias/>
       <Carrousel/>
       </>
)}
export default NoticiasInfo