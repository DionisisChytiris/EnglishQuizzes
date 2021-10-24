import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const MainPage_Tenses3 = () => {
    return (
        <>
            <div className="tenses_page">
                <div className="tenses_title">Tenses 3</div>    
                <div className="tenses_boxes">
                    <Link to='/tenses3_grammar'>
                        <div className="tense_box">Grammar</div>
                    </Link>
                    <Link to='/tenses3_quizzes'>
                        <div className="tense_box">Quizzes</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MainPage_Tenses3
