import React from 'react'

import Card from './COMPONENTES/CardHome'

 
const ContainerCards = () => {
     return (
        <div className="container__card">
            <Card
            title1 = "Semillas CBD"
            title2 = "Semillas CBD"
            description = "Nuestra gama de semillas de marihuana con CBD alto está disponible en nuestro catálogo." 
            
            />
            <Card
            title1 = "Banco de Semillas"
            title2 = "Banco de Semillas"
            description = "Uno de los factores más importantes del cultivo de marihuana es la genética que usemos."
        
            />
            <Card
            title1 = "Comunidad Sustentable"
            title2 = "BLOG"
            description = "comunidad ecológica y socialmente sana y resistente a través del manejo de sus recursos naturales."
            
            />
        </div>
     )
}

export default ContainerCards