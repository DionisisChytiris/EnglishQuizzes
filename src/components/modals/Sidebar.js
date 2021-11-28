import React from 'react'
import { NavLink } from 'react-router-dom'
// import { modals_links } from '../../data_links'
import { GoHome } from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'
// import './style.css'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const modals_links = [
    {
        id: 1,
        url: '/modal1',
        text: 'Quiz 1',
        // level: 'Modals 1'
      },
      {
        id: 2,
        url: '/modal2',
        text: 'Quiz 2',
        // level: 'Modals 2'
      },
      {
        id: 2,
        url: '/modal3',
        text: 'Quiz 3',
        // level: 'Modals 3',
        // hola: '======='
      },
    //   {
    //     id: 3,
    //     url: '/quiz8',
    //     text: 'Test',
    //     // level: 'Test',
    //     // hola: '__________'
    //   },
]
const sidebar_container = [
    {
        id: 1,
        url: '/modals',
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
        url: '/modals_grammar',
        text: <FaBookReader />
    },
]

const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Modals</h4>
            <div className="line1"></div>
            {modals_links.map((a) => {
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