import styled from 'styled-components'

export const ArticlesGrammarContainer = styled.div`
    background: white;
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`

export const ArticlesSide = styled.div`
    /* margin-top: 200px; */
`

export const ArticlesMain = styled.div`
    background-color:  white;
    height: 100vh;
    height: 100%;
    width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    h1{
        margin-bottom: 20px; 
    }
    /* @media (max-width: 850px){
        width: 100%;
    } */
    `

export const ArticlesContainer = styled.div`
    /* width: 700px; */
    width: 80%;
    height: 100%;
    /* height: 1680px; */
    background-color: #e7e6e6;
    padding: 20px;
    margin-bottom: 20px;
    h1{
        font-size: var(--section-title);
    }
    .exemption{
        font-size: 18px;
        padding-top: 15px;
        font-weight: 600;
        margin-bottom: -10px;
    }
    .green{
        color: green;
        padding-left: 10px;
        font-size: 14px;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    @media (max-width: 850px){
        width: 80%;
        h1{
            text-align: center;
        }
    }
    @media (max-width: 550px){
        width: 70%;
    }
    @media (max-width: 420px){
        width: 60%;
    }
`
export const InsideContainer1 = styled.div`
    width: 100%;
    height: 720px;
    margin: auto;
    margin-top: 20px;
    padding: 15px;
    background-color: white;
    p{
        font-size: 18px;
        padding-top: 15px;
    }   
    li{
        font-weight: 600;
        font-size: 17px;
        margin: 10px 20px 5px 20px;
    }
    .example{
        width: 90%;
        background-color: #045370;
        color: white;
        font-size: 16px;
        margin-left: 20px;
        padding: 10px  20px;
        margin-bottom: 20px;
    }
    @media (max-width: 550px){
        height: 950px;
        .example, li{
            width: 100%;
            margin: auto;
        }
        li{
            padding: 20px 0px 5px 0px ;
        }
    }
`
export const InsideContainer2 = styled.div`
    width: 100%;
    height: 520px;
    margin: auto;
    margin-top: 20px;
    padding: 15px;
    background-color: white;
    p{
        font-size: 18px;
        padding-top: 15px;
    }   
    li{
        font-weight: 600;
        font-size: 17px;
        margin: 10px 20px 5px 20px;
    }
    .example{
        width: 90%;
        background-color: #045370;
        color: white;
        font-size: 16px;
        margin-left: 20px;
        padding: 10px  20px;
        margin-bottom: 20px;
    }
    @media (max-width: 550px){
        height: 950px;
        .example, li{
            width: 100%;
            margin: auto;
        }
        li{
            padding: 20px 0px 5px 0px ;
        }
    }
`
export const ExemptionBox = styled.div`
    margin-top: 25px;
    .exceptions_container1 {
    display: flex;
    flex-direction: row;
    width: 650px;
    height: 100%;
    /* background-color: #33b5e5; */
    background-color: var(--cl-primary-blue);
    margin-left: 5px;
    border-bottom: 0.6rem solid rgb(68, 247, 143);
    }
    .exceptions_container2 {
    display: flex;
    flex-direction: row;
    width: 650px;
    height: 100%;
    background-color: var(--cl-primary-blue);
    margin-left: 5px;
    border-bottom: 0.6rem solid rgb(247, 68, 68);
    }

    .exceptions_title1 {
    width: 80px;
    height: 415px;
    background-color: rgb(68, 247, 143);
    /* border-bottom: 0.1rem solid #fff; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    }
    .exceptions_title2 {
    width: 80px;
    height: 294px;
    background-color: rgb(247, 68, 68);
    /* border-bottom: 0.1rem solid #fff; */
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    }

    .exceptions_content_column {
    display: flex;
    flex-direction: column;
    }

    .exceptions_content {
    display: flex;
    flex-direction: row;
    color: #fff;
    font-weight: 600;
    height: 100%;
    border-bottom: 0.1rem solid #fff;
    font-size: 16px;
    /* @media (max-width: 550px){
        flex-direction: column;
    } */
    }

    .exceptions_content .rule {
    padding: 5px 10px 10px 30px;
    width: 250px;
    display: flex;
    align-items: center;
    line-height: 1.1;
    }

    .exceptions_content .example {
    border-left: 0.2rem solid #fff;
    width: 320px;
    height: 100%;
    padding: 5px 10px 10px 30px;
    }
`

