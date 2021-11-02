import React from 'react'
import user from './assets/villain.png'
import whats from './assets/whatsapp.png'
import carrito from './assets/carrito.png'
 
const Iconos = () => {
    return (
         <>
             <span>
                 <img className="user" src={user} alt="user"/>
                 <form className="login" action="http://localhost:4000/login" method="POST">
                  <input className="input" type="email" name="usuario" placeholder="mail"/>
                  <input className="input" type="password" name="password" placeholder="password"/>
                  <button className="button-login">Iniciar secion</button>
                 </form>
             </span>
             <a href="https://web.whatsapp.com/"><img className="wapp" src={whats} alt="whatsapp"/></a>
             <a href="add.com"> <img className="add" src={carrito} alt="add"/></a>
         </>
     )
 }
 
export default Iconos;  