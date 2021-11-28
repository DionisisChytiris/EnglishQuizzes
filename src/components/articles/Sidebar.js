import React from 'react'
import { NavLink } from 'react-router-dom'
// import { articles_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const articles_links = [
    {
        id: 0,
        url: '/quiz-9',
        text: 'Quiz 1',
        // level: '(A1-A2)'
      },
      {
        id: 1,
        url: '/quiz9',
        text: 'Quiz 2',
        // level: '(B1-B2)'
      },
      {
        id: 2,
        url: '/quiz10',
        text: 'Quiz 3'
      },
      {
        id: 3,
        url: '/quiz11',
        text: 'Quiz 4',
        // level: '(C1-C2)',
        // hola: "========="
      },
      {
        id: 4,
        url: '/quiz12',
        text: ' Test 1',
        // hola: '________'
      }
]
const sidebar_container = [
    {
        id: 1,
        url: '/articles',
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
        url: '/articles_grammar',
        text: <FaBookReader />
    },
]
const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Articles</h4>
            <div className="line1"></div>
            {articles_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <>
                    <h6>{level}</h6>
                    <NavLink activeClassName='is-active' to={url} key={id}>
                        <p >
                            {text} 
                        </p>
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