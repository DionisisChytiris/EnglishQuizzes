import React from 'react'
import styled from 'styled-components'
import {FaGlasses, FaRegGrin, FaLongArrowAltRight} from 'react-icons/fa'

const Sidebar = styled.div`
    width: 250px;
    height: 1000px;
    margin-top: -50%;
    border: 0.4rem solid #e7e6e6;
    padding: 20px;
    border-radius: 35px 0px 35px 0px;
    font-weight: 600;
    
    h1{
        padding-top: 10px;
        font-size: 20px;
        margin-bottom: 50px;
        text-decoration: underline;
    }
    
    .side {
        margin: 30px 0px;
        display: flex;
        font-size: 20px;
    }

    p{
        font-size: 16px;
        padding-top: 3px;
        color: green;
    }
    
    .side a {
        color: black;
        margin-left: 10px;
    }
    .side a:hover {
        color: var(--cl-primary-blue);
        text-decoration-line: underline;
    }

    @media (max-width: 1150px){
        display: none;
    }
`

const SidebarGrammar = () => {
    return (
        <>
            <Sidebar>
                <h1>More Grammar...</h1>
                <div className='side'>
                    <p><FaLongArrowAltRight/></p>                   
                    <a href='/prepositions_grammar'>Prepositions</a>
                </div>
                <div className='side'>
                    <p><FaRegGrin/></p>                   
                    <a href='/articles_grammar'>Articles</a>
                </div>
                <div className='side'>
                    <p><FaLongArrowAltRight/></p>                   
                    <a href='/pronouns_grammar'>Pronouns</a>
                </div>
                <div className='side'>
                    <p><FaLongArrowAltRight/></p>                   
                    <a href='/modal_grammar'>Modals</a>
                </div>
                <div className='side'>
                    <p><FaLongArrowAltRight/></p>                   
                    <a href='/tenses1_grammar'>Tenses 1</a>
                </div>
                <div className='side'>
                    <p><FaLongArrowAltRight/></p>                   
                    <a href='/tenses2_grammar'>Tenses 2</a>
                </div>
                <div className='side'>
                    <p><FaLongArrowAltRight/></p>                   
                    <a href='/verbs_to_ing_grammar'>Gerund / Infinitive</a>
                </div>
                <div className='side'>
                    <p><FaGlasses/></p>                   
                    <a href='/passive_grammar'>Passive</a>
                </div>
                <br/>
                <div className='side'>
                    <p><FaGlasses/></p>                   
                    <a href='/quizzes'>Quizzes</a>
                </div>
            </Sidebar>
        </>
    )
}

export default SidebarGrammar
