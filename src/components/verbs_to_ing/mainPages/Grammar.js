import React from 'react'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    Verbs_to_ingGrammar,
    Verbs_to_ingSide,
    Verbs_to_ingMain,
    Verbs_to_ing1,
    SameMeaning,
    DifferentMeaning,
    ContainerExample,
    ContainerFlex
} from './grammar.styled'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import { QuizzesButtonGrammar } from '../../../General Pages/QuizzesButton'

// alert functions
const spelling = () => {
    alert('Spelling Tips!\n1. Add -ing at the end of most verbs.\nplay-playing, cry-crying, sleep-sleeping\n2. Verbs end in -e. Remove -e and add -ing.\nride-riding, slide-sliding\n3. Verbs end in -ie. \ndie-dying, tie-tying\n4. Last syllable is written with a consonant-vowel-consonant and is stressed. Double last letter before adding -ing.\nbeg-begging, begin-beginning\nException: words that end in w.\nrow-rowing, sew-sewing')
}
const gerundVerbs = () => {
    alert('Most common verbs followed by Gerund:\n\nadmit, advise, allow, appreciate, avoid, consider, delay, deny, dislike, enjoy, escape, fancy, finish, go, imagine, involve, keep, mention, mind, miss, permit, postpone, practise, reject, resist, risk, stop, suggest, understand')
}
const infinitiveVerbs = () => {
    alert('Most common verbs followed by "to" + infinitive:\n\nafford, agree, aim, appear, arrange, attempt, beg, choose, claim, consent, dare, decide, demand, deserve, determine, endeavour, expect, fail, guarantee, happen, hesitate, hope, learn, manage, mean, offer, plan, prepare, pretend, promise, refuse, resolve, seem, stop, tend, threaten, want, wish')
}
const verbs_object = () => {
    alert('After some verbs, we need to include an object before a to-infinitive. Check some of them below:\n\nallow, believe, cause, command, enable, encourage, entitle, force, invite, order, persuade, show, teach, tell')
}

