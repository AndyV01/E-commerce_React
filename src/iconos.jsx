import React from 'react'
import useFetch from "use-http"
import { Redirect } from 'react-router-dom'
import user from './assets/villain.png'
import whats from './assets/whatsapp.png'
 
const Iconos = () => {

    const { post } = useFetch(`http://localhost:4000/login`, {}, [])
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const params = {
            email,
            password
        }
        post("", params)
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
             <a href="https://web.whatsapp.com/"><img className="wapp" src={whats} alt="whatsapp"/></a>
         </>
     )
 }
 
export default Iconos 