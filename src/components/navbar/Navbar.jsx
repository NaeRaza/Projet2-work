import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcon from 'react-icons/ai'
import './navbar.css'
import Menu from '../menu/Menu'

function Navbar() {

    const [menu, setMenu] = useState(false)


    const openLangMenu = () => setMenu(!menu)



    return (
        <>
            <Menu/>
            <div className="navbar">
                <Link to="/" className="navbar-logo">
                    AJAX
                </Link>
                
                <div className="right">
                    <Link to="/config" className="nav-config">
                        Assemblez le kit
                    </Link>
                    <div className="switch-lang">
                        <div className={menu ? "lang-link active" : "lang-link"} onClick={openLangMenu}>
                            <span className="lang-menu">Fr  <AiIcon.AiFillCaretDown className="caret-down"/></span> 
                        <ul className="lang-list">
                            <li>Eng</li>
                            <li>Spa</li>
                            <li>Deu</li>
                            <li>Jap</li>
                        </ul>
                        </div>
                    </div>
                </div>
                 
            </div>  
        </>
    )
}

export default Navbar