const Verbs_to_ing_Grammar = () => {
    return (
        <Verbs_to_ingGrammar>
            <ShowSideBar/>
            {/* Sidebar (left side)*/}
            <Verbs_to_ingSide>
                <SidebarGrammar/>
            </Verbs_to_ingSide>
            {/* Grammar part (right side)*/}
            <Verbs_to_ingMain>
                <Verbs_to_ing1>
                    <div className='title'>Gerunds / Infinitive</div>
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
                    <h1>Gerund</h1>
                    <div className="gerund">
                        <p>The gerund is the <click onClick={spelling}>-ing</click> form of a verb. We use the gerund: </p>
                        {/* <p>Gerunds are used:</p> */}
                        <ul>
                            <li>1. As the subject of a sentence.</li>
                            <div className='example'>Drinking water is good for your  health.</div>
                            <li>2. After certain <click onClick={gerundVerbs}>verbs</click>.</li>
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
                    {/* Go to Quizzes */}
                    <QuizzesButtonGrammar page='/verbs_to_ing' text='Verbs -to/-ing Quizzes'/>
                    {/* Infinitives */}
                    <h1>Infinitive</h1>
                    <div className="gerund">
                        <p>The infinitive is the basic form of the verb prefaced with the word 'to': <italic>to play, to go</italic>. We use the infinitive: </p>
                        <ul>
                            <li>1. After many adjectives.</li>
                            <div className='example'>It's difficult to learn German.</div>
                            <li>2. After certain <click onClick={infinitiveVerbs}>verbs</click>.</li>
                            <div className='example'>I <green>decided</green> to go home earlier.</div>
                            <div className='example1'>He  <green>deserves</green> to get a promotion.</div>
                            <li>3. After some verbs that need to include an object.</li>
                            <div className='example'>I <green>command</green> you <green>to clean</green> the garden.</div>
                            <div className='example'><click onClick={verbs_object}><italic>Click here to find more verbs like this.</italic></click></div>
                            
                        </ul>
                    </div>
                    {/* bare infinitive */}
                    <div className="gerund">
                        <br/>
                        <p><strong>Bare Infinitive</strong></p>
                        <p>The bare infinitive is the infinitive without 'to'. We use the bare infinitive: </p>
                        <ul>
                            <li>1. After modal verbs.</li>
                            <div className='example'>You should wash your car.</div>

                            <li>2. After 'let' and 'make'. </li>
                            <div className='example'> My brother <green>let</green> me drive his new car.</div>
                            <div className='example1'> Do not <green>make</green> her wait outside.</div>

                            <li>3. After some verbs of perception .</li>
                            <div className='example'><italic>(see, watch, hear, notice, feel, sense)</italic></div>
                            <div className='example'>I <green>watched</green> Julia <green>walk away</green> from the house.</div>
                            <div className='example1'>I <green>hear tell</green> John bought a new house. <italic>(someone told me about it)</italic></div>
                        </ul>
                    </div>
                    {/* Go to Quizzes */}
                    <QuizzesButtonGrammar page='/verbs_to_ing' text='Verbs -to/-ing Quizzes'/>
                    {/* different meaning */}
                    <h1>Gerund or Infinitive?</h1>
                    <div className="gerund">
                        <p> Some verbs can be followed by either an <strong>-ing form </strong> or a <strong>to-infinitive</strong>, but there is often a difference in meaning.</p>

                        <div className='change'>No Change in Meaning</div>
                        <SameMeaning>
                            <p>The following verbs can be followed by either the infinitive or the gerund <strong>with no difference</strong> in meaning: </p>
                            <div className='verbs-row'>
                                <div>attempt</div>
                                <div>begin</div>
                                <div>bother</div>
                                <div>cease</div>
                                <div>continue</div>
                                <div>hate</div>
                                <div>intend</div>
                                <div>love</div>
                                <div>prefer</div>
                                <div>start</div>
                            </div>
                            <h3>Example:</h3>
                            <h4>Even though it was too late, they <green>started</green> <italic>to play/playing</italic>.</h4>
                        </SameMeaning>

                        <br/>
                        <div className='change'>Change in Meaning</div>
                        <DifferentMeaning>
                            <p>The following verbs can be followed by either the infinitive or the gerund <strong>with difference</strong> meaning:</p>
                            <br/>
                        
                            <ContainerExample>
                                {/* come */}
                                <ContainerFlex>
                                    <div className="box1">come</div>
                                    <div className="box2">
                                        <h5>to talk about a gradual change</h5>
                                        <p>- After some years, they came <color>to accept</color> her as an equal.</p>
                                        {/* <div className="line"></div> */}
                                        <h5>to say that someone moves in the way that is described</h5>
                                        <p>- He came <color>hurrying</color> up the path.</p>
                                    </div>
                                </ContainerFlex>
                                {/* go on */}
                                <ContainerFlex>
                                    <div className="box1">go on</div>
                                    <div className="box2">
                                        <h5>do or say something new</h5>
                                        <p> - After discussing the economy, the president went on  <color>to talk </color> about foreign policy.  </p>
                                        <h5>to continue doing the same thing</h5>
                                        <p>- She stopped writing, looked at her notes and then went on <color>writing</color>.</p>
                                    </div>
                                </ContainerFlex>
                                {/* mean */}
                                <ContainerFlex>
                                    <div className="box1">mean</div>
                                    <div className="box2">
                                        <h5>to say that we intend/intended to do something</h5>
                                        <p>- I meant <color>to call</color> her yesterday.</p>
                                        <h5>to say that something has something else as a result</h5>
                                        <p>- If we want to get there by 7.00, that means <color>getting up</color> before 5.00.</p>
                                    </div>
                                </ContainerFlex>
                                {/* regret */}
                                <ContainerFlex>
                                    <div className="box1">regret</div>
                                    <div className="box2">
                                        <h5>to say that we are about to do something we are not happy about (refers to the future)</h5>
                                        <p>- I regret <color>to inform</color> you that your application has been unsuccessful.</p>
                                        <h5>to say we have already done something that we are not happy about (refers to the past)</h5>
                                        <p>- He regrets not <color>going</color> to college.</p>
                                    </div>
                                </ContainerFlex>
                                {/* remember */}
                                <ContainerFlex>
                                    <div className="box1">remember</div>
                                    <div className="box2">
                                        <h5>to mean that remembering comes before the action is done</h5>
                                        <p>- Remember <color>to switch off</color> the lights, before you go out. </p>
                                        <h5>something happened and now I remember it (refers to the past)</h5>
                                        <p>- I know I locked the door. I clearly remember <color>locking</color> it.</p>
                                    </div>
                                </ContainerFlex>
                                {/* stop */}
                                <ContainerFlex>
                                    <div className="box1">stop</div>
                                    <div className="box2">
                                        <h5>to say why we stop doing something</h5>
                                        <p>- She stopped <color>to make </color>a cup of tea.</p>
                                        <h5>to say what it is that we stop doing</h5>
                                        <p>- They stopped <color>laughing</color> when Malcolm walked into the room.</p>
                                    </div>
                                </ContainerFlex>
                                {/* try */}
                                <ContainerFlex>
                                    <div className="box1">try</div>
                                    <div className="box2">
                                        <h5>to attempt something (without necessarily attempting to improve a situation)</h5>
                                        <p>- I tried <color>to get</color> the table through the window, but it was too big.</p>
                                        <h5>to attempt something to see if it improves a situation (attempt to find a solution)</h5>
                                        <p>- We tried <color>baking</color> the cake without flour, but it did not work.</p>
                                    </div>
                                </ContainerFlex>
                            </ContainerExample>
                        </DifferentMeaning>

                        
                        <p></p>
                    </div>
                </Verbs_to_ing1>
            </Verbs_to_ingMain>
        </Verbs_to_ingGrammar>
    )
}

export default Verbs_to_ing_Grammar
