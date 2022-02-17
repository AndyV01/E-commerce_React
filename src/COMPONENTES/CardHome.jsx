import React from 'react'
import { useHistory } from 'react-router'
 
const Card = ({title1, title2, description,}) => {
    const history = useHistory()
    const handleBlog = () => {
        history.push("/blog")
    }
    return (
  <div className="card__father"> 
     <div className="card">
        <div className="card__front1">
            <div className="bg"></div>
            <div className="body__card_front">
                <h1>{title1}</h1>
            </div>
        </div>
        <div className="card__back">
            <div className="body__card_back">
                <h2>{title2}</h2>
                <p className="p">{description}</p>
                <button onClick={handleBlog}>VER MAS</button>
            </div>
        </div>
     </div> 
  </div> )
   }

export default Card 