import React from 'react'
import { NavLink } from 'react-router-dom'
import { verbs_to_ing_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import {FaBookReader} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar'>
            <h4>Verbs + to / + -ing</h4>
            {verbs_to_ing_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <p key={id}>
                        <h6>{level}</h6>
                        <NavLink activeClassName='is-active' to={url}>
                            {text} </NavLink>
                        <h5>{hola}</h5>
                    </p>
                )
            })}
            <NavLink activeClassName='is-active' to='/'>
                <p><GoHome/></p>
            </NavLink>
            <NavLink activeClassName='is-active' to='/verbs_to_ing_grammar'>
                <p className='book'><FaBookReader /></p>
            </NavLink>
        </div>
    )
}

export default Sidebar