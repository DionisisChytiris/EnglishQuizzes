import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const data = [
    {
        id: 1,
        url: '/prepositions_grammar',
        image: '../../images/grammarPhotos/img-1.jpg',
        // image: ,
        text: 'Prepositions'
    },
    {
        id: 2,
        url: '/articles_grammar',
        image: '../../images/grammarPhotos/img-2.jpg',
        text: 'Articles'
    },
    {
        id: 3,
        url: '/pronouns_grammar',
        image: '../../images/grammarPhotos/img-3.jpg',
        text: 'Pronouns'
    },
    {
        id: 4,
        url: '/modal_grammar',
        image: '../../images/grammarPhotos/img-5.jpg',
        text: 'Modals'
    },
    {
        id: 5,
        url: '/past_continuous',
        image: '../../images/grammarPhotos/img-4.jpg',
        text: 'Past Continuous '
    },
    {
        id: 6,
        url: '/tenses3_grammar',
        image: '../../images/grammarPhotos/img-6.jpg',
        text: 'Tenses 3'
    },
    {
        id: 7,
        url: '/generalTensesPage',
        image: '../../images/grammarPhotos/img-3.jpg',
        text: 'All Tenses'
    },
    {
        id: 8,
        url: '/verbs_to_ing_grammar',
        image: '../../images/grammarPhotos/img-7.jpg',
        text: 'Gerund/Infinitive'
    },
    {
        id: 9,
        url: '/conditionals_grammar',
        image: '../../images/grammarPhotos/img-2.jpg',
        text: 'Conditionals'
    },
    {
        id: 10,
        url: '/passive_grammar',
        image: '../../images/grammarPhotos/img-4.jpg',
        text: 'Passive'
    },
    // {
    //     id: 11,
    //     url: '/past_perfect_continuous',
    //     image: '../../images/img-2tiny.jpg',
    //     text: 'Past Perfect Continuous '
    // },
    // {
    //     id: 12,
    //     url: '/future_perfect_continuous',
    //     image: '../../images/img-2.jpg',
    //     text: 'Future Perfect Continuous '
    // },
]

const GrammarContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;

    .title{
        width: 80%;
        background: white;
        color: black;
        margin: auto;
        text-align: center;
        padding-top: 3%;    
        margin-bottom: -2%;   
        font-size: clamp(1.8rem, 2.4vw, 2.6rem);
        font-weight: 600;
        @media (max-width: 1050px){
            width: 100%;
        }
    }
`
const GrammarBox = styled.div`
    height: 100%;
    width: 80%;
    background: white;
    margin: 0px auto 0px;
    padding: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .card{
        display: flex;
        flex-direction: column;
        width: 25%;
        height: 10%;
        background-color: transparent;
        margin: 20px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(56, 125, 255, 0.37);
    }
    .img-wrap{
        position: relative;
        width: 100%;
        padding-top: 77%;
        overflow: hidden;
        background-color: gray;
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
        transform: scale(0.9);
        border-radius: 10px;
        filter: blur(2px);
    }
    .info{
        font-weight: 600;
        font-size: clamp(1.2rem, 1.8vw, 2rem);
        position: absolute;
        top: 60%;
        left: 20%;
        z-index: 1000;
        color: white;
    }
    @media (max-width: 1050px){
        width: 100%;
    }
    @media (max-width: 850px){
        width: 100%;
        .card{
            width: 40%;
        }
        .info{
            font-size: 3vh;
        }
    }
    @media (max-width: 550px){
        .card{
            width: 80%;
            height: 150px;
        }
        .info{
            top: 30%
        }
        img:hover{
        transform: scale(1.2);
        filter: blur(0)
    }
    }
`

const Grammar = () => {
    return (
        <>
        <div className="fatline"></div>
        <GrammarContainer>
            <div className='title'>Grammar</div>
            <GrammarBox>
                {data.map((a) => {
                    const { id, url, image, text } = a
                    return (
                        <Link className='card' to={url} key={id}>
                            <div className="img-wrap" >
                                <img src={image} alt='card'/>
                                <div className='info'>{text}</div>
                            </div>
                        </Link>                   
                    )
                })}
            </GrammarBox>     
        </GrammarContainer>
        </>
    )
}

export default Grammar

