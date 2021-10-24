import React from 'react'
import { NavLink } from 'react-router-dom'
import { passive_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import {FaBookReader} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar1'>
            <h4>Passive Voice</h4>
            {passive_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <>
                    <h6>{level}</h6>
                    <p key={id}>
                    <NavLink activeClassName='is-active' to={url}>
                            {text} </NavLink>
                    </p>
                    <h5>{hola}</h5>
                    </>
                )
            })}
            <NavLink activeClassName='is-active' to='/'>
                <p><GoHome/></p>
            </NavLink>
            <NavLink activeClassName='is-active' to='/passive_grammar'>
                <p  className='book'><FaBookReader /></p>
            </NavLink>
        </div>
    )
}

export default Sidebar