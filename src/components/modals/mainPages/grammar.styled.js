import styled from 'styled-components'

export const ModalGrammar = styled.div`
    background: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalMain = styled.div`
    background-color:  white;
    height: 100vh;
    height: 100%;
    /* width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
`
export const ModalSide = styled.div`
    margin-top: 100px;
`

export const ModalBox1 = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const ModalBox2 = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    font-size: 80px;
    height: 210vh;
    background-color: var(--cl-primary-blue);
    color: #fff;

    @media (max-width: 1024px){
        /* width: 300px;
        margin: auto; */
        height: 375vh;
        padding-top: 300px;
    }
    @media (max-width: 560px){
        /* width: 300px;
        margin: auto; */
        height: 255vh;
        padding-top: 300px;
    }
    `
export const ModalBox3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    height: 100vh;

    
    @media (max-width: 1024px){
        height: 250vh;
        position: relative;
        top:-500px;
        left: 0;
    }
`
export const ModalContainer = styled.div`
    width: 1100px;
    height: 100vh;
    position: relative;

    h2{
        /* font-size: 50px; */
        font-size: clamp(2rem, 3.2vw, 4.5rem);
        font-weight: 600;
        padding-top: 100px;
        text-align: center;
    }

    .fade-in1 {
        animation: fade-in 1s;
    }
    .fade-in2 {
        animation: fade-in 2s;
    }
    .fade-in3 {
        animation: fade-in 4s;
    }

    @keyframes fade-in1{
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @keyframes fade-in2{
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @keyframes fade-in3{
        0% {opacity:0;}
        100% {opacity:1;}
    }

    .p1 {
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        margin-top: 100px;
        padding: 0% 15%;
        text-align: center;
        color: var(--cl-primary-blue);
    }

    ul {
        text-align: center;
        padding-top: 90px;
        font-size: clamp(1.5rem, 2vw, 2.5rem);
    }

    h5{
        padding-bottom: 20px;
    }
    
    li {
        list-style: none;
        margin: 5px;
    }
`
export const ModalFlex = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;

    
    @media (max-width: 1024px){
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: -250px;
    }
