import React from "react"
import useFetch from "use-http"


const Noticias = ()  => {
    
    const {loading, data, error} = useFetch("http://localhost:4000/blog", {},[])

    if (error){
        console.error(error)
    }
    if (loading){
        return null
    }
    return (
        <aside>
        {data.new.map(noticia => { 
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