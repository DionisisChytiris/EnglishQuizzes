import React, { useState } from 'react'
import LazyLoad from 'react-lazyload';
import StepNavigation from '../General Pages/progressBar/StepNavigation'
// import { motion } from 'framer-motion/dist/framer-motion';
import Iframe from 'react-iframe';


const About = () => {
    const labelArray = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5','Step 6', 'Step 7', 'Step 8']
    const [currentStep, updateCurrentStep] = useState(1)

    function updateStep(step) {
        updateCurrentStep(step)
    }

    return (
        <>
            <div className="fatline"></div>
            <LazyLoad>

            <div className="about_page">
                <div className="progressBar">
                <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
                </div>
                <div className='progressBar_step'>Selected Step: {currentStep} </div>
                <button className='progressBar_button' onClick={()=>updateStep(currentStep - 1)}>Previous Step</button>
                <button className='progressBar_button' onClick={()=>updateStep(currentStep + 1)}>Next Step</button>
            {/* <motion.div
                style={{width: '50px', height: '50px', background: 'red', margin: '100px'}}
                // animate={{scale: [1,2,1]}}
                transition={{duration: 1}}
                whileHover={{ scale: 2.1 }}
            /> */}
            {/* <motion.div
                style={{width: '50px', height: '50px', background: 'white', margin: '-150px 70%'}}
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    // repeat: Infinity,
                    repeatDelay: 1
                  }}
            /> */}
            <div >
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                position="relative"
                width="50%"
                height="250vh"
                id="myId"
                // className="myClassname"
                // styles={{height: "25px"}}
            />
            </div>
            <br/>
            </div>
            </LazyLoad>
        </>
    )
}

export default About
