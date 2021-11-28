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
        id: 1,
        url: '/verbs_to_ing_1',
        text: 'Quiz 1'
    },
    {
        id: 2,
        url: '/verbs_to_ing_2',
        text: 'Quiz 2'
    },
    {
        id: 3,
        url: '/verbs_to_ing_3',
        text: 'Quiz 3'
    },   
    {
        id: 4,
        url: '/verbs_to_ing_4',
        text: 'Quiz 4'
    }   
]

const sidebar_container = [
    {
        id: 1,
        url: '/verbs_to_ing',
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
        url: '/verbs_to_ing_grammar',
        text: <FaBookReader />
    },
]


const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Gerund/Infinitive</h4>
            <div className="line1"></div>
            {verbs_to_ing_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <>
                        <h6>{level}</h6>
                        <NavLink activeClassName='is-active' to={url} key={id}>
                            <p>{text}</p>
                        </NavLink>
                        <h5>{hola}</h5>
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