`
export const ModalFlex1 = styled.div`
    width: 500px;
    color: white;
    position: relative;
    padding-top: 50px;

    .arrow {
        font-size: clamp(0.8rem, 2.5vw, 1.5rem);
        padding-top: 10px;
        position: absolute;
        margin-left: -10px;
    }

    h2 {
        /* margin-top: -7rem; */
        margin-top: -18%;
        margin-left: 6%;
        text-align: left;
        color: var(--cl-primary-darkblue);
        text-shadow: 0px 1px grey;
        font-size: clamp(1rem, 1.5vw, 1.1rem);
    }

    h1 {
        font-size: clamp(1.5rem, 2vw, 2.5rem);
        padding: 20px 30px;
        margin-bottom: 1.8rem;
    }

    .p2 {
        margin: 10px 30px;
        font-size:  clamp(0.7rem, 2.5vw, 1.3rem);
        color: black;
    }

    .p3 {
        margin: 10px 30px 0px 30px;
        font-size:  clamp(0.7rem, 2.5vw, 1.3rem);
        color: black;
    }

    span {
        color: white;
    }

    ul {
        font-size:  clamp(0.4rem, 2.5vw, 1rem);
        padding: 6px 80px;
        text-align: left;
        margin-bottom: 15px;
        color: black;
    }
    
    li {
        margin: -3px;
    }

    li.a {
        margin: -3px;
        padding: 2px;
        line-height: 1.2;
    }
    
    .modal1 {
        padding-left: 30px;
        margin-left: 20px;
        margin-bottom: -5px;
        font-size:  clamp(0.6rem, 2vw, 0.85rem);
        color: black;
    }
    .modal2 {
        margin-top: -15px;
        padding-left: 30px;
        margin-left: 20px;
        margin-bottom: 15px;
        font-size:  clamp(0.4rem, 2vw, 0.85rem);
        color: black;
    }
    
    .content {
        width: 510px;
        padding: 5px;
        margin-bottom: 15px;
    }

    .content1 {
        width: 510px;
        padding: 5px;
        margin-bottom: 15px;
    }

    @media (max-width: 1024px){
        margin-bottom: 100px;
        height: 170vh;
        padding-top:10px;

        .arrow {
            margin-left: 0px;
        }
        .content1 {
           margin-bottom: 5px;
       }
    }

    @media (max-width: 560px){
        h1 {
            padding: 0px 25%;
        }
        h2 {
            padding: 20% 15% 0% 20%;
        }
        .arrow {
            padding-left: 20%;
        }
        .p2 {
           line-height: 1.5;
           padding: 0px 15% 0px 18%;
        }
        .p3 {
            padding: 0px 15% 0px 18%;
            line-height: 1.5;
        }
        
        ul  {
            line-height: 2;
            padding: 0px 2% 0px 30%;
            margin-bottom: -2px;
        }
        
        li.a {
            line-height: 2;
            padding: 0px 10px 0px 0px;
            margin-top: 2px;
           
        }

        .modal1 {
           line-height: 1.5;
           padding: 10px 10px 0px 100px;
           margin-bottom: -12px;
           font-size: 0.5rem;
        }
        
        .modal2 {
            line-height: 1.5;
            padding: 8px 10px 0px 100px;
            margin-top: 5px;
            margin-bottom: -12px;
            font-size: 0.5rem;
        }
       .content {
           margin-bottom: 15px;
       }
    }
    `
export const ModalFlex2 = styled.div`
    width: 500px;
    /* color: white; */
    position: relative;
    padding-top: 50px;

    .arrow {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding-top: 10px;
        position: absolute;
        margin-left: -10px;
    }

    h2 {
        /* margin-top: -7rem; */
        margin-top: -18%;
        margin-left: 6%;
        text-align: left;
        text-shadow: 0px 1px grey;
        font-size: clamp(1rem, 1.5vw, 1.1rem);
    }
    
    h1.b {
        color: var(--cl-primary-blue);
        font-size: clamp(1.7rem, 2vw, 2.5rem);
        padding: 20px 30px;
        margin-bottom: 1.8rem;
    }

    .p2 {
        margin: 10px 30px;
        font-size:  clamp(1rem, 2.5vw, 1.3rem);
        color: black;
    }

    .p3 {
        margin: 10px 30px 0px 30px;
        font-size:  clamp(1rem, 2.5vw, 1.3rem);
        color: black;
    }

    .content span {
        color: var(--cl-primary-blue);
    }

    ul {
        font-size:  clamp(0.7rem, 2.5vw, 1rem);
        padding: 6px 80px;
        text-align: left;
        margin-bottom: 15px;
        color: black;
    }
    
    li {
        margin: -3px;
    }

    li.a {
        margin: -3px;
        padding: 2px;
        line-height: 1.2;
    }
    
    .modal1 {
        padding-left: 30px;
        margin-left: 20px;
        margin-bottom: -5px;
        font-size:  clamp(0.8rem, 2vw, 0.85rem);
        color: black;
    }
    .modal2 {
        margin-top: -15px;
        padding-left: 30px;
        margin-left: 20px;
        margin-bottom: 15px;
        font-size:  clamp(0.8rem, 2vw, 0.85rem);
        color: black;
    }
    
    .content {
        width: 510px;
        padding: 5px;
        margin-bottom: 15px;
    }

    .content1 {
        width: 510px;
        padding: 5px;
        margin-bottom: 15px;
    }

    @media (max-width: 1024px){
        /* margin-bottom: 100px; */
        height: 70vh;
        padding-top:300px;

        .arrow {
            margin-left: 0px;
        }
        .content1 {
           margin-bottom: 5px;
       }
    }

    @media (max-width: 560px){
        h1 {
            padding: 0px 35% 0px 35%;
            color: red;
        }
        h2 {
            padding: 20% 15% 0% 20%;
        }
        .arrow {
            padding-left: 20%;
        }
       .p2 {
           padding: 0px 20%;
       }
       .p3 {
           padding: 0px 20%;
       }
       ul  {
           padding: 0px 30%;
       }
       .modal1 {
           padding: 0px 25%;
           margin-bottom: -12px;
           font-size: 0.5rem;
       }
       .modal2 {
           padding: 0px 20%;
           margin-bottom: -12px;
           font-size: 0.7rem;
       }
       .content {
           margin-bottom: 5px;
       }
    }
    `
export const ModalFlexLineWhite = styled.div`
    width: 2px;
    height: 210vh;
    background-color: white;
    position: relative;
    
    
    @media (max-width: 1024px){
        width: 500px;
        height: 2px;
        margin: 20% 0px 10% 0px;
        /* margin-top: -90%; */
    }
    @media (max-width: 780px){
        /* margin-top: -50%; */
    }
    @media (max-width: 560px){
        width: 130px;
        border-radius: 20px;
        height: 2px;
        margin-bottom: 15%;
        margin-top: -80%;
        /* display:  none; */
    }
    @media (max-width: 400px){
        /* margin-top: -70%; */
    }
    @media (max-width: 380px){
        /* margin-top: -70%; */
    }
    @media (max-width: 330px){
        /* margin-top: -35%;
        margin-bottom: 10%; */
    }
    `
export const ModalFlexLineBlue = styled.div`
    width: 2px;
    height: 100vh;
    background-color: var(--cl-primary-blue);
    position: relative;
    
    
    @media (max-width: 1024px){
        width: 500px;
        height: 2px;
        margin: 250px 0px -200px 0px;
    }
    @media (max-width: 560px){
        width: 300px;
        height: 2px;
        margin: 60px 0px;
    }
    
    `
