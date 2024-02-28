import React from 'react'
import {Link} from "react-router-dom"
import useFetch from "use-http"
import './catalogo.css'
import spinner from "./assets/spinner.gif"
import {traerProductos} from './servicios/prodcto'


const Catalogo = () => {
    const product = traerProductos()
  // const imgUrl = 'https://closed-stirring-ermine.glitch.me/'
  //  const { loading, data, error } = useFetch("https://closed-stirring-ermine.glitch.me/catalogo", {}, [])
     
   //     if (error){
   //         console.error(error)
   //     }
   //     if (loading) {
   //         return <div className="spinner">
   //             <img src={spinner} alt=""/>
   //         </div>
   //     }
    
     return (
    <div className="sectionC">
    <h1 className="neon"> SEMILLAS FEMINIZADAS </h1>
    <div className="product_container">
        
        {product.map(producto => { 
            return (
                    <div className="product">
                        <h3>{producto.name_p}</h3>
                        <img className="pdec" alt="producto" src={producto.route} />
                        <p style={{color: "white", marginBottom: 6}}>${producto.price}</p>
                        <Link className="buttonC" to= {`/producto/${producto.id}`}>VER MAS</Link>
                    </div>
            )}    
         ) }
    </div>
</div>
)}
export default Catalogo