import React from 'react'
import { useParams } from 'react-router'
import useFetch from "use-http"
import FormCompra from './COMPONENTES/formOrdenDeCompra'

import './producto.css'

const Producto = () => {
    const imgUrl = 'https://kushteenuy.fly.dev/'
    const {id} = useParams()
    const { loading, data } = useFetch(`https://kushteenuy.fly.dev/producto/${id}`, {}, [])
    
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