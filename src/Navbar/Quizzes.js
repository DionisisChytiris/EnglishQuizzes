import React from 'react'
import { Link } from 'react-router-dom'
import { quizzes_links } from '../data_links'
// import {IoIosArrowDown} from 'react-icons/io'

const Quizzes = () => {
    return (
        <>
            <div className="quizzes_page">
                <h1>Grammar Quizzes</h1>
                <div className="quizzes_boxes">
                    {quizzes_links.map((a) => {
                        const { id, url, text, info1, info2, info3} = a
                        return (
                            <>
                            {/* <Link to={url} className='quizzes_box'>
                                <div className="grammar-card1">
                                    <div className="quizzes_box_container">
                                            <div className="quizzes_box_title" key={id}>{text}</div>
                                            <div className="quizzes_box_info">
                                                <div className="quizzes_box_info1">
                                                    More info
                                                    <IoIosArrowDown/>
                                                </div>
                                            </div>
                                    </div>
                                <div className="grammar-content1">
                                        {info1} <br/> {info2} <br/> {info3}
                                </div>
                                </div>
                            </Link>                                     */}
                            <Link to={url} className='quizzes_box' key={id}>
                                <div className="quizzes_box_inner">
                                    <div className="quizzes_box_front" key={IDBDatabase}>{text}</div>
                                        <div className="quizzes_box_back">
                                            <p>{info1}</p>
                                            <p>{info2}</p>
                                            <p>{info3}</p>
                                        </div>
                                </div>
                            </Link>                                    
                            
                            </>    
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Quizzes
