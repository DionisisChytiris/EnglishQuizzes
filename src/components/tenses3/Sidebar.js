import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { tenses3_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const tenses3_links = [
    {
        id: 1,
        url: '/tenses3quiz1',
        text: 'Quiz 1'
      },
      {
        id: 2,
        url: '/tenses3quiz2',
        text: 'Quiz 2'
      },
      {
        id: 3,
        url: '/tenses3quiz3',
        text: 'Listening'
      },
      {
        id: 4,
        url: '/tenses3quiz4',
        text: 'Open cloze'
      },
]
const sidebar_container = [
    {
        id: 1,
        url: '/tenses3',
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
        url: '/tenses3_grammar',
        text: <FaBookReader />
    },
]

const Sidebar = () => {
    return (
        <SidebarMain>
            <Link to='/tenses3'>
                <h4>Tenses 3</h4>
            </Link>
            {tenses3_links.map((a) => {
                const { id, url, text } = a
                return (
                    <NavLink activeClassName='is-active' to={url} key={id}>
                        <p>{text}</p>
                    </NavLink>
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
