import React from 'react'
import './menu.css'


function Menu ({name}){
    return (
        <div className='menu'>
            <p><a href='#'>{name} </a> </p>
        </div>
    )
}
export default Menu