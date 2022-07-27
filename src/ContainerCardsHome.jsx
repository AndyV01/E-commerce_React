import React from 'react'
import fondo1 from './assets/17631.jpg'
import fondo2 from './assets/descarga.jfif'
import fondo3 from './assets/FOTO-4_web.jpg'
import Card from './COMPONENTES/CardHome'

 
const ContainerCards = () => {
     return (
        <div className="container__card">
            <Card
            logo={fondo1}
            title1 = "Semillas CBD"
            title2 = "Semillas CBD"
            description = "Nuestra gama de semillas de marihuana con CBD alto que está disponible en nuestro catálogo." 
            
            />
            <Card
            logo={fondo3}
            title1 = "Banco de Semillas"
            title2 = "Banco de Semillas"
            description = "Uno de los factores más importantes del cultivo de marihuana es la genética que usemos."
        
            />
            <Card
            logo = {fondo2}
            title1 = "Comunidad Sustentable"
            title2 = "BLOG"
            description = "comunidad ecológica y socialmente sana y resistente a través del manejo de sus recursos naturales."
            
            />
        </div>
     )
}

export default ContainerCards