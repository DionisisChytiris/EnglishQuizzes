import React from 'react' 
import QuizInstructions from '../../../General Pages/Quiz Instructions/QuizInstructions'
import ShowSideBar from '../mainPages/ShowSidebarQuiz'

const Instructions = () => {
    return (
        <>
            <ShowSideBar />
            <QuizInstructions 
                focus={'Prepositions'} 
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


// import React from 'react'
// import styled, { keyframes } from 'styled-components'

// const Return = () => {
//     const reactArray = "Instructions".split("")

//     return (
//         <div className='quizzes_pre_quiz'>
//             <Wrapper>
//                 {reactArray.map((item, index) => (
//                     <span key={index}>{item}</span>
//                 ))}
//             </Wrapper>
//         </div>
//     )
// }

// export default Return

// const animation = keyframes`
//     0% { opacity:0; transform: translateY(-50px) skewY(10deg) skewX(10deg) rotateZ(10deg); filter:blur(2px); }
//     100% { opacity:1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);  }
// `

// const Wrapper = styled.span`
//     display: inline-block;
    
//     span {
//         display: inline-block;
//         opacity: 0;
//         animation-name: ${animation};
//         animation-duration: 1s;
//         animation-fill-mode: forwards;
//         animation-timing-function: cubic-bezier(0.07s, 0.82, 0.165, 1);
//     }
//     span:nth-child(1){
//         animation-delay: 0.1s;
//     }
//     span:nth-child(2){
//         animation-delay: 0.2s;
//     }
//     span:nth-child(3){
//         animation-delay: 0.3s;
//     }
//     span:nth-child(4){
//         animation-delay: 0.4s;
//     }
//     span:nth-child(5){
//         animation-delay: 0.5s;
//     }
//     span:nth-child(6){
//         animation-delay: 0.6s;
//     }
//     span:nth-child(7){
//         animation-delay: 0.7s;
//     }
//     span:nth-child(8){
//         animation-delay: 0.8s;
//     }
//     span:nth-child(9){
//         animation-delay: 0.9s;
//     }
//     span:nth-child(10){
//         animation-delay: 1s;
//     }
//     span:nth-child(11){
//         animation-delay: 1.1s;
//     }
//     span:nth-child(12){
//         animation-delay: 1.2s;
//     }
// `