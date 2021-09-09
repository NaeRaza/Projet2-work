import React from 'react'
import './menuButton.css'
import Sidebar from '../sidebar/Sidebar'
import * as FaIcon from "react-icons/fa"

function MenuButton({menuOpen, setMenuOpen}) {


    return (
        <>
            <Sidebar/> 
            <button className={menuOpen ? "menuButton open" : "menuButton"} onClick={()=>setMenuOpen(!menuOpen)}>
                <FaIcon.FaPlus className="menu-icon" />
            </button>
            
        </>
    )
}

export default MenuButton
