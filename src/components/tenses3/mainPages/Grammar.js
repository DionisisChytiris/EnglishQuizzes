import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'

const Tenses3Grammar = () => {

    return (
        <>
            <Link to='/tenses3' >
                <div className='tenses3_Link'>Tenses 3</div>
            </Link>

            <div className="tenses3_grammar_page">
                <div className="tenses3_grammar1">Hello</div>
                <div className="tenses3_grammar2">World</div>
                <div className="tenses3_grammar1">!!!</div>
            </div>
        </>
    )
}

export default Tenses3Grammar
