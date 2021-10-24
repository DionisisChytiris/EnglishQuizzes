import React from 'react'
import '../style.css'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {IoArrowRedo} from 'react-icons/io5'
import {
    ModalGrammar,
    ModalSide,
    ModalMain,
    ModalBox1,
    ModalBox2,
    ModalBox3,
    ModalContainer,
    ModalFlex,
    ModalFlex1,
    ModalFlex2,
    ModalFlexLineWhite,
    ModalFlexLineBlue
} from '../modals.styled'

const Modal_Grammar = () => {
    return (
        <>
        {/* // <ModalGrammar> */}
            {/* <ModalSide>
                <SidebarGrammar/>
            </ModalSide> */}
            <ModalMain>
                <ModalBox1>
                    <ModalContainer>
                        <h2 className='fade-in1'>Modal Verbs</h2>
                        <div className='p1 fade-in2'>Modal verbs are auxiliary verbs that we use to express probability, ability, permission, requests, offers, invitations, suggestions and obligations.</div>
                        <ul className='fade-in3'>
                            <h5>The modal verbs are:</h5>
                            <li>can / could </li>
                            <li>may / might</li>
                            <li>must</li>
                            <li>shall / should</li>
                            <li>will / would</li>
                        </ul>
                    </ModalContainer>
                </ModalBox1>
                <ModalBox2>
                    <ModalContainer>
                        <ModalFlex>
                            <ModalFlex1>
                                <h1>Probability</h1>
                                {/* <h2>Talking about the present.</h2> */}
                                {/* may/might/could */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span >may/might/could</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                    <div className='modal1'><span>May</span> and <span>might</span> have a similar meaning, but <span>might</span> can express less possibility.</div>
                                    <div className='modal1'><span>Could</span> is preferable to use to express our opinion about something we are not sure.</div>
                                </div>
                                {/* will */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p3'>We use <span>will</span> when we are certain that something will happen. </div>
                                    <ul>
                                        <li>The sun <span>will</span> rise tomorrow.</li>
                                    </ul>                                  
                                </div>
                                {/* must */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>must</span> to show we are sure something is <strong>certain</strong> to happen in the <strong>present</strong> and we have reasons for our certainty.</div>
                                    <ul>
                                        <li className='a'>You had a very long flight, nearly 8 hours. You <span>must</span> be tired.</li>
                                    </ul>
                                </div>
                                {/* can */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p3'>We use <span>can</span> to make general statements about what is possible. </div>
                                    <ul>
                                        <li>It <span>can</span> be very hot here in summer.</li>
                                    </ul>
                                    <div className='modal2'>(We use <span>can't</span> to say that something is impossible.)</div>
                                    <div className='modal2'>e.g There <span>can't</span> be any food left. The fridge is empty.</div>
                                </div>
                                {/* should */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p3'>We use <span>should</span> to make an assumption about something is likely to happen. (present) </div>
                                    <ul>
                                        <li>They <span>should</span> be there by now.</li>
                                    </ul>                                  
                                </div>
                                 {/* should have */}
                                 <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p3'>We use <span>should have</span> to make an assumption about something has likely happened. (past) </div>
                                    <ul>
                                        <li className='a'>It's nearly ten o'clock. He <span>should have arrived </span> by now.</li>                               
                                    </ul>                                  
                                </div>
                                {/* <h2>Talking about the past.</h2> */}
                                {/* may have/might have/could have */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p3'>We use <span>may have / might have / could have</span> to make guesses about the <strong>past</strong>. </div>
                                    <ul>
                                        <li className='a'>I don't know where the tickets are. I <span>may have left</span> them in the hotel. </li>
                                        <li className='a'>It's 9 o'clock. They <span>might have arrived</span> by now.</li>
                                        <li className='a'>I am worried. Something <span>could have happened </span> to Sally.</li>                                 
                                    </ul>                                  
                                </div>
                                {/* must have */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p3'>We use <span>must have</span> when we are quire sure that something happened. </div>
                                    <ul>
                                        <li>Sandra <span>must have forgotten </span> about our date.</li>                               
                                    </ul>                                  
                                </div>
                               
                            </ModalFlex1>
                            {/* ModalFlex2 is the vertical line between */}
                            <ModalFlexLineWhite></ModalFlexLineWhite>
                            <ModalFlex1>
                                <h1>Ability</h1>
                                {/* can */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>can</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                                {/* could */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>could</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                                {/* be able to */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>be able to</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                                {/* could have */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>could have</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                                {/* will be able to */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>will be able to</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                            </ModalFlex1>
                        </ModalFlex>
                    </ModalContainer>
                </ModalBox2>
                <ModalBox3>
                    <ModalContainer>
                    <ModalFlex>
                            <ModalFlex2>
                                <h1 className='b'>Probability</h1>
                                {/* <h2>Talking about the present.</h2> */}
                                {/* may/might/could */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span >may/might/could</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                    <div className='modal1'><span>May</span> and <span>might</span> have a similar meaning, but <span>might</span> can express less possibility.</div>
                                    <div className='modal1'><span>Could</span> is preferable to use to express our opinion about something we are not sure.</div>
                                </div>
                                {/* will */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p3'>We use <span>will</span> when we are certain that something will happen. </div>
                                    <ul>
                                        <li>The sun <span>will</span> rise tomorrow.</li>
                                    </ul>                                  
                                </div>                             
                            </ModalFlex2>
                            {/*  Vertical line between */}
                            <ModalFlexLineBlue></ModalFlexLineBlue>
                            <ModalFlex2>
                                <h1 className='b'>Ability</h1>
                                {/*  */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>may/might/could</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                                {/*  */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>may/might/could</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                                {/*  */}
                                <div className='content'>
                                    <div className='arrow'><IoArrowRedo/></div>
                                    <div className='p2'>We use <span>may/might/could</span> to express a possibility, but not certainty, in the <strong>present</strong> and <strong>future</strong>.</div>
                                    <ul>
                                        <li>We <span>may</span> watch the football game tonight.</li>
                                        <li>It <span>might</span> be wrong to buy this car.</li>
                                        <li>He <span>could</span> be lost. I'll go to help him.</li>
                                    </ul>
                                </div>
                            </ModalFlex2>
                        </ModalFlex>
                    </ModalContainer>
                </ModalBox3>
            </ModalMain>
        {/* </ModalGrammar> */}
        </>
    )
}

export default Modal_Grammar
