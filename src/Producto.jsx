import React from 'react'
import { useParams } from 'react-router'
import useFetch from "use-http"
import FormCompra from './COMPONENTES/formOrdenDeCompra'
import { product } from './Catalogo'

import './producto.css'

const Producto = () => {
    const imgUrl = 'https://kushteenuy.fly.dev/'
    const {id} = useParams()
    const { loading, data } = useFetch(`https://kushteenuy.fly.dev/producto/${id}`, {}, [])
         
return (
         <section>
             <div>
                 <img src={product.route} alt="product"/>
             </div>
             <div className="data">
                 <h1 className="h1" >
                 {product.name}
                 </h1 >
                 <p>
                 {product.description}
                 </p>
                 <div className="description">
                     <h3>Pac 3 semillas ${product.price}</h3>
                     <FormCompra/>
                 </div>
             </div>
         </section>     
         )
     }

export default Producto