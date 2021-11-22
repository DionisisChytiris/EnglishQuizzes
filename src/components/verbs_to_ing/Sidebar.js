import React from 'react'
import { NavLink } from 'react-router-dom'
// import { verbs_to_ing_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'


const verbs_to_ing_links = [
    {
        // level: 'hello',
        url: '/verbs_to_ing_1',
        text: 'Quiz 1'
    },
    {
        url: '/verbs_to_ing_2',
        text: 'Quiz 2'
    },
    {
        url: '/verbs_to_ing_3',
        text: 'Quiz 3'
    }   
]

const sidebar_container = [
    {
        url: '/verbs_to_ing',
        text: <BsArrowReturnLeft/>
    },
    {
        url: '/quizzes',
        text: 'Quizzes'
    },
    {
        url: '/',
        text: <GoHome/>
    },
    {
        url: '/verbs_to_ing_grammar',
        text: <FaBookReader />
    },
]


const Sidebar = () => {
    return (
        <SidebarMain>
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
            <SidebarContainerFixed>
                <div className="line"></div>
                {sidebar_container.map((a) => {
                    const { url, text } = a
                    return (
                        <>
                            <NavLink activeClassName='is-active' to={url}>
                                <div className='home-buttons'>{text}</div>
                            </NavLink>
                        </>
                    )
                })}
            </SidebarContainerFixed>
            {/* <NavLink activeClassName='is-active' to='/'>
                <p><GoHome/></p>
            </NavLink>
            <NavLink activeClassName='is-active' to='/verbs_to_ing_grammar'>
                <p className='book'><FaBookReader /></p>
            </NavLink> */}
        </SidebarMain>
    )
}

export default Sidebar