import React from 'react'
import { NavLink } from 'react-router-dom'
import { prepositions_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { SidebarMain } from '../../General Styles/Sidebar.styled'


const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Prepositions</h4>
            {prepositions_links.map((a) => {
                const { id, url, text, level, hola} = a
                return (
                    <>
                        <h6>{level}</h6>
                        <p key={id}>
                        <NavLink activeClassName='is-active' to={url}>{text}</NavLink>
                        </p>
                        <h5>{hola}</h5>
                    </>
                )
            })}
            <NavLink activeClassName='is-active' to='/'>
                <p><GoHome/></p>
            </NavLink>
            <NavLink activeClassName='is-active' to='/prepositions_grammar'>
                <p className='book'><FaBookReader /></p>
            </NavLink>
        </SidebarMain>
    )
}

export default Sidebar
