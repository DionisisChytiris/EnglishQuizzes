import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const GrammarContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
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
        height: 3%;
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
        font-weight: 600;
        font-size: clamp(1.2rem, 1.8vw, 2rem);
        position: absolute;
        top: 60%;
        left: 20%;
        z-index: 1000;
        color: white;
    }
    @media (max-width: 850px){
        width: 90%;
        .card{
            width: 40%;
        }
    }
    @media (max-width: 600px){
        width: 100%;
        .card{
            width: 40%;
        }
    }
`

const Grammar = () => {
    return (
        <>
        <div className="fatline"></div>
        <GrammarContainer>
            <GrammarBox>
                {data.map((a) => {
                    const { id, url, image, text } = a
                    return (
                        <Link className='card' to={url} key={id}>
                            <div className="img-wrap" >
                                <img src={image}/>
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

{/* <div className="grammar-container1">
    <div className="grammar-card">
        <div className="imgBx">
            <p>Hello</p>
        </div>
        <div className="grammar-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.Repellat possimus harum tenetur est laudantium distinctio officiis nobis nesciunt maiores. Ut voluptate, architecto expedita corporis ipsum eos quasi earum accusamus vitae!</p>
        </div>
    </div>
</div> */}