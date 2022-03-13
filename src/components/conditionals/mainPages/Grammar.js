import React from 'react'
import { QuizzesButtonGrammar } from '../../../General Pages/Show Quiz Buttons/QuizzesButton'
import { QuizzesButtonGrammarR } from '../../../General Pages/Show Quiz Buttons/QuizzesButtonR'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    ConditionalsGrammar,
    ConditionalSide,
    ConditionalMain,
    Conditional1,
    ConditionalType
} from './grammar.styled'



const Conditionals_Grammar = () => {
    return (
        <>
        <div className="fatline"></div>
        <ConditionalsGrammar>
            <ShowSideBar />
            <ConditionalSide>
                <SidebarGrammar/>
            </ConditionalSide>

            <ConditionalMain>
                <Conditional1>
                    <h1>Conditionals</h1>
                    {/* Introduction */}
                    <div>
                    <p>Conditional sentences are statements about known factors or hypothetical situations and their consequences. They are described as 'real' or 'unreal' conditionals.</p>
                    <p>Complete conditional sentences contain a conditional clause and the consequence (result).</p>
                    <p>The structure of conditionals is simple.</p>

                    <div className='structure'>
                        <div className='box1'>
                            <div>If clause, </div>
                            <div className='b'> + </div>
                            <div> main clause</div>
                        </div>
                        <div className='box2'>
                            <div> ( condition ) </div>
                            <div className='c'>  </div>
                            <div> ( result )</div>
                        </div>
                    </div>
                    <p>If a particular condition is true, then a particular result happens.</p>

                    <div className="example">
                        <div className="example1"></div>
                        <div>
                            <li>If I study today, I will go to the party tomorrow.</li>
                            <h4>(also)</h4>
                            <li>I will go to the party tomorrow if I study today.</li>
                        </div>
                    </div>
                    <h3>Check below the four main types of conditionals. </h3>
                    </div>
                    {/* Go to Quizzes */}
                    <QuizzesButtonGrammar page='/conditionals' text='Conditionals Quizzes'/>
                    {/* Zero Conditional */}
                    <ConditionalType>
                        <h1>Zero Conditional</h1>
                        
                        <p>We use the <strong>Zero Conditional</strong> to talk about general truths, or things that are always true. It's a 'real' conditional, relating to all times.</p>

                        <div className='structure'>
                            <div className='box1'>
                                <div>If  + present simple, </div>
                                <div className='b'> + </div>
                                <div>present simple</div>
                            </div>
                        </div>

                        <div className="example">
                            <div className="example1"></div>
                            <div>
                                <li>If you heat ice, it melts.</li>
                                {/* <h4>(also)</h4> */}
                                <br/>
                                <li>Snakes bite when they are scared. *</li>
                            </div>
                        </div>
                        <h3>* The ' if ' can be replaced by 'when' without changing the meaning. </h3>
                        <p>Also, we can use the <strong>Zero Conditional</strong> to give instructions, or to tell people what to do. </p>
                        <div className="example">
                            <div className="example3"></div>
                            <div>
                                <li>If you want to go to the concert, buy a ticket.</li>
                            </div>
                        </div>
                    </ConditionalType>
                    {/* First Conditional */}
                    <ConditionalType>
                        <h1>First Conditional </h1>
                        <p>We use the <strong>First Conditional</strong> to talk about a particular situation we believe is real or possible to happen in the <strong>future</strong>.It is a 'real' conditional, relating to the future.</p>

                        <div className='structure'>
                            <div className='box1'>
                                <div>If + present simple, </div>
                                <div className='b'> + </div>
                                <div> will + infinitive</div>
                            </div>
                        </div>

                        <div className="example">
                            <div className="example2"></div>
                            <div>
                                <li>If you study hard, you will pass the exam.</li>
                                <br/>
                                <li>If I miss the train, I will take the bus.</li>
                                <br/>
                                <li>You will be late to the concert unless you hurry up. *</li>
                            </div>
                        </div>
                        <h3>* It is common to use <italic>unless (if not), as long as, as soon as </italic>or <italic>in case</italic> instead of ' if '. </h3>
                        <br/>
                        <p><sub_title>Zero vs First conditional</sub_title></p>
                        <p>The Zero Conditional describes something in <strong>general</strong>, whereas the First Conditional describes something in <strong>particular</strong>.</p>
                    </ConditionalType>
                   {/* Go to Quizzes */}
                   <QuizzesButtonGrammarR page='/conditionals' text='Conditionals Quizzes'/>
                    {/* Second Conditional */}
                    <ConditionalType>
                        <h1>Second Conditional</h1>
                        <p>We use the <strong>Second Conditional</strong> to talk about situations that are imaginary or impossible to happen in the <strong>present</strong>. It is an 'unreal' conditional, relating to the present.</p>

                        <div className='structure'>
                            <div className='box1'>
                                <div>If + past simple, </div>
                                <div className='b'> + </div>
                                <div> would + infinitive</div>
                            </div>
                        </div>
                       
                        <div className="example">
                            <div className="example2"></div>
                            <div>
                                <li>If I had more time, I would learn Spanish.</li>
                                <br/>
                                <li>If I was rich, I would buy a big yacht.</li>
                                <br/>
                                <li>If I won the lottery, I could quit my job. *</li>
                            </div>
                        </div>
                        <h3>* Sometimes, we can use <italic>should, could or might</italic> instead of 'would'. </h3>
                        <br/>
                        <br/>
                        <p>Also, we can use the <strong>Second Conditional</strong> to give advice, or to talk about hypothetical solutions to problems. </p>
                        <div className="example">
                            <div className="example1"></div>
                            <div>
                                <li>If I were you, I wouldn't go to that party.**</li>
                                <br/>
                                <li>If the government spent more money on education, crime rates would go down.  </li>
                            </div>
                        </div>
                        <h3>** When ' if ' is followed by the verb ' be ', it's grammatically correct to say <italic>if I were, if he/she/it were</italic>. </h3>
                    </ConditionalType>
                    {/* Third Conditional */}
                    <ConditionalType>
                        <h1>Third Conditional</h1>
                        <p>We use the <strong>Third Conditional</strong> to talk about hypothetical unreal situations in the <strong>past</strong>. </p>

                        <div className='structure'>
                            <div className='box3'>
                                <div>If + past perfect, </div>
                                <div className='b'> + </div>
                                <div> would + have +  past participle</div>
                            </div>
                        </div>

                        <div className="example">
                            <div className="example1"></div>
                            <div>
                                <li>If we had woken up earlier, we wouldn't have missed the train.</li>
                                <br/>
                                <li>If you hadn't eaten those eggs, you wouldn't have been sick.</li>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <p>Also, we can use the <strong>Third Conditional</strong> to describe regrets or give blame. </p>
                        <div className="example">
                            <div className="example1"></div>
                            <div>
                                <li>If I had studied harder, I would have passed the exam. <light>(regret)</light></li>
                                <br/>
                                <li>If you had been on time, we wouldn't have missed the bus. <light>(I blame  you!)</light></li>
                            </div>
                        </div>
                    </ConditionalType>
                   {/* Go to Quizzes */}
                   <QuizzesButtonGrammar page='/conditionals' text='Conditionals Quizzes'/>
                    {/* Mixed Conditional */}
                    <ConditionalType>
                        <h1>Mixed Conditionals</h1>
                        <p>The <strong>Mixed Conditional</strong> is a combination between the <strong>Second and Third Conditional</strong>. It is used to express present results of hypothetical or unreal situations in the <strong>past</strong>. It is an 'unreal' conditional, relating to the past, often used to talk about regrets.</p>

                        <h6>First combination:</h6>
                        <div className='structure'>
                            <div className='box3'>
                                <div>If + 3nd Conditional , </div>
                                <div className='b'> + </div>
                                <div> 2nd Conditional</div>
                            </div>
                        </div>
                        <p>This type of <strong>Mixed Conditional</strong> expresses how a change in a past situation would have a different result in the present.</p>

                        <div className="example">
                            <div className="example3"></div>
                            <div>
                                <li>If we <italic>had followed</italic> the sign, we <italic>wouldn't be</italic> lost now.</li>
                                <br />
                                <h6>(We didn't follow the sign, and now we are lost.)</h6>
                            </div>
                        </div>
                        <h3 style={{color: 'white'}}>-</h3>
                        <h6>Second combination:</h6>
                        <div className='structure'>
                            <div className='box3'>
                                <div>If + 2nd Conditional , </div>
                                <div className='b'> + </div>
                                <div>3nd Conditional</div>
                            </div>
                        </div>
                        <p>This type of <strong>Mixed Conditional</strong> expresses how a different situation in the present would have a different result in the past.</p>

                        <div className="example">
                            <div className="example3"></div>
                            <div>
                                <li>If I <italic>spoke</italic> better English, I <italic>could have got</italic>  the job.</li>
                                <br/>
                                <h6>(I don't speak English well enough, so I didn't get the job.)</h6>
                            </div>
                        </div>
                        {/* <br/> */}
                        <h3 style={{color: 'white'}}>-</h3>
                    </ConditionalType>                  
                </Conditional1>
            </ConditionalMain>
        </ConditionalsGrammar>
        </>
    )
}

export default Conditionals_Grammar
