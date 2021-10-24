import React from 'react'
import { NavLink } from 'react-router-dom'
import { articles_links } from '../../data_links'
import {GoHome} from 'react-icons/go'

const Sidebar = () => {
    return (
        <div className='fce_sidebar'>
            <h4>Articles</h4>
            {/* {articles_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <p key={id}>
                        <h6>{level}</h6>
                        <NavLink activeClassName='is-active' to={url}>
                            {text} </NavLink>
                        <h5>{hola}</h5>
                    </p>
                )
            })} */}
            <a href='/'><GoHome/></a>
        </div>
    )
}

export default Sidebar