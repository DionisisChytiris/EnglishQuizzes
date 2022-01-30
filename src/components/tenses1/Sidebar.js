import React from 'react'
import { NavLink } from 'react-router-dom'
// import { tenses1_links } from '../../data_links'
import { GoHome } from 'react-icons/go'
import { FaBookReader } from 'react-icons/fa'
import { BsArrowReturnLeft } from 'react-icons/bs'
import Button1  from '../../General Pages/popUpIrregularVerbs/Button'
import { SidebarMain,SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const tenses1_links = [
    {
        id: 1,
        url: '/tenses1quiz1',
        text: 'Quiz 1',
        // level: 'Present Simple/ Present Continuous'
      },
      {
        id: 2,
        url: '/tenses1quiz2',
        text: 'Quiz 2',
        // level: 'Past Simple/ Past Continuous'
      },
      {
        id: 3,
        url: '/tenses1quiz3',
        text: 'Quiz 3',
        // level: 'Future Simple/ Future Continuous'
      },
      {
        id: 4,
        url: '/tenses1quiz4',
        text: 'Open cloze',
        // hola: '----------------'
      }
]

const sidebar_container = [
    {
        id: 1,
        url: '/tenses1',
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
        url: '/generalTensesPage',
        text: <FaBookReader />
    }
]

const Sidebar = () => {
    return (
        <SidebarMain>
            <h4>Tenses 1</h4>
            <div className="line1"></div>
            {tenses1_links.map((a) => {
                const { id, url, text, level, hola } = a
                return (
                    <>
                    <h6 className='prep-center'>{level}</h6>
                    <NavLink activeClassName='is-active' to={url} key={id}>     <p>{text}</p>
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
            <p>
                <a href='/irregularVerbs'>Irregular Verbs</a>
            </p>
            <p>
                <a href='/stativeVerbs'>Stative Verbs</a>
            </p>
            <div><Button1 /></div>
        </SidebarMain>
    )
}

export default Sidebar
