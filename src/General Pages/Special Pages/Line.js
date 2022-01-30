import React, { useState } from 'react' 
import styled from 'styled-components'

const Linestyle = styled.div`
    .line{
        width: 30%; 
        height: 2px; 
        background-color: black;
        margin-top: 20px;
    }
`

export const Line = () => {
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
        <Linestyle>
            <div className={test ? 'line' : ''}></div>
        </Linestyle>
    )
}