import React from "react"
import { useHistory } from 'react-router'
import logo1 from './assets/cogollosolo.png'
import logo2 from './assets/comprobado.png'
import Button from "./Button"

const SuscriptoOK = ()  => {
    const history = useHistory()
    const handleHome = () => {
        history.push("/home")
    }

return (
  <div className="suscripto">
     <h1 className="neon">SUSCRIPTO___CORRECTAMENTE</h1>
    <div className="aa"> 
         <img className="ok" src={logo1} alt="cogollo"/>
         <img className="ok" src={logo2} alt="comprobado"/>
         </div>
     <Button  className="b"
     onClick={handleHome}
     description="volver al INICIO" />
 </div>
)}

export default SuscriptoOK