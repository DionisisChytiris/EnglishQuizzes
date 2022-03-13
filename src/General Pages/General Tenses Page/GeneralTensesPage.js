import React from 'react'
import { Link } from 'react-router-dom'
import ShowSideBar from '../ShowSideBar'
import SidebarGrammar from '../SidebarGrammar'
import styled from 'styled-components'

const Tenses1Grammar = styled.div`
    background: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Tenses1Side = styled.div`
    /* margin-top: 200px; */
`
const GeneralTensesContainer = styled.div`
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
const GeneralTensesBox = styled.div`
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

const data = [
    {
        id: 1,
        url: '/present_simple',
        image: '../../images/img-3.jpg',
        // image: ,
        text: 'Present Simple '
    },
    {
        id: 2,
        url: '/past_simple',
        image: '../../images/img-1.jpg',
        text: 'Past Simple '
    },
    {
        id: 3,
        url: '/future_simple',
        image: '../../images/img-2.jpg',
        text: 'Future Simple '
    },
    {
        id: 4,
        url: '/present_continuous',
        image: '../../images/img-2tiny.jpg',
        text: 'Present Continuous '
    },
    {
        id: 5,
        url: '/past_continuous',
        image: '../../images/img-4tiny.jpg',
        text: 'Past Continuous '
    },
    {
        id: 6,
        url: '/future_continuous',
        image: '../../images/img-3.jpg',
        text: 'Future Continuous '
    },
    {
        id: 7,
        url: '/present_perfect',
        image: '../../images/img-4.jpg',
        text: 'Present Perfect '
    },
    {
        id: 8,
        url: '/past_perfect',
        image: '../../images/img-3.jpg',
        text: 'Past Perfect '
    },
    {
        id: 9,
        url: '/future_perfect',
        image: '../../images/img-2.jpg',
        text: 'Future Perfect '
    },
    {
        id: 10,
        url: '/present_perfect_continuous',
        image: '../../images/img-1.jpg',
        text: 'Present Perfect Continuous '
    },
    {
        id: 11,
        url: '/past_perfect_continuous',
        image: '../../images/img-2tiny.jpg',
        text: 'Past Perfect Continuous '
    },
    {
        id: 12,
        url: '/future_perfect_continuous',
        image: '../../images/img-2.jpg',
        text: 'Future Perfect Continuous '
    },
]

const GeneralTensesPage =()=> {
    return (
        <>
        <div className="fatline"></div>
        <Tenses1Grammar>
            <ShowSideBar/>
           <Tenses1Side>
                 <SidebarGrammar/>
            </Tenses1Side>
            <GeneralTensesContainer>
                <br />
                <GeneralTensesBox>
                    {data.map((a) => {
                        const { id, url, image, text } = a
                        return (
                             <Link className='card' to={url} key={id}>
                                <div className="img-wrap" >
                                    <img src={image} alt='card'/>
                                </div>
                                <div className='info'>{text}</div>
                            </Link>                   
                        )
                    })}
                </GeneralTensesBox>
            </GeneralTensesContainer>
        </Tenses1Grammar>
        </>
    )
}

export default GeneralTensesPage
