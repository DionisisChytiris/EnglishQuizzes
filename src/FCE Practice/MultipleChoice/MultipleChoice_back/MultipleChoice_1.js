import React from 'react'
// import {BsCheck, BsX} from 'react-icons/bs'

const MultipleChoice_1 = () => {
    // const [name1, setName1] = useState('')
    // const [name2, setName2] = useState('')
    // const [name3, setName3] = useState('')
    // const [name4, setName4] = useState('')
    // const [name5, setName5] = useState('')
    // const [name6, setName6] = useState('')
    // const [name7, setName7] = useState('')
    // const [name8, setName8] = useState('')
    // const [tick, setTick] = useState(false)
    
    // const green = (<div className='green'><BsCheck /></div>)
    // const red = (<div className='red'><BsX /></div>)

    // const handleInput1 = event => {
    //     setName1(event.target.value)
    // }
    // const handleInput2 = event => {
    //     setName2(event.target.value)
    // }
    // const handleInput3 = event => {
    //     setName3(event.target.value)
    // }
    // const handleInput4 = event => {
    //     setName4(event.target.value)
    // }
    // const handleInput5 = event => {
    //     setName5(event.target.value)
    // }
    // const handleInput6 = event => {
    //     setName6(event.target.value)
    // }
    // const handleInput7 = event => {
    //     setName7(event.target.value)
    // }
    // const handleInput8 = event => {
    //     setName8(event.target.value)
    // }

    // const checkAnswer = () => {
    //     setTick(true)
    // }
    
    return (
        <>
            <div className='trivia-openCloze2'>
                <div className="wordFormation_main">
                    <h5>Studying black bears</h5>    
                    <div className='open-close'>
                        After years studying North America's black bears in the (0) ..... way, wildlife biologist Luke Robertson felt no closer to understanding the creatures. He realised that he had to (1) ...... their trust. Abandoning scientific detachment, he took the daring step of forming relationships with the animals, bringing them food to gain their acceptance.
                        <br></br><br></br>
                        The (2) ..... this has given him into their behaviour has allowed him to dispel certain myths about bears. (3) ..... to popular belief, he contends that bears do not (4) ..... as much for fruit as previously supposed. He also (5) ..... claims that they are ferocious. He says that people should not be (6) ..... by behaviour such as swatting paws on the ground, as this is a defensive, rather than an aggressive, act.
                        <br></br><br></br>
                        However, Robertson is no sentimentalist. After devoting years of his life to the bears, he is under no (7) ..... about their feelings for him. It is clear that their interest in him does not (8) ..... beyond the food he brings.
                        {/* <div>Garlic, a member of the Liliaceae family which also includes onions, is 
                            <span> 
                            <input className='open-input' onChange={handleInput1}/>
                            <p className={ tick ? 'active' : 'close'}>
                                {name1 === 'commonly' ? green : red}
                            </p>
                            </span>
                        <span className='num'>(1)</span> used in cooking all around the world. China is currently the largest
                        <span>
                            <input className='open-input' onChange={handleInput2} />
                            <p className={ tick ? 'active' : 'close'}>
                                { name2 === 'producer'? green : red}
                            </p>
                        </span>
                            <span className='num'>(2)</span> of garlic, which is particularly associated with the dishes of northern Africa and southern Europe. It is native to central Asia and has long had a history as a health-giving food, used both to prevent and cure 
                            <span>
                            <input className='open-input' onChange={handleInput3}/>
                            <p className={ tick ? 'active' : 'close'}>
                                {name3 === 'illness' ? green : red}
                            </p>
                            </span><span className='num'>(3)</span>. In Ancient Egypt, workers building the pyramids were given garlic to keep them strong, while Olympic athletes in Greece ate it to increase their resistance to infection. <br></br><br /> The forefather of  antibiotic medicine, Louis Pasteur, claimed garlic was as 
                            <span>
                            <input className='open-input' onChange={handleInput4}/>
                            <p className={ tick ? 'active' : 'close'}>
                                {name4 === 'effective' ? green : red}
                            </p>
                            </span><span className='num'>(4)</span> as penicillin in treating infections. Modern-day scientists have proved that garlic can indeed kill bacteria and even some viruses, so it can be very useful for people who have coughs and colds. In  
                            <span>
                            <input className='open-input' onChange={handleInput5}/>
                            <p className={ tick ? 'active' : 'close'}>
                                {name5 === 'addition' ? green : red}
                            </p>
                            </span><span className='num'>(5)</span>, some doctors believe that garlic can reduce blood 
                            <span>
                            <input className='open-input' onChange={handleInput6}/>
                            <p className={ tick ? 'active' : 'close'}>
                                {name6 === 'pressure' ? green : red}
                            </p>
                            </span><span className='num'>(6)</span>. <br></br><br /> The only
                            <span>
                            <input className='open-input' onChange={handleInput7}/>
                            <p className={ tick ? 'active' : 'close'}>
                                {name7 === 'disadvantage' ? green : red}
                            </p>
                            </span><span className='num'>(7)</span> to this truly amazing food is that the strong and rather 
                            <span>
                            <input className='open-input' onChange={handleInput8}/>
                            <p className={ tick ? 'active' : 'close'}>
                                {name8 === 'spicy' ? green : red}
                            </p>
                            </span><span className='num'>(8)</span> smell of garlic is not the most pleasant!
                        </div> */}
                    </div>
                </div>                  
                {/* <div className="wordFormation_side">
                    <p className='a'>COMMON</p>
                    <p className='b'>PRODUCT</p>
                    <p className='c'>ILL</p>
                    <p className='d'>EFFECT</p>
                    <p className='e'>ADD</p>
                    <p className='f'>PRESS</p>
                    <p className='g'>ADVANTAGE</p>
                    <p className='h'>SPICE</p>
                </div> */}
            </div>    
            {/* <button onClick={checkAnswer}>Check Answers</button>
            <button>
                <a href='/wordFormation1'>Try Again</a>
            </button> */}
        </>    
    )
}

export default MultipleChoice_1

