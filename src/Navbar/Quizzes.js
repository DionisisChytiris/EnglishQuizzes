import React from 'react'
// import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { quizzes_links } from '../data_links'
// import photo from '../img/quiz.jpg'

// const QuizzesImage = styled.div`
//      background-image: url(${photo});
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//     height: 60vh;
//     width: 100%;
// `

const Quizzes = () => {
    return (
        <>
            <div className="navLine"></div>
            {/* <QuizzesImage></QuizzesImage> */}
            <div className="quizzes_page">
                <h1>Grammar Quizzes</h1>
                <div className="quizzes_boxes">
                    {quizzes_links.map((a) => {
                        const { id, url, text, info1, info2, info3, info4, info5, info6, info7, info8, info9, } = a
                        return (
                            <>
                            <Link to={url} className='quizzes_box' key={id}>
                                <div className="quizzes_box_inner">
                                    <div className="quizzes_box_front" key={IDBDatabase}>{text}</div>
                                        <div className="quizzes_box_back">
                                            <div className="blur">
                                                <div style={{
                                                    height: '100px',
                                                    width: '100%',
                                                    margin: 'auto', 
                                                    overflow: 'scroll',
                                                    overflowX: 'hidden',
                                                    overflowY: 'scroll',
                                                    // padding: '0px 0px 0px 20px'
                                                }}>
                                                    <p>{info1}</p>
                                                    <p>{info2}</p>
                                                    <p>{info3}</p>
                                                    <p>{info4}</p>
                                                    <p>{info5}</p>
                                                    <p>{info6}</p>
                                                    <p>{info7}</p>
                                                    <p>{info8}</p>
                                                    <p>{info9}</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </Link>                                    
                            
                            </>    
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Quizzes
