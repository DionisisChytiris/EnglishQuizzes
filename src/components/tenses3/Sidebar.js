import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { tenses3_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import {FaBookReader} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar'>
            <Link to='/tenses3'>
                <h4>Tenses 3</h4>
            </Link>
            {tenses3_links.map((a) => {
                const { id, url, text } = a
                return (
                    <p key={id}>
                        <NavLink activeClassName='is-active' to={url}>{text}</NavLink>
                    </p>
                )
            })}
            <NavLink activeClassName='is-active' to='/'>
                <p><GoHome/></p>
            </NavLink>
            <NavLink activeClassName='is-active' to='/tenses3_grammar'>
                <p className='book'><FaBookReader /></p>
            </NavLink>
        </div>
    )
}

export default Sidebar
