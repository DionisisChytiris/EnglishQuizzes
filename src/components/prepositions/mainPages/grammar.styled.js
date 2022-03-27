import styled from 'styled-components'

export const PrepositionGrammar = styled.div`
    background: white;
    height: 100%;
    /* height: 100vh; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
`

export const PrepositionSide = styled.div`
    /* margin-top: -1000px; */
`

export const PrepositionsMain = styled.div`
    background-color: white;
    height: 100vh;
    height: 100%;
    width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const PrepositionsContext =styled.div`
    height: 100%;
    width: 800px;
    .title{
        padding: 20px;
        margin-bottom: 30px;
        /* font-size: clamp(2.2rem, 2.5vw, 2.8rem); */
        font-size: var(--main-title);
        font-weight: 600;
    }
    h1{
        font-size: var(--section-title);
        padding: 20px;
        background: var(--cl-primary-lightgrey);
        margin: 40px 20px 20px 20px;
    }
    p{
        font-size: var(--main-text);
        padding: 20px;
    }
    .short-example{
        padding-left: 50px;
        color: var(--cl-primary-darkblue)
    }
    .examples{
        padding: 20px;
    }
    ul{
        padding: 20px 0px 20px 150px;
        /* margin-right: 20px; */
        font-size: clamp(1.1rem, 1.3vw, 1.3rem);
        background-color: var(--cl-secondary-lightgrey);
    }
    li{
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    @media (max-width: 1100px){
        width: 90%;
    }
`