import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarMain, SidebarContainerFixed } from '../../General Styles/Sidebar.styled'

const SidebarGlobal = (props) => {
    return (
        <SidebarMain>
            <h4>{props.title}</h4>
            <div className="line1"></div>
            {props.data1.map((a) => {
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
                {props.data2.map((a) => {
                    const { id, url, text } = a
                    return (
                        <>
                            <NavLink activeClassName='is-active' to={url} key={id}>
                                <div className='home-buttons' key={id}>{text}</div>
                            </NavLink>
                        </>
                    )
                })}
            </SidebarContainerFixed>
        </SidebarMain>
    )
}

export default SidebarGlobal
