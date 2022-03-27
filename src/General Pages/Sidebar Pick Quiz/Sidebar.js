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
                    <div key={id}>
                        <h6>{level}</h6>
                        <NavLink className={(navigationData) => navigationData.isActive ? 'is-active' : null } to={url} >
                            <p>{text}</p>
                        </NavLink> 
                        <h5>{hola}</h5>
                    </div>
                )
            })}
            <SidebarContainerFixed>
                <div className="line"></div>
                {props.data2.map((a) => {
                    const { id, url, text } = a
                    return (
                        <div key={id}>
                            <NavLink className={(navigationData) => navigationData.isActive ? 'is-active' : null } to={url} key={id}>
                                <div className='home-buttons' >{text}</div>
                            </NavLink>
                        </div>
                    )
                })}
            </SidebarContainerFixed>
        </SidebarMain>
    )
}

export default SidebarGlobal
