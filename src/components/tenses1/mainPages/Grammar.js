import React from 'react'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    Tenses1Grammar,
    Tenses1Side,
    Tenses1Main,
    Tenses1Box1
} from './grammar.styled'
import {QuizzesButtonGrammar} from '../../../General Pages/QuizzesButton'

const Tenses1_Grammar = () => {
    return (
        <>
        <div className="fatline"></div>
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
                {/* Go to Quizzes */}
                <QuizzesButtonGrammar page='/tenses1' text='Tenses 1 Quizzes'/>
            </Tenses1Main>
            </Tenses1Grammar>
        </>
    )
}

export default Tenses1_Grammar
