import React from 'react'
import useFetch from "use-http"
import { useHistory, useParams } from 'react-router'
import Button from './Button'

const FormCompra = () => {
    const {id} = useParams()
    const { post, loading } = useFetch(`https://kushteenuy.fly.dev/order/${id}`, {}, [])
    const history = useHistory()
    const location = {
      pathname: '/compraOK',
      pathname2: '/noRegistrado',
      state: { fromDashboard: true }
    }

    const [email, setEmail] = React.useState(null)
    const [adress, setAdress] = React.useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        const params = {
            email,
            adress
        }
        post("", params)
       
    const result = await post("", params)

    if(result.succes === true){
        history.replace(location.pathname)
    } else{
        history.replace(location.pathname2)
    }
    }
    if (loading){
        return null
    }  
   return(
    <form onSubmit={handleSubmit} >
    <input value={email} onChange={(e) => setEmail(e.target.value) } required="true" type="email" name="usuario" placeholder="mail"/>
    <input value={adress} onChange={(e) => setAdress(e.target.value) } required="true" type="adress" name="adress" placeholder="adress"/>
    <Button
   description="COMPRAR"
   />
</form>
   )
}

export default FormCompra