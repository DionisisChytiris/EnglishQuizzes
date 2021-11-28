import React from 'react'
import { NavLink } from 'react-router-dom'
// import { tenses2_links } from '../../data_links'
import { GoHome } from 'react-icons/go'
import { BsArrowReturnLeft } from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const tenses2_links = [
    {
        id: 1,
        url: '/tenses2quiz1',
        text: 'Quiz 1',
        // level: 'Present Perfect / Present Perfect Continuous'
      },
      {
        id: 2,
        url: '/tenses2quiz2',
        text: 'Quiz 2',
        // level: 'Past Perfect / Past Perfect Continuous'
      },
      {
        id: 3,
        url: '/tenses2quiz3',
        text: 'Quiz 3',
        // level: 'Future Perfect / Future Perfect Continuous'
      },
      {
        id: 4,
        url: '/tenses2quiz4',
        text: 'Open cloze'
      },
]
const sidebar_container = [
    {
        id: 1,
        url: '/tenses2',
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
        url: '/tenses2_grammar',
        text: <FaBookReader />
    },
]


const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Tenses 2</h4>
            {tenses2_links.map((a) => {
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
