import React, { useState} from 'react'
import Sidebar from '../sidebar/Sidebar'
import SidebarBurger from '../sidebarBurger/SidebarBurger'
import MenuButton from '../menuButton/MenuButton'

function Menu() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="menu">
            <SidebarBurger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    )
}

export default Menu
