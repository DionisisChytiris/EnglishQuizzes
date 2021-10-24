import React from 'react'
import { NavLink } from 'react-router-dom'
import { wordFormation_links } from '../../data_links'
import { GoHome } from 'react-icons/go'
import {BsArrowReturnLeft} from 'react-icons/bs'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar'>
            <h4>Word Formation</h4>
            {wordFormation_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <p key={id}>
                        <h6>{level}</h6>
                        <NavLink activeClassName='is-active' to={url}>
                            {text}
                        </NavLink>
                        <h5>{hola}</h5>
                    </p>
                )
            })}
            <div className="open-sidebar">
                <a href='/wordFormation'><BsArrowReturnLeft/></a>
                <a href='/fce_practice'>FCE Practice</a>
                <a href='/' ><GoHome /></a>
            </div>
        </div>
    )
}

export default Sidebar