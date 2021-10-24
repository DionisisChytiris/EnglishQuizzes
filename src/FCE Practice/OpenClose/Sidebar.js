import React from 'react'
import { NavLink } from 'react-router-dom'
import { openClose_links } from '../../data_links'
import { GoHome } from 'react-icons/go'
import {BsArrowReturnLeft} from 'react-icons/bs'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar'>
            <h4>Open Close</h4>
            {openClose_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <div key={id}>
                        <h6>{level}</h6>
                        <NavLink activeClassName='is-active' to={url}>
                            {text}
                        </NavLink>
                        <h5>{hola}</h5>
                    </div>
                )
            })}
            <div className="open-sidebar">
                <a href='/openClose'><BsArrowReturnLeft/></a>
                <a href='/fce_practice'>FCE Practice</a>
                <a href='/' ><GoHome /></a>
            </div>
        </div>
    )
}

export default Sidebar