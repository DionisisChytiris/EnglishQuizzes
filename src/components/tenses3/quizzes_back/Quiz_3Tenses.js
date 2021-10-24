import React, { useState } from 'react'
import useSound from 'use-sound'
import quiz3data from "../../tenses3/data/quiz3data"
import tetris from '../../../sound/tetris.mp3'
import {BsFillPlayFill, BsFillStopFill, BsCheck, BsX} from 'react-icons/bs'

const Quiz_3Tenses = () => {
    const [name, setName] = useState('')
    const [tick, setTick] = useState(false)
    
    const [play, { stop }] = useSound(tetris)

    const handleInput = event => {
        setName(event.target.value)
    }

    const checkAnswer = () => {
        if (name === quiz3data.correct) {
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
            <div className='trivia-play'>
                <button onClick={()=> play()}><BsFillPlayFill/></button>       
                <button onClick={() => stop()}><BsFillStopFill/></button>                  
            </div>
            {quiz3data.map((a) => {
                const { id, question1, question2, correct } = a
                
                // const checkAnswer = () => {
                //     if (name === correct) {
                //         // alert('Well done!!! Keep practising...')
                //         setTick(true)
                //     } else {
                //         // alert("Try again. Don't give up")
                //         setTick(true)
                //     }
                // }
                
                return (
                    <>
                        <div className='open-close' key={id}>
                            <div>{question1}</div>
                            <input className='open-input' onChange={handleInput} />
                            <div className={ tick ? 'active' : 'close'}>
                                { name === correct ? (<div className='green'><BsCheck/></div>): (<div className='red'><BsX/></div>)}
                            </div>
                            <div>{question2}</div>
                        {/* <button onClick={checkAnswer}>Check</button> */}
                        </div>
                    </>
                )
            })}
            <button onClick={checkAnswer} >Check</button>
        </div>    
        </>    
    )
}

export default Quiz_3Tenses
