import React from 'react'
import {Link } from 'react-router-dom'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    ConditionalsGrammar,
    ConditionalSide,
    ConditionalMain,
    Conditional1,
    QuizzesButton,
    ConditionalType
} from './grammar.styled'



const Conditionals_Grammar = () => {
    return (
        <ConditionalsGrammar>
            <ShowSideBar />
            <ConditionalSide>
                <SidebarGrammar/>
            </ConditionalSide>

            <ConditionalMain>
                <Conditional1>
                    <h1>Conditionals</h1>
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
                    {/* Button */}
                    <QuizzesButton>
                        <Link className='passive-button' to='/conditionals'>Conditionals Quizzes</Link>
                    </QuizzesButton>
                    {/* Zero Conditional */}
                    <ConditionalType>
                        <h1>Zero Conditional</h1>
                        
                        <p>We use the <strong>zero conditional</strong> to talk about general truths, or things that are generally true.</p>

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
                        <p>Also, we can use the <strong>zero conditional</strong> to give instructions, or to tell people what to do. </p>
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
                        <p>We use the <strong>first conditional</strong> to talk about a particular situation we believe is real or possible to happen in the <strong>future</strong>.</p>

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
                        <p>The zero conditional describes something in <strong>general</strong>, whereas the first conditional describes something in <strong>particular</strong>.</p>
                    </ConditionalType>
                    {/* Button */}
                    <QuizzesButton>
                        <Link className='passive-button' to='/conditionals'>Conditionals Quizzes</Link>
                    </QuizzesButton>
                    {/* Second Conditional */}
                    <ConditionalType>
                        <h1>Second Conditional</h1>
                        <p>We use the <strong>second conditional</strong> to talk about <strong>present</strong> or <strong>future</strong> situations that are imaginary or impossible to happen.</p>

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
                        <p>Also, we can use the <strong>second conditional</strong> to give advice, or to talk about hypothetical solutions to problems. </p>
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
                        <p>We use the <strong>third conditional</strong> to talk about an imagined <strong>past</strong> situation. We imagine a change in this situation and the different result of that change. </p>

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
                        <p>Also, we can use the <strong>third conditional</strong> to describe regrets or give blame. </p>
                        <div className="example">
                            <div className="example1"></div>
                            <div>
                                <li>If I had studied harder, I would have passed the exam. <light>(regret)</light></li>
                                <br/>
                                <li>If you had been on time, we wouldn't have missed the bus. <light>(I blame  you!)</light></li>
                            </div>
                        </div>
                    </ConditionalType>
                    {/* Button */}
                    <QuizzesButton>
                        <Link className='passive-button' to='/conditionals'>Conditionals Quizzes</Link>
                    </QuizzesButton>
                    {/* Mixed Conditional */}
                    <ConditionalType>
                        <h1>Mixed Conditionals</h1>
                        <p>The structure of conditionals is very simple.</p>

                        <div className='structure'>
                            <div className='box3'>
                                <div>If + past perfect, </div>
                                <div className='b'> + </div>
                                <div> would + have +  past participle</div>
                            </div>
                        </div>
                        <p>If a particular condition is true, then a particular result happens.</p>

                        <div className="example">
                            <div className="example2"></div>
                            <div>
                                <li>past action   /   present result.</li>
                                <br/>
                                <li>present condition / past result</li>
                                <br/>
                                <li>future action / past result</li>
                            </div>
                        </div>
                        <h3>Check below the four main types of conditionals. </h3>
                    </ConditionalType>
                   
                </Conditional1>
            </ConditionalMain>
        </ConditionalsGrammar>
    )
}

export default Conditionals_Grammar
