import React from "react"
import { useParams } from 'react-router'
import Carrousel from './Carrousel'
import Noticias from './Noticias'
import baner from '../assets/baner 2.jpg'
import useFetch from "use-http"
import spinner from "../assets/spinner.gif"



const NoticiasInfo = ()  => {

    const imgUrl = 'https://kushteenuy.fly.dev/'
    const {id} = useParams()
    const { loading, data } = useFetch(`https://kushteenuy.fly.dev/blog/${id}`, {}, [])
    
    if (loading) {
        return <div className="spinner">
        <img src={spinner} alt=""/>
    </div>
    }
    
    return (
        <>
        <div className="section">
        
        <h1>
            {data.new.name_n}
        </h1>
        <img class="img2" src={imgUrl + data.new.route} alt="product"/>
        <p className="pp">
            {data.new.description}
        </p>
        <img className="img" src={baner} alt=""/>
       </div>
       <Noticias/>
       <Carrousel/>
       </>
)}
export default NoticiasInfo