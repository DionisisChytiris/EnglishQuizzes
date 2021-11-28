import React from 'react'
// import '../style.css'
import {IoArrowRedo} from 'react-icons/io5'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    Tenses1Grammar,
    Tenses1Side,
    Tenses1Main,
    Tenses1Box1
} from './grammar.styled'

const Tenses1_Grammar = () => {
    return (
        <Tenses1Grammar>
            <ShowSideBar/>
            <Tenses1Side>
                <SidebarGrammar/>
            </Tenses1Side>
            <Tenses1Main>
                <Tenses1Box1>
                    <div className='title'>Tenses 1</div>
                    <h1>Zero Conditional</h1>
                    <h1>First Conditional</h1>
                </Tenses1Box1>
            </Tenses1Main>
        </Tenses1Grammar>
    )
}

export default Tenses1_Grammar
