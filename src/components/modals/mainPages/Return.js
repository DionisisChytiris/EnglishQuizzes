import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const Return = () => {
    return (
        <div className='quizzes_pre_quiz'>
            <div>Instructions</div>
            <Link to='/modal_grammar'>
                <div className="modal_grammar_button">Modal Grammar</div>
            </Link>
        </div>
    )
}

export default Return