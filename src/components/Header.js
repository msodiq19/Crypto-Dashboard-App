import React from 'react'
import avatar from '../sodiq.png'

function Header({name}) {
    return (
        <div className="header">
           <div className="container h-container">
                <h3>{name}</h3>
                <div className="h-right">
                    <div className="profile">
                        <img src={avatar} alt="avatar" id="avatar"/>
                        <p>harkanday</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Header
