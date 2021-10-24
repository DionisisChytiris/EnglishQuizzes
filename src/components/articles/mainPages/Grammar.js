import React from 'react'
// import '../style.css'
import {IoArrowRedo} from 'react-icons/io5'
import SidebarGrammar from '../../../General Pages/SidebarGrammar'
import {
    ArticlesGrammar,
    ArticlesSide,
    ArticlesMain,
    ArticlesBox1,
    ArticlesBox2,
    ArticlesBox3,
    ArticlesContainer,
} from '../articles.styled'

const Articles_Grammar = () => {
    return (
        <ArticlesGrammar>
            <ArticlesSide>
                <SidebarGrammar/>
            </ArticlesSide>
            <ArticlesMain>
                <ArticlesBox1>
                    <ArticlesContainer>
                        <h1>Articles Grammar</h1>
                    </ArticlesContainer>
                </ArticlesBox1>
                <ArticlesBox2>
                    <ArticlesContainer>
                       World
                    </ArticlesContainer>
                </ArticlesBox2>
                <ArticlesBox3>
                    <ArticlesContainer>
                        !!!
                    </ArticlesContainer>
                </ArticlesBox3>
            </ArticlesMain>
        </ArticlesGrammar>
    )
}

export default Articles_Grammar
