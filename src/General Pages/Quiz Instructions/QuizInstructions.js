import React from 'react'
import { InstructionsMain, InstructionsContainer } from './QuizInstructions.styled'
import {GoHome} from 'react-icons/go'
import { BsArrowReturnLeft } from 'react-icons/bs'
import {FaBookReader, FaAngleLeft, FaTimes} from 'react-icons/fa'

const QuizInstructions = (props) => {
  return (
    <InstructionsMain>
     <h1>Quiz Instruction</h1> 
     <InstructionsContainer>
      <div className='instructions'><span>Task Type:</span>  Grammar practice </div>
      <div className='instructions'><span>Grammar Focus: </span> {props.focus} </div>
      <div className='instructions'><span>Format: </span> Grammar quizzes with explanation and feedback. </div>
      <div className='instructions'><span>Number of questions:</span>  {props.number} </div>
      {/* <p><span>What is testing: </span>
        <div className='left-space'> {props.test1} </div>
        <div className='left-space'> {props.test2} </div>
      </p> */}
      <br/>
     
      <div className='instructions'><span>General Guide: </span>
        <ul>
          <li>hey</li>
          <li>ther</li>
          <li>ther</li>
          <li>ther</li>
        </ul>
        <div className='left-space a'> {props.advice1} </div>
        <div className='left-space'> {props.advice2} </div>
        <br/>
        <div className='symbols-guide '>Symbols guide:</div>
        <div className='left-space line'> 
          <div className='icon b'><BsArrowReturnLeft/></div>
          <div className='gap-left'>Return to <span>Quiz Instruction</span> page.</div>
        </div>
        <div className='left-space line'> 
          <div className='icon'>Quizzes</div>
          <div className='gap-left'>Go to <span>Quizzes</span> page</div>
        </div>
        <div className='left-space line a'> 
          <div className='icon'><GoHome/></div>
          <div className='gap-left'>Go to <span>Home</span> page</div>
        </div>
        <div className='left-space line'> 
          <div className='icon'><FaBookReader/></div>
          <div className='gap-left'>Study grammar for this chapter.</div>
        </div>
        <div className='sideBar-symbols'>You can find the following 2 symbols on the left top corner of your screen, if you access the website from a tablet or smart phone.</div>
        <div className='left-space line c'> 
          <div className='icon1'><FaAngleLeft/></div>
          <div className='gap-left'>Tap it to open sidebar.</div>
        </div>
        <div className='left-space line'> 
          <div className='icon2 b'><FaTimes/></div>
          <div className='gap-left'>Tap it to close sidebar.</div>
        </div>
       
      </div>
      <br/>
     </InstructionsContainer>
      {/* <div className='box'></div> */}
    </InstructionsMain>
  )
}

export default QuizInstructions
