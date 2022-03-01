import styled from 'styled-components'

export const QuizzesPageMain = styled.div`
    width: 1200px;
    background: rgb(253, 251, 251);
    height: 100%;
    margin: auto;
    display: flex;

    @media (max-width: 1200px){
        width: 100%;
    }
    `

export const QuizzesMain = styled.div`
    height: 75vh;
    width: 70%;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
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
       width: 95%;
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
    background: var(--cl-secondary-lightgrey);
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
    height: 70vh;
    background-color: transparent;
    /* border: 10px solid grey; */
    padding: 0px;
    border-radius: 10px;
`

export const QuizTitle = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
`

export const QuizCounter = styled.div`
    width: 20%;
    background: var(--cl-primary-lightgrey);
    /* background: linear-gradient(rgb(255, 100, 220), rgb(39, 119, 224)); */
    color: var(--cl-primary-darkblue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(2.6rem, 4vw, 4.1rem);
    font-weight: 600;
    border-radius: 10px 0px 0px 0px;
    small {
        /* font-size: 10px; */
        font-size: clamp(0.7rem, 1vw, 1.2rem);
        margin-top:32px;
        @media (max-width: 850px){
            margin-top: 24px;
        }
    }
    `
export const QuizContent = styled.div`
    width: 80%;
    background: var(--cl-primary-lightgrey);
    color: var(--cl-primary-darkblue);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-weight: 600;
    font-size: 20px;
    padding: 0px 90px;
    border-radius: 0px 10px 0px 0px;
    @media (max-width: 850px){
        padding: 0px 40px 0px 80px;
    }
    `
export const QuizTextCenter = styled.div`
    width: 100%;
    text-align: center;
    /* background: yellow; */
    margin-left: -19%;
    `

export const QuizAnswerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px auto;

    .answer{
        width: 200px;
        padding: 10px;
        margin: 30px;
        text-align: center;
        background: var(--cl-secondary-lightgrey);
        color: black;
        border: none;
        border-radius: 15px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .answer:hover {
        background: var(--cl-primary-lightgrey);
        cursor: pointer;
        /* color: white; */
        /* font-weight: 600; */
    }
    .answer.correct {
        background: var(--answer-green);
    }
    .answer.wrong {
        background: var(--answer-red);
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
    padding: 10px 30px 20px 30px;
    border-radius: 0px 0px 10px  10px;
    background: var(--cl-secondary-lightgrey);
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
        color: var(--cl-primary-darkblue);
        padding: 10px 20px;
        text-align: center;
    }
    .next-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    @media (max-width: 620px){
        height: 28vh;
    }
`

export const QuizResults = styled.div`
    h1{
        color: green;
        text-align: center;
        margin-top: 80px;
    }
    .score-section{
        padding: 30px;
        color: yellow;
    }
    .buttons-section{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .button{
        color: white;
        background: rgb(136, 159, 189);
        cursor: pointer;
        border-radius: 15px;
        font-size: 20px;
        margin: 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button:hover {
        background-color: var(--cl-primary-darkblue);
    }
    .results{
        padding-top: 40px;
        text-align: center;
        color: white
    }
`