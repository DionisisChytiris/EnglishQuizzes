import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { TiTick, TiTimes } from "react-icons/ti";
import Slide from 'react-reveal/Slide';
import { FaSmileWink, FaRegSadTear } from "react-icons/fa";


const QuizResults = styled.div`
    /* padding-bottom: 100px; */
    h1{
        color: green;
        text-align: center;
        padding-top: 80px;
    }
    .smile{
        font-size: clamp(2.1rem, 3vw, 3.7rem);
        text-align: center;
        margin-top: 80px;
    }
    .sad{
        /* color: red; */
        text-align: center;
        margin-top: 80px;
        font-size: 50px;
    }
    .score-section{
        font-size: clamp(1.4rem, 1.6vw, 1.8rem);
        padding: 30px;
        text-align: center;
        /* background-color: yellow; */
    }
    .score-percentage{
        font-size: clamp(2.1rem, 3vw, 3.7rem);
        text-align: center;
        margin-top: 20px;
    }
    .answer-correct{
        color: rgb(126, 255, 126);
    }
    .answer-wrong{
        color: rgb(250, 76, 111);
    }
    .buttons-section{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .button{
        color: white;
        font-weight: 600 ;
        /* background: rgb(136, 159, 189); */
        cursor: pointer;
        border-radius: 15px;
        font-size: 18px;
        margin: 10px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        @media (max-width: 850px){
            font-size: 14px;
        }
    }
    .btn-correct{
        background-color: rgb(126, 255, 126);
        color: var(--cl-primary-darkblue);
    }
    .btn-wrong{
        background: rgb(136, 159, 189);
    }
    .btn-hide{
        display: none;
    }
    .button:hover {
        background-color: var(--cl-primary-darkblue);
        color: white
    }
`
const Results= styled.div`
    padding: 20px 0px ;
    margin-top: 60px;
    margin-bottom: -200px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column ;
    font-size: 16px;
    overflow: hidden ;

    .title{
        font-size: 28px;
        font-weight: 600;
        padding-bottom: 20px;
        color: white;
    }
    @media (max-width: 850px){
       .title{
           font-size: 24px;
       }
    }
`
const ResultBox = styled.div`
    width: 80%;
    height: 100%;
    padding: 20px 30px 30px 30px ;
    background: var(--cl-primary-lightgrey);
    margin: 20px auto ;
    color: black;
    border-radius: 20px;
   
    .result-title1{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
        color: green;
    }
    .result-title2{
        font-size: 16px;
        font-weight: 600;
        margin: 20px 0px 0px 0px;
        color: green;
    }
    .result-question{
        font-size: 18px;
        margin: 10px 0px 20px 0px ;
        color: var(--cl-primary-darkblue);
    }
    .answer-box{
        /* margin-left:  -25px; */
        background-color: white;
        width: 100px;
        margin: auto;
        padding-right: 25px;
        margin-top: 10px;
        border-radius: 10px;
    }
    .answer-correct{
        color: rgb(126, 255, 126);
    }
    .answer-wrong{
        color: rgb(250, 76, 111);
    }
    .align{
        margin: -20px -50px 0px 0px;
        padding-top: 4px;
    }
    .result-explanation{
        font-size: 13px;
        padding: 5px;
        line-height: 1.4;
        color: grey
    }
`
const QuizResultsSection = (props) => {
    const [results, setResults] = useState(false)
    const score = props.score > props.data.length/2
    const [userName, setUserName] = useState(()=>{
        const local = localStorage.getItem('userName')
        return local ? JSON.parse(local) : [] 
    })

    useEffect(()=>{
        const json = localStorage.getItem('userName')
        const savedNotes = JSON.parse(json)
        if(savedNotes){
            setUserName(savedNotes)
        }
    }, [])

  return (
    <QuizResults>           
        {score ? ( 
            <div className={`smile ${score ? 'answer-correct' : 'answer-wrong'}`}>
                <div style={{paddingBottom: '30px'}}>
                    <div>Congratulations</div>
                    <div>
                        {userName.map((note)=> {
                            const {id, text} =note
                            return (
                                <div className='text' key={id}>
                                    <div>{text} !!!</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <FaSmileWink/>
            </div> 
                  
        ) : (
            <div className={`sad ${score ? 'answer-correct' : 'answer-wrong'}`}>
                <div style={{paddingBottom: '30px'}}>
                    <div>Try Again</div>
                        <div>
                        {userName.map((note)=> {
                            const {id, text} =note
                            return (
                                <div className='text' key={id}>
                                    <div>{text} !</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <FaRegSadTear/>
            </div>
        )}
        <div className={`score-percentage ${score ? 'answer-correct' : 'answer-wrong'}`}>{(props.score * 100)/ props.data.length}%</div>
        <div className={`score-section ${score ? 'answer-correct' : 'answer-wrong'}`}>Your score is {props.score} out of {props.data.length}!!!</div>
        <div className='buttons-section'>
            <a href={props.source1} className={`button ${score ? 'btn-hide' : 'btn-wrong'}`}>Try Again</a>
            <div className={`button ${score ? 'btn-correct' : 'btn-wrong'}`} onClick={()=>{setResults(!results)}}>Answers</div>
            <a href={props.source2} className={`button ${score ? 'btn-correct' : 'btn-hide'}`}>Next Quiz</a>
        </div>
        {
            results &&
                <Results>
                    <div className='title'>Check the results</div>
                        {props.data.map((a)=> (
                            <Slide right>
                                <ResultBox>
                                    <div className='result-title1'>Question {a.id}</div>
                                    <div className='result-question'>{a.question}</div>
                                    <div>{a.answersList.map((c)=><div className={`answer-box ${c.isCorrect ? 'answer-correct' : 'answer-wrong'} `}>{c.answer}
                                    <div className='align'>{c.isCorrect ? <TiTick/> : <TiTimes/>}</div></div>)}</div>
                                    <div className='result-title2'>Explanation</div>
                                    <div className='result-explanation'>{a.help}</div>
                                </ResultBox>
                            </Slide>
                        )
                        )}  
                </Results>
        }
    </QuizResults>
  )
}

export default QuizResultsSection