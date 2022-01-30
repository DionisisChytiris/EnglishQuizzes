import React, {useState} from 'react'
import styled from 'styled-components'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'

/////////// STYLING ////////////////////
const Sidebar = styled.div`
    width: 250px; 
    margin-right: 20px;
    margin-top: 30%;
    margin-bottom: 30%;
    /* background-color: #e7e6e6; */
    /* background: var(--cl-secondary-lightgrey); */
    background: var(--cl-primary-lightgrey);
    border: 0.4rem solid #e7e6e6;
    padding: 20px;
    border-radius: 2px;
    /* font-weight: 600; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .bar{
        height: 100%;
        height: 80vh;
    }
    .active{
        height: 110vh;
    }
    h1{
        padding-top: 10px;
        font-size: 20px;
        margin-bottom: 50px;
        text-decoration: underline;
    }
    .side {
        margin: 5px 0px;
        display: flex;
        font-size: 21px;
        padding: 8px 0px;
        border-bottom: 0.05rem solid lightgrey;
        /* background: lightgrey; */
    }
    .side.bold{
        font-weight: 600;
    }
    .side.color{
        color: var(--cl-primary-darkblue);
        /* margin-left: 10px; */
        padding-right: 20px;
        padding-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    p{
        font-size: 16px;
        padding-top: 3px;
        color: green;
    }
    .side a {
        color: var(--cl-primary-darkblue);
        margin-left: 10px;
    }
    .side a:hover,
    .side.color:hover {
        color: var(--cl-primary-blue);
        /* text-decoration-line: underline; */
    }
    .tenses-container{
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 230px;
        margin: auto;
        margin-top: -5px;
        background-color: #ccc;
        padding: 10px;
    }
    .tenses-container.re{
        padding-left: 0px;
    }
    .tenses-box{
        padding: 5px 20px;
    }
    .tenses-box a {
        font-size: 16px;
        color: black;
    }
    .tenses-box.resize a{
        font-size: 13px;
    }
    .tenses-box a:hover{
        color: var(--cl-primary-blue);
    }
    .arrow{
        font-size: 12px;
        padding-right: 15px;
    }
    @media (max-width: 1150px){
        /* display: none; */
        position: absolute;
        z-index: 1000;
        margin-left: -300px;
        background-color: var(--cl-primary-darkblue);
        color: white;
        /* height: 600px;
        overflow: hidden; */
        .side{
            border: none
        }
        .side a{
            color: white
        }
        .side.color {
        color: white;
    }
    }
   
`
//////////// DATA /////////////////////
const sidebarGrammarA = [
    {
        id: 1,
        url: '/prepositions_grammar',
        title: 'Prepositions',
    },
    {
        id: 2,
        url: '/articles_grammar',
        title: 'Articles',
    },
    {
        id: 3,
        url: '/pronouns_grammar',
        title: 'Pronouns',
    },
    {
        id: 4,
        url: '/modal_grammar',
        title: 'Modals',
    },
    {
        id: 6,
        url: '/tenses2_grammar',
        title: 'Tenses 2',
    },
    {
        id: 7,
        url: '/tenses3_grammar',
        title: 'Tenses 3',
    },
    {
        id: 5,
        url: '/generalTensesPage',
        title: 'All Tenses',
    }
]
const sidebarGrammarB = [
    {
        id: 1,
        url: '/verbs_to_ing_grammar',
        title: 'Gerund/Infinitive',
    },
    {
        id: 2,
        url: '/conditionals_grammar',
        title: 'Conditionals',
    },
    {
        id: 3,
        url: '/passive_grammar',
        title: 'Passive',
    }
]
const sidebarTenses1 = [
    {
        id: 1,
        url: '/present_simple',
        title: 'Present Simple',
    },
    {
        id: 2,
        url: '/past_simple',
        title: 'Past Simple',
    },
    {
        id: 3,
        url: '/future_simple',
        title: 'Future Simple',
    },
    {
        id: 4,
        url: '/present_continuous',
        title: 'Present Continuous',
    },
    {
        id: 5,
        url: '/past_continuous',
        title: 'Past Continuous',
    },
    {
        id: 6,
        url: '/future_continuous',
        title: 'Future Continuous',
    },
]
const sidebarTenses2 = [
    {
        id: 1,
        url: '/present_perfect',
        title: 'Present Perfect',
    },
    {
        id: 2,
        url: '/past_perfect',
        title: 'Past Perfect',
    },
    {
        id: 3,
        url: '/future_perfect',
        title: 'Future perfect',
    },
    {
        id: 4,
        url: '/present_perfect_continuous',
        title: 'Present Perfect Continuous',
    },
    {
        id: 5,
        url: '/past_perfect_continuous',
        title: 'Past Perfect Continuous',
    },
    {
        id: 6,
        url: '/future_perfect_continuous',
        title: 'Future Perfect Continuous',
    },
]

//////////////////////////////////////////////////////
// MAIN FUNCTION
const SidebarGrammar = () => {
    const [tenses1, setTenses1] = useState(false)
    const [tenses2, setTenses2] = useState(false)
    const [height, setHeight] = useState()
    const [arrow1, setArrow1] = useState()
    const [arrow2, setArrow2] = useState()

    const showTenses1 = () => {
        setTenses1(!tenses1)
        setTenses2(false)
        setHeight(!height)
        setArrow1(!arrow1)
    }
    const showTenses2 = () => {
        setTenses2(!tenses2)
        setTenses1(false)
        setHeight(!height)
        setArrow2(!arrow2)
    }
    return (
        <Sidebar>
            <div className={height ? 'active' : 'bar'}>
                <h1>More Grammar...</h1>
                {/* Grammar pages A */}
                {sidebarGrammarA.map((a) => {
                    const { id, url, title } = a
                    return (
                        <div className='side' key={id}>
                            <a href={url}>{title}</a>
                        </div>        
                    )
                })}
                {/* Tenses 1 page */}
                <div className="side color" onClick={showTenses1}>
                    <div>Tenses 1</div>
                    <div className='arrow'>{arrow1 ? <FaChevronUp/> : <FaChevronDown/>}</div>
                </div>
                {tenses1 && (
                    <div className='tenses-container'>
                        {sidebarTenses1.map((a) => {
                            const { id, url, title } = a
                            return (
                                <div className="tenses-box" key={id}>
                                    <a href={url}>{title}</a>
                                </div>    
                            )
                        })}
                    </div>
                )}
                {/* Tenses 2 page */}
                <div className="side color" onClick={showTenses2}>
                    <div>Tenses 2 </div>
                    <div className='arrow'>{arrow2 ? <FaChevronUp/> : <FaChevronDown/>}</div>
                </div>
                {tenses2 && (
                    <div className='tenses-container re'>
                    {sidebarTenses2.map((a) => {
                        const { id, url, title } = a
                        return (
                            <div className="tenses-box resize" key={id}>
                                <a href={url}>{title}</a>
                            </div>    
                        )
                    })}
                </div>
                )}
                {/* Grammar pages B */}
                {sidebarGrammarB.map((a) => {
                    const { id, url, title } = a
                    return (
                        <div className='side' key={id}>
                            <a href={url}>{title}</a>
                        </div>        
                    )
                })}
                <br />
                {/* Go back to Quizzes page */}
                <div className='side bold'>
                    <a href='/quizzes'>Quizzes</a>
                </div>
            </div>
        </Sidebar>
    )
}

export default SidebarGrammar
