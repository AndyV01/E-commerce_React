import React from 'react'
import {Link} from "react-router-dom"
import useFetch from "use-http"
import './catalogo.css'
import spinner from "./assets/spinner.gif"

const Catalogo = () => {
   const imgUrl = 'http://localhost:4000/'
    const { loading, data, error } = useFetch("http://localhost:4000/catalogo", {}, [])
     
        if (error){
            console.error(error)
        }
        if (loading) {
            return <div className="spinner">
                <img src={spinner} alt=""/>
            </div>
        }
    
     return (
    <div className="sectionC">
    <h1 className="neon"> SEMILLAS FEMINIZADAS </h1>
    <div className="product_container">
        
        {data.list.map(producto => { 
            return (
                    <div className="product">
                        <h3>{producto.name_p}</h3>
                        <img className="pdec" alt="producto" src={ imgUrl + producto.route} />
                        <p>${producto.price}</p>
                        <Link className="buttonC" to= {`/producto/${producto.id}`}>VER MAS</Link>
                    </div>
            )}    
         ) }
    </div>
</div>
)}
export default Catalogo