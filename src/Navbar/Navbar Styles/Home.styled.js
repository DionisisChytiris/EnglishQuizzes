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
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: clamp(3rem, 5vw, 6rem);
        font-weight: 600;
        color: var(--cl-primary-blue);
    }
    .fade-in {
        animation: fade-in 2s;
    }

    @keyframes fade-in {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    
    p{
        margin-top: 20px;
    }
    `
export const Home2 = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    `
export const Home3 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--cl-primary-blue);
`
export const HomeWrapper = styled.div` 
    width: 55%;
    height: 70%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    @media (max-width: 1100px){
        width: 100%;
    }

`
export const HomeSlide = styled.div` 
    z-index: 1;
    width: 60%;
    height: 75%;
`
export const HomeSlider = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    /* width: 60%; */
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    `
export const HomeContent = styled.div` 
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    width: calc(100% - 100px);
    padding: 30px;
    color: #fff;
    margin-bottom: -30%;
    background-color: green;
    text-align: center;
`

export const HomeImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 55vw;
    height: 67vh;
    object-fit: cover;
    
    @media (max-width: 1100px){
        left: 10%;
        width: 85vw;
        height: 67vh;
        object-fit: cover;
    } 
    @media (max-width: 750px){
        left: 0;
        width: 100vw;
        height: 57vh;
        object-fit: cover;
    } 
    @media (max-width: 520px){
        height: 50vh;
    } 
`
export const HomePart2 = styled.div`
    padding: 60px;

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
    margin: 60px;
    width : 300px;
    height: 150px;
    background: green;
    color: white;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;;
`
