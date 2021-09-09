import React from 'react'
import './sidebarBurger.css'

function SidebarBurger({menuOpen, setMenuOpen}) {
    return (
        <div className={menuOpen ? "sidebarBurger open" : "sidebarBurger"}>
            <button className='menu-button' onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1" />
            </button>
        </div>
    )
}

export default SidebarBurger
