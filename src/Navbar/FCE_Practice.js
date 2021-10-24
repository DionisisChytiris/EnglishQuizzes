import React from 'react'
import { Link } from 'react-router-dom'
import { fce_practice_links } from '../data_links'

const FCE_Practice = () => {
    return (
        <>
            <div className="fce_practice_page">
                <h1>FCE Practice</h1>
                <div className="fce_practice_boxes">
                    {fce_practice_links.map((a) => {
                        const { id, url, text, info} = a
                        return (
                            <>
                            <Link to={url} className='fce_practice_box' key={id}>
                                <div className="fce_practice_box_inner">          
                                    <div className="fce_practice_box_front" key={id}>{text}
                                    </div>
                                    <div className="fce_practice_box_back">
                                        Hello World
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

export default FCE_Practice
