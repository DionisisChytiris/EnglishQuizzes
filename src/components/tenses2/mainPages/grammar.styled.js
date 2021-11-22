import styled from 'styled-components'


export const Tenses2Grammar = styled.div`
    background: white;
    height: 100%;
    /* height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Tenses2Side = styled.div`
    /* margin-top: 200px; */
`

export const Tenses2Main = styled.div`
   background-color:  white;
    height: 100vh;
    height: 100%;
    width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    `

export const Tenses2Box1 = styled.div`
    height: 100vh;
    background: green;
    width: 800px;

    .title{
        text-align: center;
        padding: 20px;
        font-size: clamp(1.9rem, 2.5vw, 3rem);
        font-weight: 600;
    }
    
    h1{
        font-size: clamp(1.4rem, 1.6vw, 1.7rem);
        padding: 20px;
    }

    @media (max-width: 1100px){
        width: 85%;
    }
`