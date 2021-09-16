import React from 'react'
import "../Styles/Header.css"

function Header(props) {

    const { logo } = props

    return (
        <div class="header">
            <img class="logoHeader" src={logo}/>    
        </div>
    )
}

export default Header