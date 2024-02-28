import React from "react"
import useFetch from "use-http"
import { todasLasNoticias } from '../servicios/noticias'

const Noticias = ()  => {
    const laNoticia = todasLasNoticias()
   // const {loading, data, error} = useFetch("https://kushteenuy.fly.dev/blog", {},[])

    //if (error){
    //    console.error(error)
   // }
   // if (loading){
   //     return null
   // }
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