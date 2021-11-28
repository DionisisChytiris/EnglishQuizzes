import React from 'react'
import { NavLink } from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const conditionals_links = [
    {
        // level: 'hello',
        id: 1,
        url: '/conditionals_1',
        text: 'Quiz 1'
    },
    {
        id:2,
        url: '/conditionals_2',
        text: 'Quiz 2'
    },
    {
        id:3,
        url: '/conditionals_3',
        text: 'Quiz 3'
    }   
]

const sidebar_container = [
    {
        id: 1,
        url: '/conditionals',
        text: <BsArrowReturnLeft/>
    },
    {
        id: 2,
        url: '/quizzes',
        text: 'Quizzes'
    },
    {
        id: 3,
        url: '/',
        text: <GoHome/>
    },
    {
        id: 4,
        url: '/conditionals_grammar',
        text: <FaBookReader />
    },
]

const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Conditionals</h4>
            <div className="line1"></div>
            {conditionals_links.map((a) => {
                const { id, url, text, level } = a
                return (
                    <>
                        {/* <h6>{level}</h6> */}
                        <NavLink activeClassName='is-active' to={url} key={id}>
                            <p>{text}</p>
                        </NavLink>
                    </>
                )
            })}
            <SidebarContainerFixed>
                <div className="line"></div>
                {sidebar_container.map((a) => {
                    const { id, url, text } = a
                    return (
                        <>
                            <NavLink activeClassName='is-active' to={url} key={id}>
                                <div className='home-buttons'>{text}</div>
                            </NavLink>
                        </>
                    )
                })}
            </SidebarContainerFixed>
        </SidebarMain>
    )
}

export default Sidebar