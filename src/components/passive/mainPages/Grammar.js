import React from 'react'
import {
    PassiveGrammar,
    PassiveSide,
    PassiveMain,
    PassiveContainer1,
    PassiveContainer2,
    PassiveActiveContainer,
    PassiveContainerTitles,
    PassiveColumnTenses,
    PassiveColumnExamples,
    PassiveActiveBox,
    TenseBox,
    ActiveSentence,
    PassiveSentence,
    ActivePassiveRules,
    SubjectObject,
    BePastParticiple
} from './grammar.styled'
import {BsArrowUpRight, BsArrowUpLeft} from 'react-icons/bs'
import { grammardata1 } from '../data/grammardata1'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import { QuizzesButtonGrammar } from '../../../General Pages/Show Quiz Buttons/QuizzesButton'

const Passive_Grammar = () => {
    return (
        <>
        <div className="fatline"></div>
        <PassiveGrammar>
            <ShowSideBar/>
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
                    <ActivePassiveRules>
                        <h2>How do we form the passive voice in English?</h2>
                        <p> 1. In a passive sentence, the object of an active sentence becomes the subject.</p>
                        <SubjectObject>
                            <div className='left-active'>active voice </div>
                            <div className='right-passive'>passive voice</div>
                            <li className='a'> Shakespeare wrote <color>Hamlet</color>. || <color>Hamlet</color> was written by Shakespeare.</li>
                            <div className='right'>object <BsArrowUpRight/> </div>
                            <div className='left'><BsArrowUpLeft/> subject</div>
                        </SubjectObject>
                        <p> 2. We use the verb 'be' in the tense we need and add the past participle:</p>
                        <h4> be + part participle</h4>
                        <BePastParticiple>
                            <li>Hamlet <color>was</color><green> written</green> by Shakespeare.</li>
                            <div className='right'>'be' <BsArrowUpRight/> </div>
                            <div className='left'><BsArrowUpLeft/> past participle</div>
                        </BePastParticiple>
                    </ActivePassiveRules>
                    <ActivePassiveRules>
                        <h1>
                            <div>Active Voice</div>
                            <h3>(when do we  use it?)</h3>
                        </h1>
                        <p>In the active voice, the subject performs the action. The subject (s) always comes first, followed by the verb (v) and the object (o). </p>
                        <h3>e.g. Bill hit the ball. </h3>
                        <h3>------ s -- v ---- o -----</h3>
                        <p>Most English speakers prefer to use the active voice, because it is shorter, more straightforward and more precise. The passive voice can sometimes make sentences sound weak, indirect or confusing. </p>
                        <p>Compare the following two sentences:</p>
                        <li> <colorDarkBlue>The Green party won the election.</colorDarkBlue> (active)</li>
                        <li> <colorDarkBlue>The election was won by the Green party.</colorDarkBlue> (passive)</li>
                        
                    </ActivePassiveRules>
                    <ActivePassiveRules>
                        <h1>
                            <div>Passive Voice</div>
                            <h3>(when do we  use it?)</h3>
                        </h1>
                        <p> We often use the passive voice:</p>
                        <li> when we <strong>don't know</strong> who or what is responsible for the action.</li>
                        <h3>e.g. My car was stolen yesterday. (We don't know who did it.)</h3>
                        <li> when <strong>it is obvious</strong> who or what is responsible for the action</li>
                        <h3>e.g. James was arrested last night. (It's obvious that the police arrested him.)</h3>
                        <li> when we <strong>don't want to say</strong> who or what is responsible for the action.</li>
                        <h3>e.g.  A mistake has been made. (We don't want to say whose mistake it is.)</h3>
                        <br/>
                        <p>The passive voice is more formal than the active and is more common in (formal) written language  and in news. </p>
                        <h3>e.g. The British embassy in Israel had been destroyed by an earthquake.</h3>
                        <h3>e.g. Liverpool have been defeated 3-0 and they are now 4th in the table.</h3>
                        <br/>
                        <p><colorDark>By </colorDark>- We can use it to say who or what is responsible for the action.</p>
                        <h3>e.g. Penicillin was invented by Alexander Fleming.</h3>
                    </ActivePassiveRules>                   
                    {/* Go to Quizzes */}
                    <QuizzesButtonGrammar page='/passive' text='Passive Voice Quizzes'/>
                    <div className='show-below'>You can see how to use the passive voice with different tenses below.</div>
                </PassiveContainer1>
                {/* Table shows active and passive sentences */}
                <PassiveContainer2>
                    <PassiveContainerTitles>
                        <PassiveColumnTenses>
                            <p>Tenses</p>
                        </PassiveColumnTenses>
                        <PassiveColumnExamples>
                            <div className="active-passive-title">
                                <div className='a'>active voice </div>
                                <div className='b'>passive voice</div>
                            </div>
                        </PassiveColumnExamples>
                    </PassiveContainerTitles>
                    {grammardata1.map((grammar) => {
                        const { tense, active, color1, active1, passive, color2, passive1 } = grammar
                        return (
                            <PassiveActiveContainer>
                                <TenseBox>
                                    <h1>{tense}</h1>
                                </TenseBox>
                                <PassiveActiveBox>
                                    <ActiveSentence>
                                        <h2>{active}</h2>
                                        <div className='color'>{color1}</div>
                                        <h2>{active1}</h2>
                                    </ActiveSentence>
                                    <PassiveSentence>
                                        <h3>{passive}</h3>
                                        <div className='color'>{color2}</div>
                                        <h3>{passive1}</h3>
                                    </PassiveSentence>
                                </PassiveActiveBox>   
                            </PassiveActiveContainer>
                        )
                    })}                    
                </PassiveContainer2>
            </PassiveMain>           
        </PassiveGrammar>
        </>
    )
}

export default Passive_Grammar
