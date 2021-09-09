import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import { menuSidebar } from '../../dataSidebar'
import * as FaIcon from 'react-icons/fa'
import * as GrIcon from 'react-icons/gr'

function Sidebar({menuOpen, setMenuOpen}) {

    return (
        <div className={menuOpen ? "sidebar open": "sidebar"}>
            <div className="sidebar-container">
                <ul className="sidebar-menu">
                    {menuSidebar.map((liste) => 
                        <li key={liste.id} onClick={()=>setMenuOpen(!menuOpen)}>
                            <Link to={liste.path}>
                                {liste.title}
                            </Link>
                            <img src={liste.Img} alt=""/>
                        </li>
                    )}  
                </ul>
                <ul className="sidebar-footer">
                    <li><FaIcon.FaTwitter className="icons"/></li>
                    <li><FaIcon.FaFacebook className="icons"/></li>
                    <li><FaIcon.FaYoutube className="icons"/></li>
                    <li><GrIcon.GrMail className="icons"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
