import React, {useState} from 'react'
import StepNavigation from '../General Pages/progressBar/StepNavigation'


const About = () => {
    const labelArray = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5','Step 6', 'Step 7', 'Step 8']
    const [currentStep, updateCurrentStep] = useState(1)

    function updateStep(step) {
        updateCurrentStep(step)
    }

    return (
        <>
            <div className="about_page">
                <div className="progressBar">
                <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
                </div>
                <div className='progressBar_step'>Selected Step: {currentStep} </div>
                <button className='progressBar_button' onClick={()=>updateStep(currentStep - 1)}>Previous Step</button>
                <button className='progressBar_button' onClick={()=>updateStep(currentStep + 1)}>Next Step</button>
            </div>
        </>
    )
}

export default About
