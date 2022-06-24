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
                    {/* At */}
                    <div className='category'>We use <span>AT</span> for a precise time.</div>
                    <div className='short-example'>at 5  o'clock / at 8pm / at noon / at sunrise / at the moment / at Christmas / at present</div>
                    <div className='examples'>
                        <div style={{margin: '0px 10px 10px 15px'}}>Look at these examples: </div>
                        <ul>
                            <li>- I have a meeting at 9am.</li>
                            <li>- The shop closes at midnight.</li>
                            <li>- Jane went home at lunchtime.</li>
                            <li>- I stay with my family at Christmas.</li>
                        </ul>
                    </div>
                    {/* IN */}
                    <div className='category'>We use <span>IN</span> to talk about months, years, centuries, seasons and lengths of time.</div>
                    <div className='short-example'>in July / in 2022 / in the next century / in summer / in the morning / in the past</div>
                    <div className='examples'>
                        <div style={{margin: '0px 10px 10px 15px'}}>Look at these examples: </div>
                        <ul>
                            <li>- In England, it often snows in December.</li>
                           <li>- There should be a lot of progress in the next century.</li>
                           <li>- We need to have this report ready in 15 minutes.</li>
                           <li>- My grandmother was born in 1936.</li> 
                        </ul>
                    </div>
                    {/* ON */}
                    <div className='category'>We use <span>ON</span> for days and dates.</div>
                    <div className='short-example'>on Monday / on Tuesdays / on 6 March / on Christmas Day / on my birthday / on New Year's Eve</div>
                    <div className='examples'>
                        <div style={{margin: '0px 10px 10px 15px'}}>Look at these examples: </div>
                        <ul>
                            <li>- Do you work on Saturdays?</li>
                           <li>- We get paid on the 20th of every month.</li>
                           <li>- Where will you be on New Year's Eve?</li>
                           <li>- We get together on Christmas Day.</li> 
                        </ul>
                    </div>
                    
                    {/* Quizzes Button */}
                    <QuizzesButtonGrammar page='/prepositions' text='Prepositions Quizzes'/>
                    <h1>Prepositions of Place - at, in, on</h1>
                    {/* At */}
                    <div className='category'>We use <span>AT</span> for specific or precise places.</div>
                    <div className='short-example'>at the door / at the train station / at the end of the street / at the front / at school / at the airport </div>
                    <div className='examples'>
                        <div style={{margin: '0px 10px 10px 15px'}}>Look at these examples: </div>
                        <ul>
                            <li>- Sally was standing at the bus stop.</li>
                            <li>- Jane lives at the end of the street.</li>
                            <li>- Someone is at the door.</li>
                        </ul>
                    </div>
                    {/* IN */}
                    <div className='category'>We use <span>IN</span> for enclosed places or areas.</div>
                    <div className='short-example'>in a room / in the garden / in a car / in a bottle / in a book / in London / in England / in the Sky </div>
                    <div className='examples'>
                        <div style={{margin: '0px 10px 10px 15px'}}>Look at these examples: </div>
                        <ul>
                            <li>- He's swimming in the sea.</li>
                            <li>- There is a spider in the bath.</li>
                            <li>- My brother lives in London.</li>
                            <li>- I read the story in the newspaper.</li>
                        </ul>
                    </div>
                    {/* ON */}
                    <div className='category'>We use <span>ON</span> for surfaces and directions.</div>
                    <div className='short-example'>on the floor / on the ceiling / on the table / on the sofa / on the left / on the bus*</div>
                    <div className='examples'>
                        <div style={{margin: '0px 10px 10px 15px'}}>Look at these examples: </div>
                        <ul>
                            <li>- Frank is sitting on the chair.</li>
                            <li>- She hung a picture on the wall.</li>
                            <li>- There are four cushions on the sofa.</li>
                            <li>- James is on holiday for two weeks.</li>
                        </ul>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row',margin: '0px 10px 10px 25px'}}>
                        <div>* Note: </div>
                        <div className='note'>on TV / on the bus / on a train / on a plane / on holiday / at home / at work</div>
                    </div>
                    <div style={{margin: '0px 10px 10px 15px'}}>When we talk about public transport we use <span>ON</span>. </div>
                    {/* Quizzes Button */}
                    <QuizzesButtonGrammar page='/prepositions' text='Prepositions Quizzes'/>
               </PrepositionsContext>
            </PrepositionsMain>
        </PrepositionGrammar>
        </>
    )
}

export default PrepositionsGrammar
