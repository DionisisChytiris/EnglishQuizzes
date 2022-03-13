import React from 'react'
import QuizInstructions from '../../../General Pages/Quiz Instructions/QuizInstructions'
import ShowSidebarQuiz  from './ShowSidebarQuiz'

const Instructions = () => {
    return (
        <>
        <ShowSidebarQuiz/>
        <QuizInstructions
            focus={'Conditionals'} 
            number={'12'}
            test1={'Hello'}
            test2={'World'}
            advice1={'Hello'}
            advice2={'World'}
            advice3={'!!!'}
        />
        </>    
    )
}

export default Instructions