import React from 'react'
import { NavLink } from 'react-router-dom'
// import { prepositions_links } from '../../data_links'
import {GoHome} from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const prepositions_links = [
    {
        id: 1,
        url: '/quiz1',
        text: 'Quiz 1(place)',
        // level: '(A1-A2)'
      },
      {
        id: 2,
        url: '/quiz2',
        text: 'Quiz 2 (time)'
      },
      {
        id: 3,
        url: '/quiz3',
        text: 'Quiz 3(place)',
        // level: '(B1-B2)'
      },
      {
        id: 4,
        url: '/quiz4',
        text: 'Quiz 4 (time)',
      },
      {
        id: 5,
        url: '/quiz4_1',
        text: 'Quiz 5',
        // level: '(C1-C2)'
      },
      {
        id: 6,
        url: '/quiz4_2',
        text: 'Quiz 6',
        // hola: '==========='
      },
      {
        id: 7,
        url: '/test1prepositions',
        text: 'Test 1',
        // hola: '__________'
      }
]
const sidebar_container = [
    {
        id: 1,
        url: '/prepositions',
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
        url: '/prepositions_grammar',
        text: <FaBookReader />
    },
]

const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Prepositions</h4>
            <div className="line1"></div>
            {prepositions_links.map((a) => {
                const { id, url, text, level, hola} = a
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
