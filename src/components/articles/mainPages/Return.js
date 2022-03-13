import React from 'react'
import QuizInstructions from '../../../General Pages/Quiz Instructions/QuizInstructions'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'

const Return = () => {
    
    return (
        <>
            <ShowSideBar/>
            <QuizInstructions
                focus={'Articles'} 
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