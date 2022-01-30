import styled from 'styled-components'

export const GeneralTensesContainer = styled.div`
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
export const GeneralTensesBox = styled.div`
    height: 120vh;
    height: 100%;
    background: white;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .card{
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 200px;
        background-color: transparent;
        margin: 20px ;
        border-radius: 10px;
        overflow: hidden;
        /* -webkit-animation: fade-in 2s; */
        box-shadow: 0 6px 20px rgba(56, 125, 255, 0.37);
    }
    @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
    .img-wrap{
        position: relative;
        width: 100%;
        padding-top: 77%;
        overflow: hidden;
        background-color: white;
    }
    img{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        transition: all 0.2s linear;
        
    } 
    img:hover{
        transform: scale(1.1)
    }
    .info{
        background-color: white;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 10px;
        color: var(--cl-primary-darkblue);
        font-weight: 600;
        font-size: 16px;
    }
`