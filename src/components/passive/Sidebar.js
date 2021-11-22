import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { BsArrowReturnLeft } from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'
import { SidebarContainerFixed, SidebarMain } from '../../General Styles/Sidebar.styled'

const passive_links = [
    {
      id: 1,
      url: '/passive_1',
      text: 'Quiz 1'
    },
    {
      id: 2,
      url: '/passive_2',
      text: 'Quiz 2'
    },
    {
      id: 3,
      url: '/passive_3',
      text: 'Quiz 3'
    }
  ]

const sidebar_container = [
    {
        url: '/passive',
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
        url: '/passive_grammar',
        text: <FaBookReader />
    },
]

const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Passive Voice</h4>
            <div className="line1"></div>
            {passive_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <>
                    <h6>{level}</h6>
                    <p key={id}>
                    <NavLink activeClassName='is-active' to={url}>
                            {text} </NavLink>
                    </p>
                    <h5>{hola}</h5>
                    </>
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
        </SidebarMain>
    )
}

export default Sidebar