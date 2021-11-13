import React from 'react'
import logo1 from '../assets/img1.jpg'
import logo2 from '../assets/img2.png'
import logo3 from '../assets/img3.png'
import logo4 from '../assets/img4.png'
import logo5 from '../assets/img5.png'
import logo6 from '../assets/img6.png'
import logo7 from '../assets/img7.png'
import logo8 from '../assets/img8.png'
import logo9 from '../assets/img9.png'

const Carrousel = () => {
    return (
        <article>
        <h1 class="neon">__________________________________________ N O V E D A D E S
        __________________________________________ </h1>
        <div className="carrousel-3d">
             <div className="container-carrousel">
                <figure><img src={logo1} alt=""/></figure>
                <figure><img src={logo2} alt=""/></figure>
                <figure><img src={logo3} alt=""/></figure>
                <figure><img src={logo4} alt=""/></figure>
                <figure><img src={logo5} alt=""/></figure>
                <figure><img src={logo6} alt=""/></figure>
                <figure><img src={logo7} alt=""/></figure>
                <figure><img src={logo8} alt=""/></figure>
                <figure><img src={logo9} alt=""/></figure>
            </div>
        </div>
    </article>
    )}
    export default Carrousel