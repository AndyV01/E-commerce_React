import React from "react"
import { todasLasNoticias } from './servicios/noticias'



const Noticias = ()  => {
    const laNoticia = todasLasNoticias()

    return (
        <aside>
        {laNoticia.map(noticia => { 
            return (
            <div className="newLink">
                <a href={noticia.link_n}>{noticia.name_n}</a>
            </div>
            )
           })} 
    </aside>
    )
}
export default Noticias