import React from 'react'

const MainPage = () => {
    return (
        <div className='fce_mainPage1'>
            <h3>Multiple Choice Cloze</h3>
            <div className='fce_mainPage_a'>
                <div>
                    <div>Number of questions: </div>
                    <p>8</p>

                </div>
                <div>
                    <div>What is testing:</div>
                    <ul>
                        <li>vocabulary</li>
                        <li>phrasal verbs</li>
                        <li>prepositions</li>
                        <li>linking words</li>
                        <li>collocations</li>
                    </ul>
                </div>
            </div>
            <div className="general-advice">
                <div>General Advice</div>
                <ul>
                    <li>1. Read through the whole text as it may have an effect on the answer.</li>
                    <li>2. Don't choose your answer before you have read all the  options.</li>
                    <li>3. Take a guess if necessary! You will not lose marks.</li>
                    <li>4. Read through the text again.</li>
                </ul>
            </div>
        </div>
    )
}

export default MainPage