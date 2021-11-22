import styled from 'styled-components'

export const Verbs_to_ingGrammar = styled.div`
    background: white;
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`
export const Verbs_to_ingSide = styled.div`
    /* margin-top: 200px; */
`
export const Verbs_to_ingMain = styled.div`
    background-color:  white;
    height: 100vh;
    height: 100%;
    width: 900px;
    padding-top: 30px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Verbs_to_ing1 = styled.div`
    height: 100%;
    width: 800px;

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
        background-color: #f5f5f5;
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

export const QuizzesButton = styled.div`   
    .passive-button {
        width: 250px;
        height: 80px;
        background: var(--cl-primary-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        color: white;
        font-weight: 600;
        margin: 50px auto 80px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .passive-button:hover {
        background: #045370;
    }
`
export const SameMeaning = styled.div`
    padding: 20px;
    margin-right: 20px;
    /* font-size: clamp(1.1rem, 1.3vw, 1.3rem); */
    font-size: var(--section-text);
    background-color: #f5f5f5;
    
    p{
        /* font-size: clamp(1.1rem, 1.3vw, 1.3rem); */
        font-size: var(--section-text);
        padding: 10px;
    }
    .verbs-row {
        padding: 20px 0px;
        font-weight: 600;
        width: 95%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }
    h3{
        font-size: clamp(0.8rem, 1vw, 1rem);
        padding: 0px 0px 0px 30px;
        color: var(--cl-primary-darkblue);       
    }
    h4{
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        padding: 0px 0px 20px 30px;
        color: var(--cl-primary-darkblue);
    }
    italic{
        font-style: italic;
        color: grey;
        font-weight: 600;
    }
    @media (max-width: 700px){
        .verbs-row{
            flex-direction: column;
            padding-left: 40px;
        }
        h4{
            padding: 0px 0px 20px 30px;
        }
    }
`
export const DifferentMeaning = styled.div`
    padding: 20px;
    margin-right: 20px;
    /* font-size: clamp(1.1rem, 1.3vw, 1.3rem); */
    font-size: var(--section-text);
    background-color: #f5f5f5;
    
    p{
        /* font-size: clamp(1.1rem, 1.3vw, 1.3rem); */
        font-size: var(--section-text);
        padding: 10px;
    }
    .verbs-row {
        padding: 20px 30px 20px 10px;
        font-weight: 600;
        width: 85%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }
    @media (max-width: 700px){
        .verbs-row{
            flex-direction: column;
            padding-left: 40px;
        }
    }
`
export const ContainerExample = styled.div`
    width: 90%;
    /* height: 30vh; */
    margin: auto;
    /* background-color: yellow; */
    border: 0.01rem solid lightgrey;
`
export const ContainerFlex = styled.div`
    display: flex;
    flex-direction: row;
    .box1{
        width: 22%;
        padding: 10% 3%;
        border: 0.01rem solid lightgrey;
        /* background-color: red; */
        color: var(--cl-primary-darkblue);
        font-weight: 600;
    }
    .box2{
        width: 78%;
        padding: 10px 0px;
        border: 0.01rem solid lightgrey;
        /* background-color: yellow; */
    }
    .box2 h5{
        color: var(--cl-primary-darkblue);
        padding: 10px 30px 0px 30px;
        font-weight: 200;
        /* margin-bottom: -3px; */
    }
    .box2 p{
        /* font-weight: 600; */
        font-size: clamp(1.05rem, 1.2vw, 1.2rem);
        padding: 0px 15px 15px 35px;
        /* color: var(--cl-primary-red); */
        
    }
    color{
        color: var(--cl-primary-blue);
        font-weight: 600;
    }
    .line{
        background-color: lightgrey;
        height: 1px;
        width: 100%;
    }
`