import React from 'react'
import { useParams } from 'react-router'
import useFetch from "use-http"
import FormCompra from './formOrdenDeCompra'

import './producto.css'

const Producto = () => {
    const imgUrl = 'http://localhost:4000/'
    const {id} = useParams()
    const { loading, data } = useFetch(`http://localhost:4000/producto/${id}`, {}, [])
    
    if (loading)
       {
         return null
       }      
return (
         <section>
             <div>
                 <img src={ imgUrl + data.product.route} alt="product"/>
             </div>
             <div className="data">
                 <h1 className="h1" >
                 {data.product.name_p}
                 </h1 >
                 <p>
                 {data.product.description}
                 </p>
                 <div className="description">
                     <h3>Pac 3 semillas ${data.product.price}</h3>
                
                     <FormCompra/>
                 </div>
             </div>
         </section>     
         )
     }

export default Producto