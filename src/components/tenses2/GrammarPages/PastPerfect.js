import React from 'react'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import { Tenses2Grammar, Tenses2Side, Tenses2Main, TensesTest2 } from '../mainPages/grammar.styled'
import { QuizzesButtonGrammar } from '../../../General Pages/QuizzesButton'


const PastPerfect = () => {
    return (
        <Tenses2Grammar>
            <ShowSideBar/>
            <Tenses2Side>
                <SidebarGrammar/>
            </Tenses2Side>
            <Tenses2Main>
                {/* <div style={{ color: 'black', fontSize: '80px', marginTop: '-200px' }}>Past Perfect</div> */}
                <TensesTest2>
                    <div className='title'>Past Perfect</div>
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
                    <h1>Past Perfect</h1>
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
                </TensesTest2>
                {/* Go to Quizzes */}
                <QuizzesButtonGrammar page='/tenses2' text='Tenses 2 Quizzes'/>
            </Tenses2Main>
        </Tenses2Grammar>
    )
}

export default PastPerfect