import  {useState, useEffect} from 'react'

const Timer = ({setShowScore, currentQuestion}) => {
    const [timer, setTimer] = useState(15)

    useEffect(() => {
        if(timer === 0 ) return setShowScore(true)
        const interval = setInterval(() => {
            setTimer((prev)=> prev - 1)
        }, 1000)
        return ()=> clearInterval(interval)
    },[setShowScore, timer])

    useEffect(() => {
        setTimer(15)
    },[currentQuestion])

    return timer
}

export default Timer
