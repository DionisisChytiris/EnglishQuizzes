import React, {useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { links } from './data_links'
import logo from './logo.svg'
import './navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setNavbar(true)
        } 
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = ()=> setClick(false)
    return (
        <div className={navbar ? 'nav active' : 'nav '}>
            <div className='navbar'>
                <div className="nav-container container">
                    <img src={logo} alt="logo"/>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {links.map((link) => {
                        const { id, url, text } = link
                        return (
                            <li className='nav-item' key={id}>
                                <Link to={url} className='nav-links' onClick={closeMobileMenu}>{text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
