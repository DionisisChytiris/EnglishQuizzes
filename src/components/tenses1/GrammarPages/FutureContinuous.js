import React from 'react'
import { QuizzesButtonGrammar } from '../../../General Pages/QuizzesButton'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import { Tenses1Grammar, Tenses1Side, Tenses1Main, TensesTest1} from '../mainPages/grammar.styled'

const FutureContinuous = () => {
    return (
        <>
        <div className="fatline"></div>
        <Tenses1Grammar>
            <ShowSideBar/>
            <Tenses1Side>
                <SidebarGrammar/>
            </Tenses1Side>
            <Tenses1Main>
                {/* <div style={{ color: 'black', fontSize: '80px', marginTop: '-200px' }}>Future Continuous</div> */}
                <TensesTest1>
                    <div className='title'>Future Continuous</div>
                        {/* Introduction */}
                        <div>
                            <p>It can be a bit difficult to say whether we use the gerund or the infinitive.
                            <br /><br />
                            Certain verbs followed by gerund and others by infinitive. Some verbs can use either form with no change in meaning. Occasionally some verbs can use either form with a change in meaning.
                            <br /><br />
                            There are few rules whether to use each form. However, you have to learn which verbs go with which  pattern.
                            </p>
                        </div>
                        {/* Gerunds */}
                        <h1>Future Continuous</h1>
                        <div className="gerund">
                            <p>The gerund is the -ing form of a verb. We use the gerund: </p>
                            {/* <p>Gerunds are used:</p> */}
                            <ul>
                                <li>1. As the subject of a sentence.</li>
                                <div className='example'>Drinking water is good for your  health.</div>
                                <li>2. After certain verbs.</li>
                                <div className='example'>I <green>enjoy</green> playing football.</div>
                                <div className='example1'>Would you <green>mind</green> opening the window?</div>
                                <li>3. After prepositions.</li>
                                <div className='example'>I am interested <green>in</green> learning a new language.</div>
                                <div className="example_left">
                                    <div className='example'> (Exceptions: except  and but)</div>
                                    <div className='example1'>I had no choice <green>but</green> <span>to take</span> the bus.</div> 
                                </div>
                            </ul>
                        </div>
                    </TensesTest1>
                {/* Go to Quizzes */}
                <QuizzesButtonGrammar page='tenses1' text='Tenses 1 Quizzes'/>
            </Tenses1Main>
        </Tenses1Grammar>
        </>
    )
}

export default FutureContinuous
