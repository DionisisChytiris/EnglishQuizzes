import React from 'react'
import { NavLink } from 'react-router-dom'
// import { pronouns_links } from '../../data_links'
import { GoHome } from 'react-icons/go'
import { BsArrowReturnLeft } from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const pronouns_links = [
    {
        id: 1,
        url: '/quiz5',
        text: 'Quiz 1',
        // level: 'Personal Pronouns'
      },
      {
        id: 2,
        url: '/quiz6',
        text: 'Quiz 2',
        // level: 'Demonstrative Pronouns'
      },
      {
        id: 2,
        url: '/quiz7',
        text: 'Quiz 3',
        // level: 'Relative Pronouns',
        // hola: '======='
      },
      {
        id: 3,
        url: '/quiz8',
        text: 'Test',
        // level: 'Test',
        // hola: '__________'
      }
]
const sidebar_container = [
    {
        id: 1,
        url: '/pronouns',
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
        url: '/pronouns_grammar',
        text: <FaBookReader />
    },
]

const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Pronouns</h4>
            <div className="line1"></div>
            {pronouns_links.map((a) => {
                const { id, url, text, level, hola} = a
                return (
                    <>
                        <h6 className='prep-center'>{level}</h6>
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
