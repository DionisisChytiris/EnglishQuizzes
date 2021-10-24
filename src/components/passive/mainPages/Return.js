import React from 'react'
import { Link } from 'react-router-dom'
import '../../modals/style.css'

const Return = () => {
    return (
        <div className='quizzes_pre_quiz'>
            <div>Instructions</div>
            <Link to='/passive_grammar'>
                <div className="modal_grammar_button">Passive Grammar</div>
            </Link>
        </div>
    )
}

export default Return