import React from 'react'
import { QuizzesButtonGrammar } from '../../../General Pages/QuizzesButton'
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
            {/* Button */}
            <QuizzesButtonGrammar page='/articles' text='Articles Quizzes'/>
            </ArticlesMain>
        </ArticlesGrammar>
    )
}

export default Articles_Grammar
