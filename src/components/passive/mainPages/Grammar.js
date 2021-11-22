import React from 'react'
import { Link } from 'react-router-dom'
// import '../style.css'
import {IoArrowRedo} from 'react-icons/io5'
import {
    PassiveGrammar,
    PassiveSide,
    PassiveMain,
    PassiveContainer1,
    PassiveContainer2,
    PassiveColumnContainer,
    PassiveColumn1,
    PassiveColumn2,
    PassiveColumn3,
} from './grammar.styled'
import { grammardata1 } from '../data/grammardata1'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'

const Passive_Grammar = () => {
    return (
        <PassiveGrammar>
            <PassiveSide>
                <SidebarGrammar/>
            </PassiveSide>
            <PassiveMain>
                <PassiveContainer1>
                    <h1><span>Passive Voice</span></h1>
                    <h3><span>(vs Active Voice)</span></h3>
                    {/* <div className='line'></div> */}
                    <div className='voice'>In English we have two grammatical voices: <color>active</color> and <color>passive</color>. </div>
                    <div className='voice1'>Which one we choose depends the way we want to express the relationship of the subject to the action.</div>
                    <div className='box'>
                        <div className='box1'>
                            <div className='a'><span>active voice</span>: the subject does the action</div>
                            <div className='example'><span>Shakespeare</span> <color>wrote</color> Hamlet.</div>
                        </div>
                        <div className='box2'>
                            <div className='a'><span>passive voice</span>: the subject receives the action</div>
                            <div className='example'>Hamlet <color>was written</color> by <span>Shakespeare</span>.</div>
                        </div>
                    </div>
                    
                    <div className='voice2'><span>Active Voice</span> </div>
                    <li> the subject does the action</li>
                    <li> the subject does the action</li>
                    <li> the subject does the action</li>
                    <div className='voice2'><span>Passive Voice</span> </div>
                    <li> the subject does the action</li>
                    <li> the subject does the action</li>
                    <li> the subject does the action</li>                         
                    <Link className='passive-button' to='/passive'>Passive Voice Quizzes</Link>
                </PassiveContainer1>
                <PassiveContainer2>
                    <PassiveColumnContainer>
                        <PassiveColumn1>
                            <p>Tense</p>
                            {grammardata1.map((grammar) => {
                                const { tense,tense1 } = grammar
                                return (
                                    <>
                                        <div className='passive-active-box'>
                                            <h1>{tense}</h1>
                                            <h2>{tense1}</h2>
                                        </div>
                                    </>
                                )
                            })}
                        </PassiveColumn1>
                        <PassiveColumn2>
                            <p>Active Voice</p>
                            {grammardata1.map((grammar) => {
                                const {active, active1} = grammar
                                return (
                                    <>
                                        <div className='passive-active-box'>
                                            <h2>{active}</h2>
                                            <h3>{active1}</h3>
                                        </div>
                                    </>
                                )
                            })}
                        </PassiveColumn2>
                        <PassiveColumn3>
                            <p>Passive Voice</p>
                            {grammardata1.map((grammar) => {
                                const {passive, passive1} = grammar
                                return  (
                                    <>
                                        <div className='passive-active-box'>
                                            <h2>{passive}</h2>
                                            <h3>{passive1}</h3>
                                        </div>
                                    </>
                                )
                            })}
                        </PassiveColumn3>
                    </PassiveColumnContainer>
                </PassiveContainer2>
            </PassiveMain>           
        </PassiveGrammar>
    )
}

export default Passive_Grammar
