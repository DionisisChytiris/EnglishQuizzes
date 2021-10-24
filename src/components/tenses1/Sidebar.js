import React from 'react'
import { NavLink } from 'react-router-dom'
import { tenses1_links } from '../../data_links'
import { GoHome } from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import Button1  from '../../General Pages/popUpIrregularVerbs/Button'

const Sidebar = () => {
    return (
        <div className='quiz_sidebar1'>
            <h4>Tenses 1</h4>
            {tenses1_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <>
                    <h6 className='prep-center'>{level}</h6>
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
            <NavLink activeClassName='is-active' to='/tenses1_grammar'>
                <p className='book'><FaBookReader /></p>
            </NavLink>
            <p>
                <a href='/irregularVerbs'>Irregular Verbs</a>
            </p>
            <p>
                <a href='/stativeVerbs'>Stative Verbs</a>
            </p>
            <div><Button1 /></div>
        </div>
    )
}

export default Sidebar
