import React from 'react'
import ShowSideBar from '../mainPages/ShowSideBarQuiz'
import QuizInstructions from '../../../General Pages/Quiz Instructions/QuizInstructions'

const Return = () => {
    return (
        <>
        <ShowSideBar/>
        <QuizInstructions
            focus={'Tenses 2'} 
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

export default Return