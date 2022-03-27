import React from 'react'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    PrepositionGrammar,
    PrepositionSide,
    PrepositionsMain,
    PrepositionsContext
} from './grammar.styled'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import { QuizzesButtonGrammar } from '../../../General Pages/Show Quiz Buttons/QuizzesButton'
import '../style.css'

const PrepositionsGrammar = () => {
    return (
        <>
        <div className="fatline"></div>
        <PrepositionGrammar>
            <ShowSideBar/>
            <PrepositionSide>
                <SidebarGrammar/>
            </PrepositionSide>

            <PrepositionsMain>
               <PrepositionsContext>
                    <div className='title'>Prepositions</div>
                    <h1>Prepositions of Time - at, in, on</h1>
                    <p>We use AT for a precise time.</p>
                    <div className='short-example'>at 5  o'clock / at 8pm / at noon / at sunrise / at the moment / at Christmas / at present</div>
                    <div className='examples'>
                        <div style={{marginBottom: '10px'}}>Look at these examples: </div>
                        <ul>
                            <li>I have a meeting <span>at</span> 9am.</li>
                            <li>The shop closes <span>at</span> midnight.</li>
                            <li>Jane went home <span>at</span> lunchtime.</li>
                            <li>I stay with my family <span>at</span> Christmas.</li>
                        </ul>
                    </div>
                    
                    {/* Quizzes Button */}
                    <QuizzesButtonGrammar page='/prepositions' text='Prepositions Quizzes'/>
               </PrepositionsContext>
            </PrepositionsMain>
        </PrepositionGrammar>
        </>
    )
}

export default PrepositionsGrammar
