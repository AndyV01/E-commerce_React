import React from 'react'
import './button.css'
const Button = ( {description, onClick} ) => {
    return (
       <button
       onClick={onClick} 
       >{description}</button>
    )
}

export default Button