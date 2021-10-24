import React, { useState } from 'react'

import { BsCheck, BsX} from 'react-icons/bs'
import openclosedata1 from '../data/openclosedata1'

const OpenClose_1 = () => {
    const [name, setName] = useState('')
    const [tick, setTick] = useState(false)
    
    const handleInput = event => {
        setName(event.target.value)
    }

    const checkAnswer = () => {
        if (setName === openclosedata1.correct) {
            // alert('Well done!!! Keep practising...')
            setTick(true)
        } else {
            // alert("Try again. Don't give up")
            setTick(true)
        }
    }
    
    return (
        <>
        <div className='trivia-openCloze'>
            {openclosedata1.map((a) => {
                const { id, question1, question2, correct} = a
                
                return (
                    <>
                        <div className='open-close' >
                            <div>{question1}</div>
                            <input className='open-input' onChange={handleInput} />
                            <div className={ tick ? 'active' : 'close'} key={id}>
                                { name === correct ? (<div className='green'><BsCheck/></div>): (<div className='red'><BsX/></div>)}
                            </div>
                            <div>{question2}</div>
                        </div>
                    </>
                )
            })}
            <button onClick={checkAnswer} >Check</button>
        </div>    
        </>    
    )
}

export default OpenClose_1

