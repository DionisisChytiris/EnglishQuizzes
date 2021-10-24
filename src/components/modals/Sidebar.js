import React from 'react'
import { NavLink } from 'react-router-dom'
import { modals_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import {FcReading} from 'react-icons/fc'
import {GiRead} from 'react-icons/gi'
import { FaBookReader } from 'react-icons/fa'
import './style.css'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar1'>
            {/* <h4>Modals <FcReading/></h4> */}
            {/* <h4>Modals <GiRead/></h4> */}
            <h4>Modals</h4>
            {modals_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <>
                    <h6>{level}</h6>
                    <NavLink activeClassName='is-active' to={url}>
                        <p key={id}>{text}</p>
                    </NavLink>
                    <h5>{hola}</h5>
                    </>
                )
            })}
            <NavLink activeClassName='is-active' to='/'>
                <p><GoHome/></p>
            </NavLink>
            <NavLink activeClassName='is-active' to='/modal_grammar'>
                <p className='book'><FaBookReader /></p>
            </NavLink>
        </div>
    )
}

export default Sidebar