import React, {useState} from 'react';
import styled from 'styled-components'

const DelayLineTest = styled.div`
    width:300px;
    overflow: hidden;
    .delay {
        width: 250px;
        height: 3px;
        margin-top: 20px;
        background-color: var(--cl-primary-darkblue);
        animation: fade-in 2s;
    }

    @keyframes fade-in {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    .line,
    .line1 {
        width: 400px;
        height: 2px;
        background: #fff;
        /* position: relative;
        top: 0%;
        left: 0%; */
        transform: translate(-100%, 0%);
    }
  
    .line::before,
    .line1::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: green;
        animation: animate 1s linear;
    }
    @keyframes animate {
        0% {
            left: 0;
        }
  
        100% {
            left: 100%;
        }
    }
`

const DelayLine = () => {
    const [test, setTest] = useState()

    const changeBackground = () => {
        if (window.scrollY >= 600) {
            setTest(true)
        } else {
            setTest(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

   return (
    <DelayLineTest>
        <div className='delay'></div> 
        <div className='line'></div> 
        <div className={test ? 'line1' : ''}></div> 
    </DelayLineTest>
  )
};

export default DelayLine;
