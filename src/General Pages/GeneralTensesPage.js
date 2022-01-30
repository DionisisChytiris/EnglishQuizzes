import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ShowSideBar from '../General Pages/ShowSideBar'
import SidebarGrammar from '../General Pages/SidebarGrammar'
import {Tenses1Grammar,Tenses1Side} from '../components/tenses1/mainPages/grammar.styled'
import { GeneralTensesBox, GeneralTensesContainer } from './GeneralTensesPage.styled'

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
                                    {/* <LazyLoad>
                                        <img src={image}/>
                                    </LazyLoad> */}
                                <img src={image}/>
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
