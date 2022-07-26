import React from 'react'
import useFetch from "use-http"
import { useHistory } from 'react-router-dom'
import user from '../assets/villain.png'
import whats from '../assets/whatsapp.png'
 
const Iconos = () => {
    const history = useHistory()
    const location = {
      pathname: '/noRegistrado',
      state: { fromDashboard: true }
    }

    const { post } = useFetch(`https://server-kush.herokuapp.com/login`, {}, [])
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        const params = {
            email,
            password
        }
        post("", params)
        const result = await post("", params)
        if(result.success === false){
            history.replace(location.pathname)
        } else{
            history.replace('/Catalogo')
        }
        
    }

    return (
         <>
             <span>
                 <img className="user" src={user} alt="user"/>
                 <form className="login" onSubmit={handleSubmit} >
                  <input className="input" value={email} onChange={(e) => setEmail(e.target.value) } required="true" type="email" name="usuario" placeholder="mail"/>
                  <input className="input" value={password} onChange={(e) => setPassword(e.target.value) } required="true" type="password" name="password" placeholder="password"/>
                  <button className="button-login">Iniciar secion</button>
                 </form>
             </span>
             <a href="https://api.whatsapp.com/send?phone=59892222501"><img className="wapp" src={whats} alt="whatsapp"/></a>
         </>
     )
 }
 
export default Iconos 