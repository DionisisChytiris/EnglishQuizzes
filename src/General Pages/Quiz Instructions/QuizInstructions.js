import React from 'react'
import { InstructionsMain, InstructionsContainer } from './QuizInstructions.styled'

const QuizInstructions = (props) => {
  return (
    <InstructionsMain>
     <h1>Quiz Structure</h1> 
     <InstructionsContainer>
      <p>Task Type:   Grammar practice </p>
      <p>Focus:  {props.focus} </p>
      <p>Format:  helo world </p>
      <p>Number of questions:  {props.number} </p>
      <p>What is testing: 
        <div> {props.test1} </div>
        <div> {props.test2} </div>
      </p>
      <br/>
     
      <p>General Advice:
        <div> {props.advice1} </div>
        <div> {props.advice2} </div>
        <div> {props.advice3} </div>
      </p>
      <br/>
     </InstructionsContainer>
      <div className='box'></div>
    </InstructionsMain>
  )
}

export default QuizInstructions
