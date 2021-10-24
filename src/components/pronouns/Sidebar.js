import React from 'react'
import { NavLink } from 'react-router-dom'
import { pronouns_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import {FaBookReader} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar'>
            <h4>Pronouns</h4>
            {pronouns_links.map((a) => {
                const { id, url, text, level, hola} = a
                return (
                    <p className='pronouns' key={id}>
                         <h6 className='prep-center'>{level}</h6>
                        <NavLink activeClassName='is-active' to={url}>{text}</NavLink>
                        <h5>{hola}</h5>
                    </p>
                )
            })}
           <NavLink activeClassName='is-active' to='/'>
                <p><GoHome/></p>
            </NavLink>
            <NavLink activeClassName='is-active' to='/pronouns_grammar'>
                <p className='book'><FaBookReader /></p>
            </NavLink>
        </div>
    )
}

export default Sidebar
