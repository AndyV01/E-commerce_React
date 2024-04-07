import React from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import logo from './assets/Logotransparente.png'
import cogoLogo from './assets/cogollosolo.png'
import baner from './assets/led.jpg'
import './App.css'
import Nav from './COMPONENTES/nav'
import Iconos from './COMPONENTES/iconos'
import ContainerCards from './ContainerCardsHome'
import Catalogo from './Catalogo'
import Blog from './Blog'
import Footer from './COMPONENTES/Footer'
import Producto from './Producto'
import NoticiasInfo from './COMPONENTES/NoticiaInfo'
import SuscriptoOK from './COMPONENTES/suscriptoOK'
import Compra from './COMPONENTES/CompraExitosa'
import NoRegistrado from './COMPONENTES/noRegistrado'


function App() {
  const witToken = process.env.REACT_APP_WIT_TOKEN;

  const handleNewUserMessage = async (newMessage) => {
    try {
      const response = await fetch(`https://api.wit.ai/message?q=${encodeURIComponent(newMessage)}`, {
        headers: {
          Authorization: `Bearer ${witToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('No se pudo obtener una respuesta exitosa de Wit.ai');
      }
      const data = await response.json();
      console.log('data', data);
      const { traits } = data;

      if (traits) {
        const entityNames = Object.keys(traits);
        const mainEntity = entityNames[0];
        const responseMessage = traits[mainEntity][0].value;

        const formattedMessage = newMessage.replace(/\s+/g, '_').toLowerCase();

        if (formattedMessage === mainEntity) {
          addResponseMessage(responseMessage);
        } else {
          addResponseMessage('Lo siento, no pude entender tu pregunta. ¿Puedes intentarlo de otra manera?');
        }
      } else {
        addResponseMessage('Lo siento, no pude entender tu pregunta. ¿Puedes intentarlo de otra manera?');
      }
    } catch (error) {
      console.error('Error al enviar mensaje a Wit.ai:', error);
      addResponseMessage('Lo siento, ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const addEmoji = (emoji) => {
    addResponseMessage(emoji.native);
  };

  return (
    <Router>
      <body className="stars">
        <header>
          <div>
            <img src={logo} className="logo" alt="logo" />
            <Nav />
          </div>
          <img src={baner} className="baner" alt="logo" />
        </header>
        <Iconos />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/producto/:id">
              <Producto />
            </Route>
            <Route path="/blog/:id">
              <NoticiasInfo />
            </Route>
            <Route path="/home">
              <ContainerCards />
            </Route>
            <Route path="/Catalogo">
              <Catalogo />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/SuscriptoOK">
              <SuscriptoOK />
            </Route>
            <Route path="/CompraOK">
              <Compra />
            </Route>
            <Route path="/noRegistrado">
              <NoRegistrado />
            </Route>
          </Switch>
        </main>
        <Footer />
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chatea con nosotros"
          subtitle="¿En qué podemos ayudarte?"
          profileAvatar={cogoLogo}
        />
        
      </body>
    </Router>
  )
}

export default App;
