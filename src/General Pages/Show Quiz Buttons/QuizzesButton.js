import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Slide from 'react-reveal/Slide'

// Quizzes button slide from the left

const Container = styled.div`
    width: 300px;
    overflow: hidden;
    margin: auto;
`

const QuizzesButton = styled.div`
    .quiz-button {
        width: 250px;
        height: 80px;
        background: var(--cl-primary-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        color: white;
        font-weight: 600;
        margin: 50px auto 80px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .quiz-button:hover {
        background: #045370;
    }
`
export const QuizzesButtonGrammar = ({text, page}) => {
    return (
        <Container>
            <Slide left>
                <QuizzesButton>
                    <Link className='quiz-button' to={page}> {text}</Link>
                </QuizzesButton>
            </Slide>
        </Container>
    )
};
