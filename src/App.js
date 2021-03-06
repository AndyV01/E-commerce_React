import React from 'react'
import logo from './assets/Logotransparente.png'
import baner from './assets/led.jpg'
import './App.css'
import Nav from './COMPONENTES/nav'
import Iconos from './COMPONENTES/iconos'
import ContainerCards from './ContainerCardsHome'
import Catalogo from './Catalogo' 
import Blog from './Blog'
import Footer from './COMPONENTES/Footer'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Producto from './Producto'
import NoticiasInfo from './COMPONENTES/NoticiaInfo'
import SuscriptoOK from './COMPONENTES/suscriptoOK'
import Compra from './COMPONENTES/CompraExitosa'
import NoRegistrado from './COMPONENTES/noRegistrado'


function App() {

  return (
    <Router>
    <body className="stars">
       <header>
        <div>
          <img src={logo} className="logo" alt="logo" />
          <Nav/>
        </div>
        <img src={baner} className="baner" alt="logo" />
       </header>
         <Iconos/>
       <main>
         <Switch>
         <Route exact path="/">
             <Redirect to ="/home"/>
           </Route>
           <Route path="/producto/:id">
             <Producto/>
           </Route>
           <Route path="/blog/:id">
             <NoticiasInfo/>
           </Route>
           <Route  path="/home"> 
             <ContainerCards/>
           </Route>
           <Route path="/Catalogo">
             <Catalogo/>
           </Route>
           <Route path="/Blog">
             <Blog/>
           </Route>
           <Route  path="/SuscriptoOK">
             <SuscriptoOK/>
           </Route>
           <Route  path="/CompraOK">
             <Compra/>
           </Route>
           <Route  path="/noRegistrado">
             <NoRegistrado/>
           </Route>
         </Switch>
      </main>
      <Footer/>
    </body>
    </Router>
  )
}

export default App;
