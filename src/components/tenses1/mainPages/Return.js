import React from 'react'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'
import QuizInstructions from '../../../General Pages/Quiz Instructions/QuizInstructions'

const Instructions = () => {
    return (
        <>
        <ShowSideBar/>
        <QuizInstructions
            focus={'Tenses 1'} 
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