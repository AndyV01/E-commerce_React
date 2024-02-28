import React from 'react'
import {Link} from "react-router-dom"
import useFetch from "use-http"
import './catalogo.css'
import spinner from "./assets/spinner.gif"

 export const product = [
    {
        id: 1,
        name:'Purple Match',
        route:"https://delightchile.cl/blog/wp-content/uploads/2023/07/Purple-Kush.jpg", 
        description:'Purple Kush, también conocida como Purple Hindu Kush, es una popular variedad índica pura famosa por su poderosa potencia.Si bien es un cruce entre las cepas Hindu Kush y Purple Afghani, que ya son conocidas por sus efectos, la variedad Purple Kush realmente se distingue de sus padres y otras razas índicas por su hermosa apariencia, sabor dulce y efectos fuertes.De hecho, fue nombrada por la revista High Times como una de las 10 cepas más poderosas del mundo.Como una índica fuerte, es popular entre los pacientes médicos y, sin embargo, es una de esas raras cepas índica que satisface a los consumidores recreativos y permite a los consumidores sentir una sensación de relajación casi instantáneamente al fumar junto con un subidón eufórico.Al igual que la clasificación de High Times, la Purple Kush es una variedad que debería estar en el top 10 de cannabis de todo el mundo.', 
        price:'1500', 
        link:'/producto/1',
    },
    {
        id: 2,
        name:'Sunrise Sherbert',
        route:"https://kindseed.com/media/catalog/product/B/u/Buy_Sunset_Sherbet_Strain_Seeds_Online_in_the_USA_b94e.jpg", 
        description:'Sunrise Sherbert ofrece un crecimiento vigoroso y robusto en las primeras fases del periodo vegetativo, con hojas anchas de naturaleza índica. Sus abundantes y firmes ramificaciones laterales crecen en todas direcciones, lo que provoca un crecimiento vertical más lento de lo habitual, y en la fase de floración el desarrollo de brotes es uniforme. Las plantas se estirarán una media de un 30% en la transición a la fase de floración. En las ramas secundarias la cantidad de cogollos púrpura, densos y compactos, es también grande, lo que hace innecesario dedicar mucho tiempo al manicurado al final de la floración. A nivel climático es muy versátil, por lo que es apta para climas húmedos y secos. Los cogollos son extremadamente resinosos, lo que les confiere un gran atractivo. Su perfil terpénico es muy complejo e intenso, y se manifiesta con matices a pimienta, a limoncillo y a frutos rojos, muy bien combinados con toques a limón dulce, a madera de pino y a lavanda. Su efecto provoca un potente subidón psicodélico a nivel mental, seguido de una fuerte estimulación corporal. Es muy agradable para su uso al final del día, y entraña una gran experiencia, para paladares expertos y principiantes, que redefine la esencia misma del sabor.', 
        price:'1670', 
        link:'/producto/2',
    },
    {
        id: 3,
        name:'Bubba Cheese',
        route:"https://es.seedfinder.eu/pics/01seeds/Emerald_Triangle/Emerald_Triangle_-_Bubba_Cheese_Auto.jpg", 
        description:'', 
        price:'1800', 
        link:'/producto/3',
    },
    {
        id: 4,
        name:'Lemon Juice Express',
        route:"https://www.alchimiaweb.com/images/xl/lemon-juice-express-auto_7559_1_20200325173821_.jpg", 
        description:'', 
        price:'1800', 
        link:'/producto/4',
    },
    {
        id: 5,
        name:'Lost Coast Skunk',
        route:"https://www.humboldtseeds.net/uploads/HS0103-lost-coast-skunk-auto.jpg", 
        description:'', 
        price:'1800', 
        link:'/producto/5',
    },
    {
        id: 6,
        name:'Blue Dream CBD',
        route:"https://www.cannaconnection.com/8837/blue-dream-cbd.jpg", 
        description:'', 
        price:'1800', 
        link:'/producto/6',
    },
    {
        id: 7,
        name:'Dedoverde Haze',
        route:"https://www.humboldtseeds.net/uploads/HS0081-dedoverde_660x990.jpg", 
        description:'', 
        price:'1800', 
        link:'/producto/7',
    },
    {
        id: 8,
        name:'Blue Fire',
        route:"https://herbiesheadshop.com/resized/origin/common/56/Blue-Fire-cannabis-seeds.jpg__T1cI16b8eexUh73y.jpg", 
        description:'', 
        price:'1850', 
        link:'/producto/8',
    },
    {
        id: 9,
        name:'Forbidden Dream',
        route:"https://lh3.googleusercontent.com/proxy/AHBc9GcqT9iSUKU8aKKUHZUliTMoFSJAdHfXJbsOljIUb3myJhU7_g7DoGb0wZmi_p8qH6Dt5lv037oQL__stkns6TEacJgCHNN40qT28WOtmuye87HZTlpR7C67OYLJJGxBevYxdHalzPys55fY5NWDDEjeRr0B8A", 
        description:'', 
        price:'1900', 
        link:'/producto/9',
    },
    {
        id: 10,
        name:'Fast Flowering OGKZ',
        route:"https://media.lamota.org/HS0181-OGKZ-FAST-1_600x690.jpg", 
        description:'', 
        price:'1800', 
        link:'/producto/10',
    }

]
const Catalogo = () => {
   const imgUrl = 'https://closed-stirring-ermine.glitch.me/'
    const { loading, data, error } = useFetch("https://closed-stirring-ermine.glitch.me/catalogo", {}, [])
     
        if (error){
            console.error(error)
        }
        if (loading) {
            return <div className="spinner">
                <img src={spinner} alt=""/>
            </div>
        }
    
     return (
    <div className="sectionC">
    <h1 className="neon"> SEMILLAS FEMINIZADAS </h1>
    <div className="product_container">
        
        {product.map(producto => { 
            return (
                    <div className="product">
                        <h3>{producto.name}</h3>
                        <img className="pdec" alt="producto" src={producto.route} />
                        <p style={{color: "white", marginBottom: 6}}>${producto.price}</p>
                        <Link className="buttonC" to= {`/producto/${producto.id}`}>VER MAS</Link>
                    </div>
            )}    
         ) }
    </div>
</div>
)}
export default Catalogo