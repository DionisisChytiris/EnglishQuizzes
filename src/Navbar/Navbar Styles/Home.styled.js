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
    padding: 40px 0px 80px 0px;

    h1 {
        width: 80%;
        padding: 30px 0px 60px 0px;
        text-align: center;
        font-size: clamp(2.2rem, 3vw, 4rem);
        font-weight: 600;
        color: var(--cl-primary-blue);
    }
    .fade-in {
        animation: fade-in 2s;
    }
    p{
        width: 60%;
        font-size: clamp(1.1rem, 1.5vw, 1.7rem);
        /* font-family: "Times New Roman", Times, serif; */
        font-family: 'Georgia', serif;
        /* background: linear-gradient(to right, green, black);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        line-height: 1.8;
        text-align: justify;
    }
    @keyframes fade-in {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @media (max-width: 950px){
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
        font-size: 50px;
        font-weight: 600;
        margin-right: 20px;
    }
    .show-name{
        font-size: 50px;
        font-weight: 600;
    }
    .delete-background{
        width: 350px;
        height: 100px;
        background: #e7e6e6;
        /* background: #ccc; */
        position: absolute;
        margin-left: 30%;
        margin-top: -35px;
    }
    .delete-background1{
        width: 300px;
        height: 100px;
        background: #e7e6e6;
        position: absolute;
        margin-left: 25%;
        margin-top: -65px;
    }
    .delete-userName{
        position: absolute;
        margin-left: 30%;
        margin-top: 20px;
        width: 100px;
        border: none;
        background-color: yellow;
        border-radius: 10px;
    }
    .delete-userName1{
        position: absolute;
        margin-left: 30%;
        margin-top: 50px;
        width: 100px;
        border: none;
        background-color: yellow;
        border-radius: 10px;
    }
    .delete-userName:hover{
        background-color: orange;
        color: white
    }
    @media (max-width: 920px){
        form{
            margin-left: 0;
            align-items: center;
            justify-content: center;
        }
    }
    `
export const Home3 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--cl-primary-blue);
`
export const Home2 = styled.div`
    height: 100%;
    /* padding: 10px 0px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    padding-bottom: 30px;

    h1 {
        width: 80%;
        padding: 30px 0px 30px 0px;
        text-align: center;
        font-size: clamp(2.6rem, 3vw, 3.5rem);
        font-weight: 600;
        color: var(--cl-primary-blue);
    }
    p{
        width: 70%;
        font-size: clamp(1.2rem, 1.6vw, 1.8rem);
        font-family: 'Georgia', serif;
        /* font-family: "Times New Roman", Times, serif; */
        line-height: 1.8;
        text-align: center;
        padding-bottom: 50px;
    }

    @media (max-width: 560px){
        /* height: 60vh; */
        p{
            width: 80%
        }
    }
    `
export const HomeWrapper = styled.div` 
    width: 55%;
    /* height: 80%; */
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    @media (max-width: 1370px){
        width: 80%;
        height: 45%;
    }
    @media (max-width: 1280px){
        width: 60%;
        height: 65%;
    }
    @media (max-width: 1180px){
        width: 70%;
        height: 70%;
    }
    @media (max-width: 920px){
        width: 70%;
        height: 80%
    }
    @media (max-width: 912px){
        width: 80%;
        height: 40%
    }
    @media (max-width: 850px){
        width: 60%;
        height: 80%
    }
    @media (max-width: 820px){
        width: 80%;
        height: 40%;
    }
    @media (max-width: 720px){
        width: 70%;
        height: 60%;
    }
    @media (max-width: 670px){
        width: 60%;
        height: 80%;
    }
    @media (max-width: 540px){
        width: 80%;
        height: 60%;
    }
    @media (max-width: 420px){
        width: 80%;
        height: 40%;
    }
    @media (max-width: 280px){
        width: 90%;
        height: 45%;
    }
`
export const HomeSlide = styled.div` 
    /* z-index: 1; */
    /* width: 80%;
    height: 75%; */
    /* background-color: green; */
`
export const HomeSlider = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    /* width: 60%; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: yellow; */
    `
export const HomeContent = styled.div` 
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 70%;
    /* max-width: 1100px; */
    /* width: calc(100% - 100px); */
    /* background-color: green; */
    padding: 30px;
    color: #fff;
    margin-bottom: -30%;
    text-align: center;
`

export const HomeImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const HomePart2 = styled.div`
    padding: 20px;

    .home-box{
        transition: 3s;
    }
    .box-container {
        margin: 200px auto
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
    width: 900px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto 20px;
    background: grey;
    padding: 20px;

    h1 {
        width: 100%;
        padding: 30px 0px 30px 0px;
        text-align: center;
        font-size: clamp(2rem, 2.3vw, 2.5rem);
        font-weight: 600;
        color: var(--cl-primary-darkblue);
    }
    p{
        width: 90%;
        font-size: clamp(1.2rem, 1.6vw, 1.8rem);
        font-family: 'Georgia', serif;
        /* font-family: "Times New Roman", Times, serif; */
        line-height: 1.8;
        text-align: justify;
        padding-bottom: 50px;

        @media (max-width: 650px){
            width : 400px;
        }  
        @media (max-width: 450px){
            width : 300px;
        }  
    }
    @media (max-width: 950px){
        width : 600px;
    }  

`
export const ImageSection = styled.div`
    /* width: 100%; */
    /* height: 100%; */
    height: 45vh;
    margin-bottom: 5%;
    img{
        width: 100%;
        height: 100%;
    }
    .title{
       width: 50%;
       margin-top: -20%;
       margin-left: 26%;
       color: white;
       text-align: center;
       font-size: 20px;
       font-weight: 600;
    }
    @media (max-height: 450px){
       height: 90vh;
       margin-left: 15%;
       img{
        width: 80%;
        height: 70%;
        }
    }  
`