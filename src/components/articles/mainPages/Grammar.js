import React from 'react'
// import '../style.css'
import {IoArrowRedo} from 'react-icons/io5'
import ShowSideBar from '../../../General Pages/ShowSideBar'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    ArticlesGrammar,
    ArticlesSide,
    ArticlesMain,
    Articles1
} from './grammar.styled'

const Articles_Grammar = () => {
    return (
        <ArticlesGrammar>
            <ShowSideBar/>
            <ArticlesSide>
                <SidebarGrammar/>
            </ArticlesSide>
            <ArticlesMain>
                <Articles1>
                <div className='title'>Articles</div>
                    <h1>Articles One</h1>
                    <h1>Articles Two</h1>
                </Articles1>
            </ArticlesMain>
        </ArticlesGrammar>
    )
}

export default Articles_Grammar
