import React, { useState } from 'react'
// import quiz3data from "../../../components/tenses1/data/quiz3data"
import {BsCheck, BsX} from 'react-icons/bs'

const OpenClose_3 = () => {
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [name3, setName3] = useState('')
    const [name4, setName4] = useState('')
    const [name5, setName5] = useState('')
    const [name6, setName6] = useState('')
    const [name7, setName7] = useState('')
    const [name8, setName8] = useState('')
    const [tick, setTick] = useState(false)
    // const [tick1, setTick1] = useState(false)
    // const [tick2, setTick2] = useState(false)
    // const [tick3, setTick3] = useState(false)
    // const [tick4, setTick4] = useState(false)
    // const [tick5, setTick5] = useState(false)
    // const [tick6, setTick6] = useState(false)
    // const [tick7, setTick7] = useState(false)
    // const [tick8, setTick8] = useState(false)
    
    const green = (<div className='green'><BsCheck /></div>)
    const red = (<div className='red'><BsX /></div>)

    const handleInput1 = event => {
        setName1(event.target.value)
    }
    const handleInput2 = event => {
        setName2(event.target.value)
    }
    const handleInput3 = event => {
        setName3(event.target.value)
    }
    const handleInput4 = event => {
        setName4(event.target.value)
    }
    const handleInput5 = event => {
        setName5(event.target.value)
    }
    const handleInput6 = event => {
        setName6(event.target.value)
    }
    const handleInput7 = event => {
        setName7(event.target.value)
    }
    const handleInput8 = event => {
        setName8(event.target.value)
    }

    // const checkAnswer1 = () => {
    //     setTick1(true)
    // }
    // const checkAnswer2 = () => {
    //     setTick2(true)
    // }
    // const checkAnswer3 = () => {      
    //     setTick3(true)
    // }
    // const checkAnswer4 = () => {
    //     setTick4(true)
    // }
    // const checkAnswer5 = () => {
    //     setTick5(true)
    // }
    // const checkAnswer6 = () => {
    //     setTick6(true)
    // }
    // const checkAnswer7 = () => {
    //     setTick7(true)
    // }
    // const checkAnswer8 = () => {
    //     setTick8(true)
    // }

    const checkAnswer = () => {
        setTick(true)
    }
    
    return (
        <>
            <div className='trivia-openCloze1'>
                <h5>History of the cats 2</h5>    
                <div className='open-close'>
                    <div>Cats of all kinds are present in the legends, religion, mythology, and history of 
                        <span> 
                         <input className='open-input' onChange={handleInput1}/>
                        <p className={ tick ? 'active' : 'close'}>
                            {name1 === 'many' ? green : red}
                        </p>
                        </span>
                     <span className='num'>(1)</span> different cultures. Cave paintings created by early humans display different types of wild cats 
                    <span>
                        <input className='open-input' onChange={handleInput2} />
                        <p className={ tick ? 'active' : 'close'}>
                            { name2 === 'which'? green : red}
                            {/* { name2 === 'which' || 'that'? green : red} */}
                        </p>
                    </span>
                        <span className='num'>(2)</span> are now extinct, or no longer around. Many of these great beasts saw humans as food, but were hunted by humans in return. Cats similar
                        <span>
                        <input className='open-input' onChange={handleInput3}/>
                        <p className={ tick ? 'active' : 'close'}>
                            {name3 === 'to' ? green : red}
                        </p>
                        </span><span className='num'>(3)</span> the ones kept as pets today started showing up in artwork thousands of years ago. For example, the ancient Egyptians believed cats were the sacred, or special, animal of a goddess named Bast. They believed that Bast often appeared as a cat, so many ancient Egyptians respected and honoured cats and kittens. 
                        <span>
                        <input className='open-input' onChange={handleInput4}/>
                        <p className={ tick ? 'active' : 'close'}>
                            {name4 === 'However' ? green : red}
                            {/* {name4 === 'However' || 'Nevertheless'? green : red} */}
                        </p>
                        </span><span className='num'>(4)</span> , other cultures feared cats or thought that they brought illnesses and bad luck. Today, with millions kept as pets in homes around the world, cats have become important members of many families. No one knows or sure when or 
                        <span>
                        <input className='open-input' onChange={handleInput5}/>
                        <p className={ tick ? 'active' : 'close'}>
                            {name5 === 'how' ? green : red}
                            {/* {name5 === 'how' || 'where' ? green : red} */}
                        </p>
                        </span><span className='num'>(5)</span> cats became very popular household pets. It's possible that people noticed how cats hunted mice and rats, 
                        <span>
                        <input className='open-input' onChange={handleInput6}/>
                        <p className={ tick ? 'active' : 'close'}>
                            {name6 === 'so' ? green : red}
                        </p>
                        </span><span className='num'>(6)</span> they set food and milk out to keep the cats near their homes. This helped to prevent
                        <span>
                        <input className='open-input' onChange={handleInput7}/>
                        <p className={ tick ? 'active' : 'close'}>
                            {name7 === 'too' ? green : red}
                        </p>
                        </span><span className='num'>(7)</span> many of these rodents
                        <span>
                        <input className='open-input' onChange={handleInput8}/>
                        <p className={ tick ? 'active' : 'close'}>
                            {name8 === 'from' ? green : red}
                        </p>
                        </span><span className='num'>(8)</span> coming into homes and eating people's food or spreading sickness.
                    </div>
                </div>                  
            </div>    
            {/* <button onClick={checkAnswer1}>Check 1</button>
            <button onClick={checkAnswer2}>Check 2</button>
            <button onClick={checkAnswer3}>Check 3</button>
            <button onClick={checkAnswer4}>Check 4</button>
            <button onClick={checkAnswer5}>Check 5</button>
            <button onClick={checkAnswer6}>Check 6</button>
            <button onClick={checkAnswer7}>Check 7</button>
            <button onClick={checkAnswer8}>Check 8</button> */}
            <button onClick={checkAnswer}>Check Answers</button>
            <button>
                <a href='/openClose3'>Try Again</a>
            </button>
        </>    
    )
}

export default OpenClose_3

