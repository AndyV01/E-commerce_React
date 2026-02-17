import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import FormCompra from './COMPONENTES/formOrdenDeCompra'
import { traerProductos } from './servicios/prodcto'
import spinner from './assets/spinner.gif'

import './producto.css'

const Producto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      let isMounted = true

      const cargarProducto = async () => {
        setLoading(true)
        const productos = await Promise.resolve(traerProductos())
        const productoEncontrado = productos.find((item) => item.id === parseInt(id, 10))

        if (isMounted) {
          setProducto(productoEncontrado || null)
          setLoading(false)
        }
      }

      cargarProducto()

      return () => {
        isMounted = false
      }
    }, [id])

   if (loading) {
    return <div className="spinner"><img src={spinner} alt="Cargando producto"/></div>
   }

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
