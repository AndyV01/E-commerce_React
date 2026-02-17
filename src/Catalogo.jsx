import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import './catalogo.css'
import {traerProductos} from './servicios/prodcto'
import spinner from './assets/spinner.gif'


const Catalogo = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      let isMounted = true

      const cargarProductos = async () => {
        setLoading(true)
        const productos = await Promise.resolve(traerProductos())

        if (isMounted) {
          setProduct(productos)
          setLoading(false)
        }
      }

      cargarProductos()

      return () => {
        isMounted = false
      }
    }, [])

    if (loading) {
      return (
        <div className="spinner">
          <img src={spinner} alt="Cargando productos" />
        </div>
      )
    }
    
     return (
    <div className="sectionC">
    <h1 className="neon"> SEMILLAS FEMINIZADAS </h1>
    <div className="product_container">
        
        {product.map(producto => { 
            return (
                    <div className="product" key={producto.id}>
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
