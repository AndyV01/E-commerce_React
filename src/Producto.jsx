import React from 'react'
import { useParams } from 'react-router'
import { traerProductos } from './servicios/prodcto'
import Button from "./Button"
import './producto.css'

const Producto = () => {

    const producto = traerProductos()
     const {id} = useParams()

     return (
         <section>
             <div>
                 <img src={producto.route} alt="product"/>
             </div>
             <div>
                 <h1>
                 {producto.name_p}
                 </h1>
                 <p>
                 {producto.description}
                 </p>
                 <div className="description">
                     <h3>Pac 3 semillas ${producto.price}</h3>
                 <form method="POST" action="http://localhost:4000/suscribe">
                      <input  required="true" type="text" name="name" placeholder="name"/>
                      <input  required="true" type="adress" name="adress" placeholder="adress"/>
                      <Button
                     description="COMPRAR"
                     />
                  </form>
                    
                 </div>
             </div>
         </section>     
         )
     }

export default Producto