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
export const TensesTest2 = styled.div`
    height: 100%;
    width: 800px;
    color: black;

    .title{
        padding: 20px;
        margin-bottom: 30px;
        /* font-size: clamp(2.2rem, 2.5vw, 2.8rem); */
        font-size: var(--main-title);
        font-weight: 600;
    }
    p {
        /* font-size: clamp(1.3rem, 1.5vw, 1.5rem); */
        font-size: var(--main-text);
        padding: 20px;
    }
    h1{
        /* font-size: clamp(1.6rem, 1.8vw, 2rem); */
        font-size: var(--section-title);
        padding: 20px;
        background: var(--cl-primary-lightgrey);
        margin: 40px 20px 20px 20px;
    }
    .gerund{
        padding-left: 20px;
    }
    italic{
        font-style: italic;
    }
    green{
        color: green;
    }
    click{
        color: var(--cl-primary-blue);
        cursor: pointer;
    }
    click:hover{
        color: var(--cl-primary-darkblue);
    }
    ul{
        padding: 20px 0px 20px 150px;
        margin-right: 20px;
        font-size: clamp(1.1rem, 1.3vw, 1.3rem);
        background-color: var(--cl-secondary-lightgrey);
    }
    li{
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    .example{
        margin-bottom: 10px;
        padding-left: 5px;
        font-size: clamp(1.05rem, 1.2vw, 1.2rem);
    }
    .example1{
        font-size: clamp(1.05rem, 1.2vw, 1.2rem);
        margin-bottom: 10px;
        padding-left: 5px;
        margin-top: -8px;
    }
    .example_left{
        font-size: clamp(1rem, 1.1vw, 1.1rem);
        margin-left: 30px;
    }
    .change{
        font-size: clamp(1.3rem, 1.4vw, 1.5rem);
        font-weight: 600;
        color: var(--cl-primary-darkblue);
        padding: 20px 10px 10px 10px;
    }
    @media (max-width: 1100px){
        width: 90%;
    }
    @media (max-width: 700px){
        width: 90%;
        ul {
            padding-left: 40px;
        }
    }
`
