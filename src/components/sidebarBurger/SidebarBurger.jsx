import React, { useState } from 'react'
import './sidebarBurger.css'
import Sidebar from '../sidebar/Sidebar'

function SidebarBurger() {

    const [open, setOpen] = useState(false)

    return (
        <>
        <div className={open ? "sidebarBurger open" : "sidebarBurger"}>
            <button className='menu-button' onClick={()=>{setOpen(!open)}}>
                <span className="line1" />
            </button>
        </div>
        {open && <Sidebar />}
        </>
    )
}

export default SidebarBurger
