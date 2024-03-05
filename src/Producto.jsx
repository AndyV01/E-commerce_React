import React from 'react'
import { useParams } from 'react-router'
import FormCompra from './COMPONENTES/formOrdenDeCompra'
import { traerProductos } from './servicios/prodcto'

import './producto.css'

const Producto = () => {
    const { id } = useParams();
    const productos = traerProductos()
    const producto = productos.find(producto => producto.id === parseInt(id, 10));
   // const imgUrl = 'https://kushteenuy.fly.dev/'
   // const { loading, data } = useFetch(`https://kushteenuy.fly.dev/producto/${id}`, {}, [])
   if (!producto) {
    return <div>No se encontró el producto</div>;
}      
return (
         <section>
             <div>
                 <img src={producto.route} alt="product"/>
             </div>
             <div className="data">
                 <h1 className="h1" >
                 {producto.name_p}
                 </h1 >
                 <p>
                 {producto.description}
                 </p>
                 <div className="description">
                     <h3>Pac 3 semillas ${producto.price}</h3>
                     <FormCompra/>
                 </div>
             </div>
         </section>     
         )
     }

export default Producto