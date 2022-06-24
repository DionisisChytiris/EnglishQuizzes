import React from 'react'
import { FaHandPointLeft } from 'react-icons/fa'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    PrepositionGrammar,
    PrepositionSide,
    PrepositionsMain,
    PrepositionsBox1,
    PrepositionContainerNew
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
                <PrepositionsBox1>
                    <PrepositionContainerNew>
                        <div className='prepositions_container'>
                        <div className='prepositions_homePage1'>
                        <h1>Prepositions of Time - at, in, on</h1>
                        <div className="prepositions_At_container_inner">
                            <div className="prepositions_At_front">
                                <div className="prepositions_At_A">
                                    We use <span>AT</span> for a <span>PRECISE TIME</span>.
                                </div>
                                <div className="prepositions_At_B">
                                    <div>
                                        <p>at 5 o'clock</p>
                                        <p>at 8pm</p>
                                        <p>at noon</p>
                                    </div>
                                    <div>
                                        <p>at sunrise</p>
                                        <p>at dinnertime</p>
                                        <p>at bedtime</p>
                                        <p>at the moment</p>
                                    </div>
                                    <div>
                                        <p>at Christmas</p>
                                        <p>at present</p>
                                        <p>at the same time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="prepositions_At_back">
                                <div>Look at these examples: </div>
                                <ul>
                                    <li>I have a meeting <span>at</span> 9am.</li>
                                    <li>The shop closes <span>at</span> midnight.</li>
                                    <li>Jane went home <span>at</span> lunchtime.</li>
                                    <li>I stay with my family <span>at</span> Christmas.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='prepositions-hand1'><FaHandPointLeft/></div>
                        <div className="prepositions_At_container_inner">
                            <div className="prepositions_At_front">
                                <div className="prepositions_In_A">
                                    We use <span>IN</span> for <span>MONTHS, YEARS, CENTURIES, SEASONS AND LENGTHS of TIME</span>.
                                </div>
                                <div className="prepositions_At_B">
                                    <div>
                                        <p>in July</p>                               
                                        <p>in summer</p>                               
                                    </div>
                                    <div>
                                        <p>in 1990</p>                               
                                        <p>in the 1990s</p>                              
                                        <p>in the next century</p>                                                        
                                    </div>
                                    <div>
                                        <p>in the morning</p>
                                        <p>in the past</p>
                                    </div>
                                </div>
                            </div>
                            <div className="prepositions_At_back">
                                <div>Look at these examples: </div>
                                <ul>
                                    <li>In England, it often snows <span>in</span> December.</li>
                                    <li>There should be a lot of progress <span>in</span> the next century.</li>
                                    <li>We need to have this report ready <span>in</span> 15 minutes.</li>
                                    <li>My grandmother was born <span>in</span> 1927.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='prepositions-hand1'><FaHandPointLeft/></div>
                        <div className="prepositions_At_container_inner">
                            <div className="prepositions_At_front">
                                <div className="prepositions_At_A">
                                    We use <span>ON</span> for <span>DAYS and DATES</span>.
                                </div>
                                <div className="prepositions_At_B">
                                    <div>
                                        <p>on Monday</p>
                                        <p>on Tuesdays</p>
                                        <p>on 6 March</p>
                                    </div>
                                    <div>
                                        <p>on Christmas Day</p>
                                        <p>on Independence Day</p>
                                    </div>
                                    <div>
                                        <p>on my birthday</p>
                                        <p>on New Year's Eve</p>
                                        <p>on Friday the 27th</p>
                                    </div>
                                </div>
                            </div>
                            <div className="prepositions_At_back">
                                <div>Look at these examples: </div>
                                <ul>
                                    <li>Do you work <span>on</span> Saturdays?</li>
                                    <li>We get paid <span>on</span> the 20th of every month.</li>
                                    <li>Where will you be <span>on</span> New Year's Day?</li>
                                    <li>We get together <span>on</span> Christmas Day.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='prepositions-hand1'><FaHandPointLeft/></div>
                    </div>              
                        </div>
                        
                        <div className='prepositions_container'>
                            <div className='prepositions_homePage2'>
                                <h1>Prepositions of Place - at, in, on</h1>
                                <div className="prepositions_At_container_inner">
                                    <div className="prepositions_At_front">
                                        <div className="prepositions_At_A">
                                            We use <span>AT</span> for <span>SPECIFIC or PRECISE PLACES</span>.
                                        </div>
                                        <div className="prepositions_At_B">
                                            <div>
                                                <p>at the door</p>
                                                <p>at the train station</p>
                                                <p>at the end of the street</p>
                                            </div>
                                            <div>
                                                <p>at the front</p>
                                                <p>at school</p>
                                                <p>at university</p>
                                            </div>
                                            <div>
                                                <p>at the airport</p>
                                                <p>at the table</p>
                                                <p>at the traffic lights</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prepositions_At_back">
                                        <div>Look at these examples: </div>
                                        <ul>
                                            <li>Sally was standing <span>at</span> the bus stop.</li>
                                            <li>I stayed <span>at</span> home all weekend.</li>
                                            <li>Jane lives <span>at</span> the end of the street.</li>
                                            <li>Someone is <span>at</span> the door.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='prepositions-hand1'><FaHandPointLeft/></div>
                                <div className="prepositions_At_container_inner">
                                    <div className="prepositions_At_front">
                                        <div className="prepositions_At_A">
                                            We use <span>IN</span> for <span>ENCLOSED PLACES or AREAS</span>.
                                        </div>
                                        <div className="prepositions_At_B">
                                            <div>
                                                <p>in a room</p>                               
                                                <p>in the garden</p>                               
                                                <p>in a car</p>                               
                                            </div>
                                            <div>
                                                <p>in a drawer</p>                               
                                                <p>in a bottle</p>                              
                                                <p>in a book</p>                                                        
                                            </div>
                                            <div>
                                                <p>in London</p>
                                                <p>in England</p>
                                                <p>in the sky</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prepositions_At_back">
                                        <div>Look at these examples: </div>
                                        <ul>
                                            <li>He's swimming <span>in</span> the sea.</li>
                                            <li>There is a spider <span>in</span> the bath.</li>
                                            <li>My brother lives <span>in</span> London.</li>
                                            <li>I read the story <span>in</span> the newspaper.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='prepositions-hand1'><FaHandPointLeft/></div>
                                <div className="prepositions_At_container_inner">
                                    <div className="prepositions_At_front">
                                        <div className="prepositions_At_A">
                                            We use <span>ON</span> for <span>SURFACES</span> and  <span>DIRECTIONS</span>.
                                        </div>
                                        <div className="prepositions_At_B">
                                            <div>
                                                <p>on the floor</p>
                                                <p>on the ceiling</p>
                                                <p>on the table</p>
                                            </div>
                                            <div>
                                                <p>on the sofa</p>
                                                <p>on a bottle</p>
                                                <p>on my face</p>
                                            </div>
                                            <div>
                                                <p>on the left</p>
                                                <p>on the right</p>
                                                <p>on the bus*</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prepositions_At_back">
                                        <div>Look at these examples: </div>
                                        <ul>
                                            <li>Frank is sitting <span>on</span> the chair.</li>
                                            <li>She hung a picture <span>on</span> the wall.</li>
                                            <li>There are four cushions <span>on</span> the sofa.</li>
                                            <li>James is <span>on</span> holiday for two weeks.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='prepositions-hand1'><FaHandPointLeft/></div>
                                <div className='prepositions-note'>
                                    <div>* Note:</div>
                                    <ul>
                                        <li>on TV</li>
                                        <li>on the bus (not in the bus)</li>
                                        <li>on a train</li>
                                        <li>on a plane</li>
                                        <li>on holiday</li>
                                        <li>at home</li>
                                        <li>at work</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </PrepositionContainerNew>
                </PrepositionsBox1>
                {/* <PrepositionsBox2>
                    <PrepositionsContainer>
                       World
                    </PrepositionsContainer>
                </PrepositionsBox2> */}
                {/* <PrepositionsBox3>
                    <PrepositionsContainer>
                        !!!
                    </PrepositionsContainer>
                </PrepositionsBox3> */}

                {/* Quizzes Button */}
                <QuizzesButtonGrammar page='/prepositions' text='Prepositions Quizzes'/>
            </PrepositionsMain>
        </PrepositionGrammar>
        </>
    )
}

export default PrepositionsGrammar
