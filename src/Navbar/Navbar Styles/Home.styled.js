import styled from 'styled-components'
import photo from '../../img/colors.jpg'

export const HomeImageTest = styled.div`
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 60vh;
    width: 100%;
`

export const HomeSection = styled.section`
    height: 100%;
    width: 100%;
    overflow: hidden;
`

export const Home1 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0px 140px 0px;

    h1 {
        width: 80%;
        padding: 30px 0px 50px 0px;
        text-align: center;
        font-size: clamp(2.2rem, 3vw, 3rem);
        font-weight: 600;
        color: var(--cl-primary-blue);
        padding-top: 50px;
    }
    p{
        width: 60%;
        font-size: clamp(1.1rem, 1.4vw, 1.5rem);
        font-family: 'Georgia', serif;
        line-height: 1.8;
        text-align: justify;
    }
    .fade-in {
        animation: fade-in 3s;
    }
    @keyframes fade-in {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @media (max-width: 950px){
        padding-bottom: 100px;
        p{
            width: 80%
        }
    }
    .form{
        display: flex;
        flex-direction: row;
        margin-top: -15px;
        margin-left: 60%;
    }
    .help{
        /* width: 30px; */
        height: 20px;
        background-color: white;
        margin-left: 10px;
        margin-top: 3%;
        padding: 5px 7px;
        border-radius: 50%;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .help:hover{
        background-color: orange;
        color: white
    }
    input{
        border: none;
        padding: 10px;
    }
    .show-userName{
        display: flex;
        flex-direction: row;
    }
    .show-flex-row{
        /* position: absolute; */
        display: flex;
        flex-direction: row;
    }
    .show-greeting{
        font-size: 40px;
        font-weight: 600;
        margin-right: 20px;
        margin-top: 20px;
    }
    .show-name{
        margin-top: 20px;
        position: relative;
        z-index: 100;
        font-size: 40px;
        font-weight: 600;
    }
    .delete-background{
        width: 350px;
        height: 100px;
        background: #e7e6e6;
        /* background: #ccc; */
        position: absolute;
        margin-left: 30%;
        margin-top: -37px;
    }
    .delete-background1{
        width: 300px;
        height: 100px;
        background: #e7e6e6;
        position: absolute;
        margin-left: 25%;
        margin-top: -67px;
    }
    .delete-userName{
        position: absolute;
        margin-left: 30%;
        margin-top: 0px;
        width: 100px;
        border: none;
        background-color: yellow;
        border-radius: 10px;
    }
    .delete-userName1{
        position: absolute;
        margin-left: 30%;
        margin-top: 0px;
        width: 100px;
        border: none;
        background-color: yellow;
        border-radius: 10px;
    }
    .delete-userName:hover,
    .delete-userName1:hover{
        background-color: orange;
        color: white
    }
    @media (max-width: 920px){
        .form{
            margin-left: 40%;
        }
        .delete-background{
            margin: -40px 0px 0px 140px; 
        }
        .delete-background1{
            margin: -80px 0px 0px 150px; 
        }
        .delete-userName{
            margin-left: 60%;
        }
        .delete-userName1{
            margin-left: 80%;
        }
    }
    @media (max-width: 850px){
        .delete-userName{
            margin-left: 30%;
        }
        .delete-userName1{
            margin-left: 50%;
        }
    }
    @media (max-width: 750px){
        .delete-userName{
            margin-left: 20%;
        }
    }
    @media (max-width: 620px){
        .form{
            align-items: center;
            justify-content: center;
            margin-left: 0%;
        }
        .help{
            margin-top: 1%;
        }
        .delete-background1{
            width: 100px;
            margin: -80px 0px 0px 70px; 
        }
        .delete-background{
            width: 300px;
            height: 50px;
            margin: -40px 0px 0px -20px; 
        }
        /* .delete-userName{
            margin-left: 80%;
        } */
        .delete-userName1{
            margin-left: 60%;
        }
    }
    
    `

export const Home2 = styled.div`
    height: 100%;
    /* padding: 10px 0px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    padding: 30px 0px;

    h1 {
        width: 80%;
        padding: 30px 0px 30px 0px;
        text-align: center;
        font-size: clamp(2rem, 2.8vw, 2.8rem);
        font-weight: 600;
        color: var(--cl-primary-blue);
    }
    p{
        width: 50%;
        font-size: clamp(1.1rem, 1.2vw, 1.4rem);
        font-family: 'Georgia', serif;
        /* font-family: "Times New Roman", Times, serif; */
        line-height: 1.8;
        text-align: center;
        padding-bottom: 50px;
    }

    @media (max-width: 860px){
        /* height: 60vh; */
        p{
            width: 70%
        }
    }
    @media (max-width: 560px){
        /* height: 60vh; */
        p{
            width: 80%
        }
    }
    `
export const Home3 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: var(--cl-primary-blue); */
    background-color: white;
    .vertical-line{
        position: relative;
        padding: 0px 8%;
        border-left: 0.2rem solid var(--cl-primary-blue);
    }
    .dot{
        position: absolute;
        left: -10px;
        color: var(--cl-primary-blue)
    }
    .a{
        top: 18%;
    }
    .b{
        top: 50%;
    }
    .c{
        top: 81%;
    }
    @media (max-width: 950px){
        .vertical-line{
            padding: 0px 6%;
        }
    }  
`
export const HomePart2 = styled.div`
    padding-bottom: 80px;
    .home-box{
        transition: 3s;
    }
    .box-container {
        margin: 200px 0px 200px 10px;
    }
    .box {
        width: 250px;
        height: 250px;
        background: grey;
        /* margin: 200px auto */
    }
    `
export const HomeButtonTitle = styled.div`
    margin: 60px auto;
    width : 300px;
    height: 150px;
    background: linear-gradient(to bottom right, #00003A 5%,#0707A9 );
    color: white;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;;

    @media (max-width: 750px){
        width : 200px;
        height: 100px;
    }  
`
export const HomeGrammar = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    background: lightgrey;
    padding: 20px;
    border-radius: 40px;

    h1 {
        width: 100%;
        padding: 30px 0px 30px 0px;
        text-align: center;
        font-size: clamp(1.6rem, 2.2vw, 2.2rem);
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    p{
        width: 80%;
        font-size: clamp(1.1rem, 1.3vw, 1.3em);
        /* font-family: 'Georgia', serif; */
        /* font-family: "Times New Roman", Times, serif; */
        line-height: 1.5;
        /* text-align: justify; */
        /* padding-bottom: 50px; */

        @media (max-width: 580px){
            width : 350px;
        }  
        @media (max-width: 450px){
            width : 300px;
        }  
    }
    .home-button{
        position: relative;
        right: -20%;
        color: white;
        margin: 30px;
        width: 180px;
        padding-bottom: 5px;
        border-bottom: 0.16rem solid var(--cl-primary-darkblue);
        /* border-radius: 8px; */
    }
    .a{
        width: 120px;
    }
    .b{
        width: 80px;
    }
    .button-flex{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .button-icon{
        font-size: 15px;
        padding: 5px 5px 0px 0px;
        color: var(--cl-primary-darkblue)
    }
    .button-title{
        font-size: 1.2rem;
        color: green;
    }
    .button-title:hover{
        color: white;
    }
    @media (max-width: 1350px){
        /* width : 700px; */
        width : 600px;
    } 
    /* @media (max-width: 950px){
        width : 600px;
    }  */
    @media (max-width: 750px){
        width : 450px;
    } 
    @media (max-width: 550px){
        width : 380px;
    } 

`
export const ImageSection = styled.div`
    /* width: 100%; */
    height: 480px;
    /* height: 45vh; */
    margin-bottom: 5%;
    position: relative;
    /* transition: left 2s; */
    /* border: 1rem solid yellow; */
    
    img{
        width: 650px;
        height: 450px;
    }
    .title{
       width: 50%;
       /* background-color: yellow; */
       margin-top: -20%;
       margin-left: 26%;
       color: white;
       text-align: center;
       font-size: 20px;
       font-weight: 600;
    }
    /* .fade {
        animation: fade-in 1s;
    } */
    .fade1 {
        animation: fade-in 2s;
    }
    /* @keyframes fade {
        0% {opacity:0.5;}
        100% {opacity:1;}
    } */
    @keyframes fade1 {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @media (max-height: 650px){
       img{
        width: 500px;
        height: 330px;
        }
    }  
    /* @media (max-height: 850px){
       img{
        width: 500px;
        height: 330px;
        }
    }   */
    @media (max-width: 750px){
        height: 330px;
        img{
            width: 500px;
            height: 300px;
        }
    }  
    @media (max-width: 550px){
        height: 280px;
       img{
        width: 400px;
        height: 250px;
        }
    }  
`