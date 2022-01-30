import React from 'react'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    Tenses2Grammar,
    Tenses2Side,
    Tenses2Main,
    Tenses2Box1
} from './grammar.styled'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import { QuizzesButtonGrammar } from '../../../General Pages/QuizzesButton'

const Tenses2_Grammar = () => {
    return (
        <>
        <div className="fatline"></div>
        <Tenses2Grammar>
            <ShowSideBar/>
            <Tenses2Side>
                <SidebarGrammar/>
            </Tenses2Side>
            <Tenses2Main>
                <Tenses2Box1>
                    <div className='title'>Tenses 2</div>
                    <h1>Zero Conditional</h1>
                    <h1>First Conditional</h1>
                </Tenses2Box1>
                {/* Go to Quizzes */}
                <QuizzesButtonGrammar page='/tenses1' text='Tenses 2 Quizzes'/>
            </Tenses2Main>
            </Tenses2Grammar>
        </>
    )
}

export default Tenses2_Grammar
