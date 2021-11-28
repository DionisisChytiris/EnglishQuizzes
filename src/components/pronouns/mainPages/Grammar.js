import React from 'react'
// import '../style.css'
import { IoArrowRedo } from 'react-icons/io5'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    PronounsGrammar,
    PronounsSide,
    PronounsMain,
    Pronouns1
} from './grammar.styled'

const Pronouns_Grammar = () => {
    return (
        <PronounsGrammar>
            <ShowSideBar/>
            <PronounsSide>
                <SidebarGrammar/>
            </PronounsSide>
            <PronounsMain>
                <Pronouns1>
                <div className='title'>Pronouns</div>
                    <h1>Zero Conditional</h1>
                    <h1>First Conditional</h1>
                </Pronouns1>
            </PronounsMain>
        </PronounsGrammar>
    )
}

export default Pronouns_Grammar
