import React, { useState } from 'react'
import './sidebar.css'

function Sidebar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className={menuOpen ? "sidebar" : "sidebar open"}>
            <div className="sidebar-container">
                <ul className="sidebar-menu">
                    <li>Produits</li>
                    <li>Logiciels</li>
                    <li>Assistance</li>
                    <li>Blog</li>
                    <li>Pour les partenaires</li>
                    <li>Où acheter</li>
                </ul>
                <div className="sidebar-footer">
                    <span>Contact</span>
                    <span>Mail</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
