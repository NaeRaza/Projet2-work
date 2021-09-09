import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import './navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const [menu, setMenu] = useState(false)

    const handleClick = () => setClick(!click)
    const openLangMenu = () => setMenu(!menu)

    const closeMobileMenu = () => setClick(false) 

    return (
        <>
            <div className="navbar">
                <Link to="/" className="navbar-logo">
                    AJAX
                </Link>
                <ul className={click ? 'nav-menu .active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Produits
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/software" className="nav-links" onClick={closeMobileMenu}>
                            Logiciels
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/help" className="nav-links" onClick={closeMobileMenu}>
                            Assisstance
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pro" className="nav-links" onClick={closeMobileMenu}>
                            Pour les partenaires
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/where-to-buy" className="nav-links" onClick={closeMobileMenu}>
                            Où acheter
                        </Link>
                    </li>
                </ul>
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
