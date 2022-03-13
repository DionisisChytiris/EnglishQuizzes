import React from 'react'
import { InstructionsMain, InstructionsContainer } from './QuizInstructions.styled'

const QuizInstructions = (props) => {
  return (
    <InstructionsMain>
     <h1>Quiz Structure</h1> 
     <InstructionsContainer>
      <p><gradient>Task Type: </gradient> <light> Grammar practice </light></p>
      <p>Focus: <light> {props.focus} </light></p>
      <p>Format: <light> helo world </light></p>
      <p>Number of questions: <light> {props.number} </light></p>
      <p>What is testing: 
        <ul><light> {props.test1} </light></ul>
        <ul><light> {props.test2} </light></ul>
      </p>
      <br/>
     
      <p>General Advice:
        <ul><light> {props.advice1} </light></ul>
        <ul><light> {props.advice2} </light></ul>
        <ul><light> {props.advice3} </light></ul>
      </p>
      <br/>
     </InstructionsContainer>
      <div className='box'></div>
    </InstructionsMain>
  )
}

export default QuizInstructions
