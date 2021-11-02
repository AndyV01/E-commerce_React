import React from 'react'
import logo from './assets/Logotransparente.png'

 
const Footer = () => {
    return (
         <footer>
         <div><img className="divimg" src={logo} alt="Logo Kush"/>
             <p>
             Basándose en la transmisión de los valores en los que se apoya la comunidad alternativa que existe en
             Humboldt, valores como la cooperación, la igualdad, el respeto hacia el medio ambiente, el respeto a la
             diversidad humana y a los cultivos 100% orgánicos, nuestro banco de semillas de marihuana Humboldt seeds
             ofrece súper genéticas desde Montevideo al resto del mundo.</p>
         </div>
         <div className="secondary">
             <h3>AYUDA</h3>
              <ul>
            <li>
                <a href="questions">Dudas sobre pedidos y formas de envío</a>
            </li>
            <li>
                <a href="questions"> Dudas sobre formas de pago</a>
            </li>
            <li>
                <a href="questions"> Dudas sobre producto</a>
            </li>
            <li>
                <a href="questions"> Dudas sobre cultivo</a>
            </li>
            <li>
                <a href="questions"> Otras dudas</a>
            </li>
              </ul>
         </div>
         <div className="secondary">
             <h3>TERMINOS Y CONDISIONES</h3>
              <ul>
            <li>
                <a href="questions"> Aviso Legal</a>
            </li>
            <li>
                <a href="questions"> Envios y plazos de entrega</a>
            </li>
            <li>
                <a href="questions"> Politica de Privacidad</a>
            </li>
            <li>
                <a href="questions"> Limitacion de Responsabilidad</a>
            </li>
            <li>
                <a href="questions">Legislacion y Juridiccion</a>
            </li>
            <li>
                <a href="questions"> Derechos Reservados</a>
            </li>
             </ul>
         </div>
         <div>
         <h3>SUSCRIPCION</h3>
         <form method="POST" action="http://localhost:4000/suscribe">
             <input className="input" required="true" type="text" name="name" placeholder="name"/>
             <input className="input" required="true" type="email" name="email" placeholder="mail"/>
             <input className="input" required="true" type="password" name="password" placeholder="password"/>
             <button className="button">Enviar</button>
         </form>
         <center><a href="https://www.facebook.com/usuario " target="_blank" className="fa fa-facebook-square"></a>
            <a href="https://twitter.com/usuario" target="_blank" className="fa fa-twitter-square"></a>
            <a href="https://plus.google.com/usuario" target="_blank" className="fa fa-google-plus-square"></a>
            <a href="https://linkedin.com/usuario" target="_blank" className="fa fa-linkedin-square"></a>
         </center>
         <p>© Copyright 2021 - kushTeen.uy - TODOS LOS DERECHOS RESERVADOS</p>
         </div>
         </footer>
    )
}

export default Footer