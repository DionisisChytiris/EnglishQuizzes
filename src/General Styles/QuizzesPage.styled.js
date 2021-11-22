import styled from 'styled-components'

export const QuizzesPageMain = styled.div`
    width: 1200px;
    background: rgb(253, 251, 251);
    /* height: 100vh; */
    height: 100%;
    margin: auto;
    display: flex;
    /* align-items: center; */

    @media (max-width: 1200px){
        width: 100%;
    }
    `

export const QuizzesMain = styled.div`
    /* height: 100vh; */
    height: 75vh;
    width: 850px;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background-color: var(--cl-primary-blue);

    h1{
        font-size: clamp(1.8rem, 2vw, 2.2rem);
        margin-top: 80px;
        color: white;
    }
    h2{
        font-size: clamp(1.8rem, 2vw, 2.2rem);
        margin: 30px auto 20px auto;
        color: white;
    }
    @media (max-width: 850px){
        height: 100vh;
        margin: 0px;
        padding-top: 10%;
    }
`

export const QuestionCounter = styled.div`
    margin-top: 10px;
    font-size: clamp(1rem, 1.2vw, 1.4rem);
    color: white;
`

export const Question = styled.div`
    width: 70%;
    background: linear-gradient(rgb(238, 242, 247), rgb(39, 119, 224));
    border: 2px solid white;
    color: black;
    text-align: center;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
    font-size: 20px;
`

export const AnswerContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;

    .answer{
        width: 150px;
        padding: 10px;
        margin: 5px;
        text-align: center;
        background: #fff;
        color: black;
        border: none;
        border-radius: 15px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .answer:hover {
        background: var(--cl-primary-darkblue);
        cursor: pointer;
        color: white;
        font-weight: 600;
    }
    .answer.correct {
        background: rgb(126, 255, 126);
    }
    .answer.wrong {
        background: rgb(250, 76, 111);
    }
    .answer.correct:hover,
    .answer.wrong:hover {
        color: black;
        font-weight: 100;
    }
`
  
export const Explanation = styled.div`
    width: 60%;
    padding: 10px 30px;
    /* border: 2px solid #eae6eb; */
    background: var(--cl-primary-lightgrey);
    margin-top: 30px;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    .line{
        border-bottom: 1px solid black;
        margin: 2px;
    }
    .next-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    @media (max-width: 560px){
        width: 100%;
        margin-top: 10px;
    }
`
export const ExplanationTitle = styled.div`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
    margin: auto;
`
export const ExplanationContent = styled.div`
    color: rgb(119, 118, 118);
    padding: 10px 20px;
`

// Test quiz3
export const QuizContainer = styled.div`
    width: 90%;
    height: 60vh;
    background-color: transparent;
    /* border: 10px solid grey; */
    padding: 0px;
    border-radius: 10px;
`

export const QuizTitle = styled.div`
    width: 100%;
    height: 15vh;
    /* background: yellow; */
    display: flex;
    `

export const QuizCounter = styled.div`
    width: 20%;
    background: var(--cl-primary-darkblue);
    /* background: linear-gradient(rgb(255, 100, 220), rgb(39, 119, 224)); */
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    font-weight: 600;
    border-radius: 10px 0px 0px 0px;

    small {
        font-size: 10px;
        margin-top:35px;
    }
    `
export const QuizContent = styled.div`
    width: 80%;
    background: var(--cl-primary-darkblue);
    color: white;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-weight: 600;
    font-size: 20px;
    padding: 10px;
    border-radius: 0px 10px 0px 0px;
`
export const QuizAnswerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
    margin: 10px auto;

    .answer{
        width: 150px;
        padding: 10px;
        margin: 30px;
        text-align: center;
        background: lightgrey;
        color: black;
        border: none;
        border-radius: 15px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .answer:hover {
        background: var(--cl-primary-darkblue);
        cursor: pointer;
        color: white;
        font-weight: 600;
    }
    .answer.correct {
        background: rgb(126, 255, 126);
    }
    .answer.wrong {
        background: rgb(250, 76, 111);
    }
    .answer.correct:hover,
    .answer.wrong:hover {
        color: black;
        font-weight: 100;
    }
`

export const QuizExplanation = styled.div`
    width: 100%;
    height: 25vh;
    padding: 10px 30px;
    border-radius: 0px 0px 10px  10px;
    background: var(--cl-primary-lightgrey);
    margin-top: 10px;
    margin-bottom: 1rem;
    .title {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: 600;
        margin: auto;
    }
    .line{
        border-bottom: 1px solid black;
        margin: 2px;
    }
    .content{
        color: rgb(119, 118, 118);
        padding: 10px 20px;
    }
    .next-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    @media (max-width: 750px){
        .content{
            height: 40px;
        }
    }
`