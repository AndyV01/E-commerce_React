import React from 'react'
import { useParams, useHistory } from 'react-router'
import useFetch from "use-http"
import Button from "./Button"
import './producto.css'

const Producto = () => {
    const imgUrl = 'http://localhost:4000/'
    const history = useHistory()
  const location = {
    pathname: '/compraOK',
    pathname2: '/noRegistrado',
    state: { fromDashboard: true }
  }

    const {id} = useParams()
    const { loading, data } = useFetch(`http://localhost:4000/producto/${id}`, {}, [])
    const { post } = useFetch(`http://localhost:4000/order/${id}`, {}, [])
    const [email, setEmail] = React.useState('')
    const [adress, setAdress] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const params = {
            email,
            adress
        }
        post("", params)
        
        if(data.sucsses === false){
            history.push(location.pathname2) 
        } else{
            history.push(location.pathname) 
        }
    }
    
    
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
                 <form onSubmit={handleSubmit} >
                      <input value={email} onChange={(e) => setEmail(e.target.value) } required="true" type="email" name="usuario" placeholder="mail"/>
                      <input value={adress} onChange={(e) => setAdress(e.target.value) } required="true" type="adress" name="adress" placeholder="adress"/>
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